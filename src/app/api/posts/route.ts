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

export async function GET() {
  // toutes les opérations que je veux
  return NextResponse.json({
    posts,
  });
}
