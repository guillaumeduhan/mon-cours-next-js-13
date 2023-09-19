import CreateContextProvider from "@/context";
import "./globals.css";

export const metadata = {
  title: "Le titre de mon site web",
  openGraph: {
    title: "Le titre opengraph de mon site web"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CreateContextProvider>{children}</CreateContextProvider>
      </body>
    </html>
  );
}
