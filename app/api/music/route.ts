import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";
import {increaseApiLimit, checkApiLimit} from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const apiKey = process.env.REPLICATE_API_KEY || "";
const replicate = new Replicate({
    auth: apiKey,
});

export async function POST(req: Request) {
    // For text-only input, use the gemini-pro model
    try {
        
        const {userId} = auth();
        const body = await req.json();
        const {prompt} = body;

        if(!userId){
            return new NextResponse("Unauthorized", {status: 401})
        }
        if(!apiKey){
            return new NextResponse("API key not found", {status: 500})
        }
        if(!prompt){
            return new NextResponse("Prompt is required", {status: 400})
        }

        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();
        if(!freeTrial && !isPro){
            return new NextResponse("Free trial has expired", {status: 403});
        }
        

        const response = await replicate.run(
            "meta/musicgen:b05b1dff1d8c6dc63d14b0cdb42135378dcb87f6373b0d3d341ede46e59e2b38",
            {
              input: {
                top_k: 250,
                top_p: 0,
                prompt: prompt,
                duration: 33,
                temperature: 1,
                continuation: false,
                model_version: "stereo-large",
                output_format: "wav",
                continuation_start: 0,
                multi_band_diffusion: false,
                normalization_strategy: "peak",
                classifier_free_guidance: 3
              }
            }
          );
    
        
        console.log(response)
        
        if(!isPro)
            await increaseApiLimit();
     
        return NextResponse.json(response);
    }  catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", {status: 500});
    }
}
  