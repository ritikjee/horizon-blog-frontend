import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
