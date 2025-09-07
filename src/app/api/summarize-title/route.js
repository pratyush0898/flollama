import { NextResponse } from "next/server";
import { Ollama } from "ollama";
import JokeAPI from 'sv443-joke-api';

export async function GET() {
  try {
    const joke = await JokeAPI.getJoke({
      categories: ['Programming'],
      blacklistFlags: ['nsfw', 'religious', 'political', 'racist', 'sexist', 'explicit'],
      type: 'single',
      format: 'txt', // ensures the joke comes back as plain text
    });

    return new NextResponse(joke, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (error) {
    console.error('Error fetching joke:', error);

    return new NextResponse('Failed to fetch joke', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}

export async function POST(req) {
  try {
    const { input } = await req.json();

    if (!input || input.trim() === "") {
      return NextResponse.json(
        { error: "Missing input text" },
        { status: 400 }
      );
    }

    const ollama = new Ollama({ host: process.env.OLLAMA_HOST });

    const systemPrompt = `Summarize the user's input into a short 2 to 4 word title of a simple Conversation. Use only lowercase letters. Do not include punctuation or quotes. Respond with the title only and nothing else.`;

    const chatMessages = [
      { role: "system", content: systemPrompt },
      { role: "user", content: input },
    ];

    const res = await ollama.chat({
      model: process.env.OLLAMA_NAME_MODEL,
      messages: chatMessages,
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
