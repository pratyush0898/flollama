// File: /app/api/chat/route.js

import { NextResponse } from 'next/server';
import { Ollama } from 'ollama';

export async function POST(req) {
  try {
    const { messages } = await req.json();

    // Connect to local Ollama server
    const ollama = new Ollama({ host: process.env.OLLAMA_HOST });

    // Start streaming the model's response
    const stream = await ollama.chat({
      model: process.env.OLLAMA_MODEL,
      messages,
      stream: true
    });

    // Stream chunks back to the client
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const content = chunk.message?.content;
          if (content) {
            controller.enqueue(encoder.encode(content));
          }
        }
        controller.close();
      }
    });

    return new Response(readable, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });

  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
