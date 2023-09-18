// export async function generateMetadata({ params }: any) {
//   const post: any = await fetch(`/api/posts/${params.id}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   return {
//     title: post.title,
//     // description: post.title,
//     // openGraph: {
//     //   title: post.title,
//     //   description: post.title,
//     //   url: `/posts/${params.id}`,
//     //   siteName: "Codewithguillaume",
//     //   images: [
//     //     {
//     //       url: post.img_url,
//     //       width: 1260,
//     //       height: 800,
//     //     },
//     //   ],
//     //   locale: "en-US",
//     //   type: "website",
//     // },
//   };
// }

export default async function PostID({ params }: any) {
  return <div className="flex gap-2">Hello {params.id}</div>;
}
