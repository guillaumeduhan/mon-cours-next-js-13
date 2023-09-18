const fetchPost = async (postId: string) => {
  const post = await fetch(
    `https://mon-cours-next-js-13.vercel.app/api/posts/${postId}`,
    {
      method: "GET",
    }
  );
  return post.json();
};

export async function generateMetadata({ params }: any) {
  const { post }: any = await fetchPost(params.id);

  return {
    title: post.title,
    description: post.title,
    openGraph: {
      title: post.title,
      description: post.title,
      url: `/posts/${params.id}`,
      siteName: "Codewithguillaume",
      images: [
        {
          url: post.img_url,
          width: 1260,
          height: 800,
        },
      ],
      locale: "en-US",
      type: "website",
    },
  };
}

export default async function PostID({ params }: any) {
  return <div className="flex gap-2">Hello {params.id}</div>;
}
