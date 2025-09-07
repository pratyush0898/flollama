import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

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

export async function POST(req) {
  try {
    const { input } = await req.json();

    if (!input || input.trim() === "") {
      return NextResponse.json(
        { error: "Missing input text" },
        { status: 400 }
      );
    }

    // System prompt to summarize input into 2-4 word lowercase title
    const systemPrompt = `You are an AI assistant that generates concise conversation titles. Given the user's starting prompt for a conversation with an AI assistant, create a 2 to 4 word title that summarizes the conversation. Use only lowercase letters. Do not include punctuation, quotes, or any extra text. Respond with exactly the title and nothing else.`;

    // Combine system prompt + user input
    const prompt = `${systemPrompt}\n${input}`;

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL, // model from env
      contents: prompt,
    });

    let title = response.text?.trim().toLowerCase();

    // fallback if Gemini returns empty
    if (!title || title.length === 0) {
      title = input.split(" ").slice(0, 4).join(" ").toLowerCase();
    }

    return NextResponse.json({ title });

  } catch (err) {
    console.error("[summarize-title]", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
