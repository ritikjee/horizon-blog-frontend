import Image from "next/image";
import MaxWidthWrapper from "./max-width-wrapper";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";

function Footer() {
  return (
    <>
      <section className="bg-primary mt-24">
        <MaxWidthWrapper className="py-20">
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-white text-4xl font-bold max-w-[600px] text-center">
              Get our stories delivered from us to your inbox weekly.
            </h1>
            <div className="flex flex-col md:flex-row gap-5 py-10">
              <Input
                placeholder="Your mail"
                className="bg-white  min-w-72 text-black "
              />
              <Button className="border-white border-[1px] hover:bg-white hover:text-primary">
                Get Started
              </Button>
            </div>
            <div className="max-w-[475px] text-sm text-center text-white">
              <p>
                Get a response tomorrow if you submit by 9pm today. If we
                received after 9pm will get a reponse the following day.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="pt-20 pb-10">
        <MaxWidthWrapper>
          <div className="flex items-center justify-center gap-3">
            <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
            <h1 className="text-4xl font-bold font-serif">Horizon</h1>
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-16 py-10">
            <Link href={"/"}>Home</Link>
            <Link href={"blogs"}>Blogs</Link>
            <Link href={"/about"}>About us</Link>
            <Link href={"/contact"}>Contact us</Link>
          </div>
          <div className="flex items-center justify-center gap-7 pb-10">
            <Link
              href={"https://www.facebook.com/profile.php?id=100075832322378"}
              target="_blank"
            >
              <Button variant={"social"}>FB</Button>
            </Link>
            <Link href={"https://www.instagram.com/_ritikjha_"} target="_blank">
              <Button variant={"social"}>IG</Button>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/ritik-jha-490434229"}
              target="_blank"
            >
              <Button variant={"social"}>LN</Button>
            </Link>
            <Link href={"https://x.com/RitikJha1430"} target="_blank">
              <Button variant={"social"}>X</Button>
            </Link>
          </div>
          <hr className="border-primary" />
          <div className="pt-10 flex items-center justify-center text-xs sm:text-sm">
            Copyright Horizon Inc ©{" "}
            <span>{new Date().getFullYear().toString()}</span>. All Right
            Reserved
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}

export default Footer;
