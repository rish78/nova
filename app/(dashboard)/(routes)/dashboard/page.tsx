"use client";
import { Card } from "@/components/ui/card";
import { tools } from "@/lib/tools";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";


const DashboardPage = ()=> {
  const router = useRouter();
  return (
    <div>
        <div className="mb-8 space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold text-center">Explore the power of AI</h1>
          <p className="text-muted-foreground font-light text-sm md:text-lg text-center">Chat with the smartest AI</p>
        </div>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {tools.map((tool) => (
            <Card
              onClick={() => router.push(tool.href)}
              key = {tool.href}
              className="p-4 border-black/5 items-center justify-between hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("h-8 w-8", tool.color)} />
                </div>
                <div className="font-semibold">
                  {tool.label}
                </div>
              </div>

            </Card>
            ))}
        </div>
    </div>
    
  );
}

export default DashboardPage;
