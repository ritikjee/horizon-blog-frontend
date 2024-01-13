import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import MaxWidthWrapper from "@/components/max-width-wrapper";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Horizon",
  description: "A place to share your thoughts and ideas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MaxWidthWrapper>
            <Navbar />
          </MaxWidthWrapper>
          <Toaster position="top-center" richColors closeButton />
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
