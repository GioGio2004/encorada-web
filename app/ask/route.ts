// app/api/ask/route.ts

import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Initialize the API with your key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Initialize the model - make sure the model name is correct
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Generate content from the message
    const result = await model.generateContent(message);
    const responseText = result.response.text();

    if (responseText) {
      return NextResponse.json({ response: responseText });
    } else {
      return NextResponse.json({ error: 'Could not get a response from Gemini AI' }, { status: 500 });
    }

  } catch (error) {
    console.error('Error during Gemini API call:', error);

    if (error instanceof Error) {
      return NextResponse.json({
        error: 'Failed to communicate with Gemini AI',
        details: error.message
      }, { status: 500 });
    }

    return NextResponse.json({
      error: 'Failed to communicate with Gemini AI',
      details: String(error)
    }, { status: 500 });
  }
}


