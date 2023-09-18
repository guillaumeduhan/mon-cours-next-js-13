export const metadata = {
  title: "Ma page principale",
  openGraph: {
    title: "Mon titre OpenGraph ici",
    description: "Mon description OpenGraph ici",
    url: "https://nextjs.org",
    siteName: "Codewithguillaume",
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
