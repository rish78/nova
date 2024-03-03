"use client";

import * as z from "zod";
import { Heading } from "@/components/heading";
import { Image, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";

import {amountOptions, formSchema, resolutionOptions} from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import Empty from "@/components/empty";
import { Loader } from "@/components/oader";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useProModal } from "@/hooks/use-pro-modal";


const ImagePage = ()=> {
  const proModal = useProModal();
    const router = useRouter();
    const [images, setImages] = useState<string[]>([]);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
            amount: "1",
            resolution: "512x512",
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try{
            setImages([]);
            const response = await axios.post("/api/conversation", values);

            const urls = response.data.map((image: {url: string}) => image.url);
            
            setImages(urls);
            form.reset();
        }catch(error:any){
          if(error?.response?.status ===403) {
            proModal.onOpen();
          }
        }finally{
          router.refresh();
        }
    };

  return (
    <div>
      <Heading
        title="Image Generation"
        description="Create realistic images using text prompts."
        icon={Image}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
       />
       <div className="px-4 lg:px-8">
        <div>
        <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-6">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading} 
                        placeholder="A picture of a cat flying a plane." 
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control = {form.control}
                name= "amount"
                render= {({field}) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isLoading}
                      onValueChange = {field.onChange}
                      value= {field.value}
                      defaultValue = {field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {amountOptions.map((option) => (
                          <SelectItem
                            key = {option.value}
                            value = {option.value}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control = {form.control}
                name= "resolution"
                render= {({field}) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isLoading}
                      onValueChange = {field.onChange}
                      value= {field.value}
                      defaultValue = {field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {resolutionOptions.map((option) => (
                          <SelectItem
                            key = {option.value}
                            value = {option.value}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
            {isLoading && (
                <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                    <Loader />
                </div>
            )}
            {images.length === 0 && !isLoading && (
                <div>
                    <Empty label="No images generated" />
                </div>
            )}
            <div className="flex flex-col-reverse gap-y-4">
              Images will be rednered here.
            </div>
        </div>
       </div>
    </div>
  );
}

export default ImagePage;