import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import ContextWrapper from "./ContextWrapper";

const robotoSans = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ayushman Manishankar",
  description: "Personal Portfolio - Netflix Themed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoSans.variable} antialiased`}>
        <ContextWrapper>{children}</ContextWrapper>
      </body>
    </html>
  );
}
