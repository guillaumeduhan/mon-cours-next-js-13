import CreateContextProvider from "@/context";
import "./globals.css";

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
