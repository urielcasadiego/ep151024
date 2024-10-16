import { NextResponse } from 'next/server';

let scores = [
  { id: 1, gameName: 'Game 1', score: 100, user: 'user1@example.com' },
  { id: 2, gameName: 'Game 2', score: 200, user: 'user2@example.com' },
];

export async function GET() {
  return NextResponse.json(scores);
}

export async function POST(request) {
  const { gameName, score, user } = await request.json();
  const newScore = { id: scores.length + 1, gameName, score, user };
  scores.push(newScore);
  return NextResponse.json(newScore, { status: 201 });
}

export async function DELETE(request) {
  const { id } = await request.json();
  scores = scores.filter(score => score.id !== id);
  return NextResponse.json({ message: 'Score deleted' });
}
