import { Code, ImageIcon, MessageSquare, Music, Video } from "lucide-react";

export const tools = [
    {
      label: "Conversation",
      icon: MessageSquare,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      href: "/conversation"
    },
    {
      label: "Image Generation",
      icon: ImageIcon,
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
      href: "/image"
    },
    {
      label: "Video Generation",
      icon: Video,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      href: "/video"
    },
    {
      label: "Music Generation",
      icon: Music,
      color: "text-emerald-700",
      bgColor: "bg-emerald-700/10",
      href: "/music"
    },
    {
      label: "Code Generation",
      icon: Code,
      color: "text-green-700",
      bgColor: "bg-green-700/10",
      href: "/code"
    },
    
  ]