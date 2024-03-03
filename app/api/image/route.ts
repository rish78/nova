import { auth } from "@clerk/nextjs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import {increaseApiLimit, checkApiLimit} from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const apiKey = process.env.GEMINI_API_KEY;
let conversationContext: [string, string][] = [];
let currentMessages: { role: string, parts: string }[] = [];

export async function POST(req: Request) {
    // For text-only input, use the gemini-pro model
    try {
        
        const {userId} = auth();
        const body = await req.json();
        const {prompt, amount = 1, resolution = "512x512"} = body;

        if(!userId){
            return new NextResponse("Unauthorized", {status: 401})
        }
        if(!apiKey){
            return new NextResponse("API key not found", {status: 500})
        }

        if(!prompt){
            return new NextResponse("Prompt is required", {status: 400})
        }

        if(!amount){
            return new NextResponse("Amount is required", {status: 400})
        }

        if(!resolution){
            return new NextResponse("Resolution is required", {status: 400})
        }

        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();
        if(!freeTrial && !isPro){
            return new NextResponse("Free trial has expired", {status: 403});
        }

        for (const [inputText, responseText] of conversationContext) {
            currentMessages.push({ role: "user", parts: inputText });
            currentMessages.push({ role: "model", parts: responseText });
        }

        

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        const chat = model.startChat({
        history: currentMessages,
        generationConfig: {
            maxOutputTokens: 10000,
        },
        });
    
        console.log(currentMessages);
    
        const result = await chat.sendMessage(prompt);
        const response = await result.response;
        console.log(response)

        if(response.candidates && response.candidates[0].finishReason === "STOP" && !isPro)
            await increaseApiLimit();
        
        const text = response.text();
        conversationContext.push([prompt, text]);
        return new NextResponse(text, {status: 200});
    }  catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", {status: 500});
    }
}
  