// src/app/api/route.js
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt&type=single"
    );

    if (!res.ok) throw new Error("Failed to fetch joke");

    const joke = await res.text();

    return new NextResponse(joke, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  } catch (error) {
    console.error("Error fetching joke:", error);
    return new NextResponse("Failed to fetch joke", { status: 500 });
  }
}
