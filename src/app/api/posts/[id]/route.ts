import { NextResponse } from "next/server";

const posts = [
  {
    id: 1,
    slug: "en-route-pour-dubai",
    title: "En route pour Dubai",
    description: "Cet article parle de Dubai.",
    img_url: "/dubai.jpeg",
  },
  {
    id: 2,
    slug: "paris-ville-du-monde",
    title: "Paris, la plus belle ville du monde",
    description: "Cet article parle de Paris.",
    img_url: "/paris.jpeg",
  },
];

export async function GET(request: Request, context: any) {
  const { params } = context;
  return NextResponse.json({
    post: posts.find((x) => x.id.toString() === params.id),
  });
}
