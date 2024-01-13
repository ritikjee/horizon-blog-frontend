import Image from "next/image";
import { ModeToggle } from "./mode-toggle-button";
import Link from "next/link";
import { getServerSideUser } from "@/utils/get-server-side-user";
import { Button } from "./ui/button";
import UserButton from "./user-button";

async function Navbar() {
  const user = await getServerSideUser();

  return (
    <div className="w-full py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" width={30} height={30} alt="logo" />
          <h1 className="font-bold text-xl">Horizon</h1>
        </div>
        <div className="flex items-center gap-3">
          <ul className="hidden md:inline">
            <li className="inline-block mr-5">
              <Link href="#" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li className="inline-block mr-5">
              <Link href="#" className="hover:text-primary">
                About
              </Link>
            </li>
            <li className="inline-block">
              <Link href="/contact" className="hover:text-primary">
                Contact
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
    </div>
  );
}

export default Navbar;
