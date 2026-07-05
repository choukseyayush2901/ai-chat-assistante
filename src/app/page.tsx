import AppLayout from "@/components/layout/AppLayout";
import Chat from "@/components/chat/Chat";

export default function Home() {
  return (
    <AppLayout>
      <Chat />
    </AppLayout>
  );
}

// "use client";

// import { useState } from "react";
// import type { Message } from "@/types/chat";

// export default function Home() {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [loading, setLoading] = useState(false);

//   async function sendMessage() {
//     if (!message.trim() || loading) return;

//     setLoading(true);

//     const userMessage: Message = {
//       role: "user",
//       text: message,
//     };

//     const updatedMessages = [...messages, userMessage];

//     setMessages(updatedMessages);

//     try {
//       const res = await fetch("/api/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           messages: updatedMessages,
//         }),
//       });

//       if (!res.ok) {
//         throw new Error("Failed to fetch response");
//       }

//       const reader = res.body?.getReader();

//       if (!reader) {
//         throw new Error("Response body is empty");
//       }

//       const decoder = new TextDecoder();

//       let result = "";

//       while (true) {
//         const { done, value } = await reader.read();

//         if (done) break;

//         const chunk = decoder.decode(value);

//         result += chunk;

//         setMessages((prev) => {
//           const updated = prev.map((msg, index) => {
//             if (index === prev.length - 1 && msg.role === "model") {
//               return {
//                 ...msg,
//                 text: result,
//               };
//             }

//             return msg;
//           });

//           if (
//             updated.length === 0 ||
//             updated[updated.length - 1].role !== "model"
//           ) {
//             updated.push({
//               role: "model",
//               text: result,
//             });
//           }

//           return updated;
//         });
//       }

//       setMessage("");
//     } catch (error) {
//       console.error("Error:", error);

//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "model",
//           text: "❌ Something went wrong. Please try again.",
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <main className="max-w-xl mx-auto mt-20 space-y-4">
//       <textarea
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         className="w-full border rounded p-3"
//         rows={6}
//       />

//       <button
//         onClick={sendMessage}
//         disabled={loading}
//         className={`px-4 py-2 rounded text-white ${
//           loading
//             ? "bg-gray-500 cursor-not-allowed"
//             : "bg-black hover:bg-gray-800"
//         }`}
//       >
//         {loading ? "Loading..." : "Ask Gemini"}
//       </button>

//       <div className="space-y-4">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`rounded p-4 ${
//               msg.role === "user"
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-800 text-white"
//             }`}
//           >
//             <strong>{msg.role === "user" ? "You" : "Gemini"}</strong>

//             <p className="mt-2 whitespace-pre-wrap">{msg.text}</p>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
