import { NextResponse } from 'next/server';
import { Ollama } from 'ollama';

export async function POST(req) {
  try {
    const { input } = await req.json();

    if (!input || input.trim() === "") {
      return NextResponse.json({ error: "Missing input text" }, { status: 400 });
    }

    const ollama = new Ollama({ host: process.env.OLLAMA_HOST });

    const systemPrompt = `You're a helpful assistant. Summarize the user's input into a short, 3-4 word title. Use lowercase. No punctuation.`;

    const chatMessages = [
      { role: "system", content: systemPrompt },
      { role: "user", content: input }
    ];

    const res = await ollama.chat({
      model: process.env.OLLAMA_NAME_MODEL,
      messages: chatMessages
    });

    let title = res.message?.content?.trim().toLowerCase();

    if (!title || title.length === 0) {
      title = input.split(" ").slice(0, 4).join(" ").toLowerCase();
    }

    return NextResponse.json({ title });

  } catch (err) {
    console.error("[summarize-title]", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
