import Image from "next/image";
import { ModeToggle } from "./mode-toggle-button";
import Link from "next/link";
import { getServerSideUser } from "@/utils/get-server-side-user";
import { Button } from "./ui/button";
import UserButton from "./user-button";
import MaxWidthWrapper from "./max-width-wrapper";

async function Navbar() {
  const user = await getServerSideUser();

  return (
    <MaxWidthWrapper className="w-full py-5">
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" width={30} height={30} alt="logo" />
            <h1 className="font-bold text-xl">Horizon</h1>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <ul className="hidden md:inline">
            <li className="inline-block mr-7">
              <Link
                href="/blogs"
                className="hover:text-primary text-sm font-medium  "
              >
                BLOG
              </Link>
            </li>
            <li className="inline-block mr-7">
              <Link
                href="/about"
                className="hover:text-primary text-sm font-medium "
              >
                ABOUT
              </Link>
            </li>
            <li className="inline-block">
              <Link
                href="/contact"
                className="hover:text-primary text-sm font-medium "
              >
                CONTACT
              </Link>
            </li>
          </ul>
          {user ? (
            <UserButton user={user} />
          ) : (
            <Link href={"/sign-in"}>
              <Button>Sign in</Button>
            </Link>
          )}
          <ModeToggle />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Navbar;
