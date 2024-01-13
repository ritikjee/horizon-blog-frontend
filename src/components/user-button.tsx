"use client";

import Cookies from "js-cookie";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function UserButton({ user }: { user: any }) {
  const router = useRouter();

  const logout = async () => {
    Cookies.remove("horizon_auth_token");

    toast.success("Logged out successfully!");
    router.push("/sign-in");
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          alt="profile image"
          src={user.profileImage}
          width={100}
          height={100}
          className="w-10 h-10 rounded-full cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem>{user.email}</DropdownMenuItem>
        <DropdownMenuItem onClick={logout} className="cursor-pointer">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserButton;
