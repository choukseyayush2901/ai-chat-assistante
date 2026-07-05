import { NextResponse } from "next/server";
import { ai } from "@/lib/gemini";

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const geminiMessages = messages.map(
      (msg: { role: "user" | "model"; text: string }) => ({
        role: msg.role,
        parts: [
          {
            text: msg.text,
          },
        ],
      }),
    );

    const response = await ai.models.generateContentStream({
      model: "gemini-2.5-flash",
      contents: geminiMessages,
    });

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of response) {
          controller.enqueue(encoder.encode(chunk.text ?? ""));
        }

        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}
