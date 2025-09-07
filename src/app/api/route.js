// src/app/api/route.js
import { NextResponse } from 'next/server';
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
