export async function generateStaticParams({ params }: any) {
  const post = await fetch(
    `https://mon-cours-next-js-13.vercel.app/api/posts/${params.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return {
    title: post.title,
  };
}

export default async function PostID({ params }: any) {
  return <div className="flex gap-2">Hello {params.id}</div>;
}
