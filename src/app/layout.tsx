// import Header from "@/components/Header";
// import CreateContextProvider from "@/context";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <CreateContextProvider>
          <Header />
          {children}
        </CreateContextProvider> */}
      </body>
    </html>
  );
}
