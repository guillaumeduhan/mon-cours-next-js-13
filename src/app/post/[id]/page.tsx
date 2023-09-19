// 1 . function fetchPost

const fetchPost = async (postId: string) => {
  const post = await fetch(``, {
    method: "GET",
  });
  return post.json();
};

// 2 . generateMetadata qui va appeller fetchpost

export default async function PostID({ params }: any) {
  return <div>hello {params.id}</div>;
}
