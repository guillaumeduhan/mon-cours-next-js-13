export const metadata = {
  title: "Ma page principale",
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "/monsite.png",
        width: 1260,
        height: 800,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function Home() {
  return <div className="flex gap-2">Hello main page</div>;
}
