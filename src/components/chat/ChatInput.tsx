"use client";

import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { SendHorizontal, Paperclip, Mic } from "lucide-react";

type Props = {
  loading: boolean;
  onSend: (message: string) => void;
};

export default function ChatInput({ loading, onSend }: Props) {
  const [message, setMessage] = useState("");

  function send() {
    if (!message.trim() || loading) return;

    onSend(message);
    setMessage("");
  }

  return (
    <div className="border-t border-zinc-800 bg-zinc-950/80 backdrop-blur-xl px-6 py-5">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-zinc-700 bg-zinc-900 shadow-2xl">
          <TextareaAutosize
            minRows={1}
            maxRows={8}
            value={message}
            placeholder="Ask Jabali AI anything..."
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            className="
              w-full
              resize-none
              bg-transparent
              px-6
              pt-5
              text-zinc-100
              outline-none
              placeholder:text-zinc-500
            "
          />

          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex gap-2">
              <button className="rounded-xl p-2 hover:bg-zinc-800">
                <Paperclip size={18} />
              </button>

              <button className="rounded-xl p-2 hover:bg-zinc-800">
                <Mic size={18} />
              </button>
            </div>

            <button
              onClick={send}
              disabled={loading}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                bg-violet-600
                transition
                hover:bg-violet-500
                disabled:bg-zinc-700
              "
            >
              <SendHorizontal size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
