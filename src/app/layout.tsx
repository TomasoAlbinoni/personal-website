import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import "../styles/style.css";

export const metadata: Metadata = {
  title: "Thomas van Nellen",
  description: "Experienced software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div id="content">
          {children}
        </div>
      </body>
    </html>
  );
}
