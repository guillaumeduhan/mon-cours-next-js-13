const BASE_URL = "https://mon-cours-next-js-13.vercel.app";

const fetchPost = async (postId: string) => {
  const post = await fetch(`${BASE_URL}/api/posts/${postId}`, {
    method: "GET",
  });
  return post.json();
};

export async function generateMetadata({ params }: any) {
  const { post } = await fetchPost(params.id);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${BASE_URL}/post/${post.id}`,
      type: "website",
      siteName: post.title,
      locale: "fr-FR",
      images: [
        {
          url: `${BASE_URL}/${post.img_url}`,
        },
      ],
    },
  };
}

export default async function PostID({ params }: any) {
  return <div>hello {params.id}</div>;
}
