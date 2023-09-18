import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const users = [
    {
      id: 12, // number
    },
    {
      id: 15,
    },
  ];
  console.log(params.id);
  return NextResponse.json({
    user: users.find((x) => x.id.toString() === params.id),
  });
}
