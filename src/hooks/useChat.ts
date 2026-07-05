"use client";

import { useState } from "react";
import type { Message } from "@/types/chat";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage(message: string) {
    if (!message.trim() || loading) return;

    setLoading(true);

    const userMessage: Message = {
      role: "user",
      text: message,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const reader = res.body?.getReader();

      if (!reader) {
        throw new Error("No reader");
      }

      const decoder = new TextDecoder();

      let result = "";

      const sleep = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value, { stream: true });

        for (const char of chunk) {
          result += char;

          setMessages((prev) => {
            const updated = prev.map((msg, index) => {
              if (index === prev.length - 1 && msg.role === "model") {
                return {
                  ...msg,
                  text: result,
                };
              }

              return msg;
            });

            if (
              updated.length === 0 ||
              updated[updated.length - 1].role !== "model"
            ) {
              updated.push({
                role: "model",
                text: result,
              });
            }

            return updated;
          });

          await sleep(10);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return {
    messages,
    loading,
    sendMessage,
  };
}

// test
