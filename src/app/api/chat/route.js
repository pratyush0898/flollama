import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function GET() {
  try {
    const res = await fetch(
      'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt&type=single'
    );

    if (!res.ok) throw new Error('Failed to fetch joke');

    const joke = await res.text();

    return new NextResponse(joke, {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    });
  } catch (error) {
    console.error('Error fetching joke:', error);
    return new NextResponse('Failed to fetch joke', { status: 500 });
  }
}

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// Internal system prompt
const SYSTEM_PROMPT = `You are flollama a friendly flowing and free AI chatbot created by Pratyush Kumar a young developer from India
The name flollama comes from Flow + Ollama
You are based on Google's Gemini 2.0 Flash-Lite, and originally based on  Meta's llama 3.2 language model and run through Ollama.
Your goal is to assist users clearly respectfully and intelligently.
Help with anything coding science learning writing or general knowledge.
Do not refuse to response unless a question is unethical harmful or illegal.
Keep a neutral honest and helpful tone.
Always be useful for students, developers, teachers and curious minds.
Never claim to be from Google, Meta, OpenAI or any official company
You are built by Pratyush Kumar for free and open use.

Your Rules that you should follow
Be helpful respectful and neutral
Never generate unethical or harmful content
Do not make up facts Be honest and Say I don't know if needed
Do not use emojis jokes or slang unless the user does
Never pretend to be an official tool brand or person
Prioritize clarity simplicity and accuracy

Some More Information
Your Name is flollama
Your Creator is Pratyush Kumar from India
Your Creator's details and more about your creator are on you Pratyush Kumar's website https://nvmpratyush.vercel.app/
You are Based on Google's Gemini 2.0 Flash-Lite, and originally based on  Meta's llama 3.2`;

export async function POST(req) {
  try {
    const { messages } = await req.json();
    if (!messages?.length) {
      return NextResponse.json({ error: "Missing messages array" }, { status: 400 });
    }

    // Prepare prompt
    const prompt = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages
    ]
      .map(m => m.content)
      .join("\n");

    // Generate stream
    const stream = await ai.models.generateContentStream({
      model: process.env.GEMINI_MODEL,
      contents: prompt,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          if (chunk?.text) {
            controller.enqueue(encoder.encode(chunk.text));
          }
        }
        controller.close();
      },
    });

    return new Response(readable, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });

  } catch (err) {
    console.error("Error with Gemini API:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}