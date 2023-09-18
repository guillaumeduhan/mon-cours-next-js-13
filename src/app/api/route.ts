import { NextResponse } from "next/server";

export async function GET() {
  // toutes les opérations que je veux
  return NextResponse.json({
    name: "Guillaume",
  });
}

export async function POST(request: Request) {
  // users mongodb, supabase...
  try {
    const response = await fetch("https://api.codewithguillaume.com", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    });
    if (response) {
      const data = await response.json();
      console.log(data);
      return NextResponse.json({
        success: true,
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
    });
  }
  // const users = ["Guillaume", "John"];
  // const body = await request.json();
  // const { newUsers } = body;

  // if (!newUsers) throw new Error("No new users found.");

  // return NextResponse.json({
  //   users: [...users, ...newUsers],
  // });
}
