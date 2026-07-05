"use client";

import type { Message } from "@/types/chat";
import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import MarkdownRenderer from "./MarkdownRenderer";

type Props = {
  message: Message;
};

export default function MessageBubble({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex gap-4 ${isUser ? "justify-end" : "justify-start"}`}
    >
      {!isUser && (
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600">
          <Bot size={20} />
        </div>
      )}

      <div
        className={`max-w-[75%] rounded-3xl px-5 py-4 leading-7 ${
          isUser
            ? "bg-violet-600 text-white"
            : "border border-zinc-800 bg-zinc-900 text-zinc-100"
        }`}
      >
        <MarkdownRenderer>{message.text}</MarkdownRenderer>
      </div>

      {isUser && (
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-800">
          <User size={20} />
        </div>
      )}
    </motion.div>
  );
}
