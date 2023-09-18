import { NextResponse } from "next/server";

export async function GET() {
  // toutes les opérations que je veux
  return NextResponse.json({
    hello: "World",
  });
}
