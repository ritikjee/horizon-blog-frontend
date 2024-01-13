"use client";

import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Page() {
  const [formState, setFormState] = useState({
    identifier: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_backend_URL}/auth/sign-in`,
        {
          ...formState,
        }
      );

      toast.success("Sign in successful!");
      Cookies.set("horizon_auth_token", res.data.token);

      router.push("/");
      router.refresh();
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data);
    } finally {
      setLoading(false);
    }
  };
  const onChange = (e: any) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0 mb-10">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={200}
            height={200}
            className="mb-5"
          />
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <Link
            className={buttonVariants({
              variant: "link",
              className: "gap-1.5",
            })}
            href="/sign-up"
          >
            Dont have an account? Sign-up
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6">
          <form onSubmit={onSubmit}>
            <div className="grid gap-2">
              <div className="grid gap-1 py-2">
                <Label htmlFor="email">Email or Username</Label>
                <Input
                  name="identifier"
                  placeholder="you@example.com"
                  value={formState.identifier}
                  onChange={onChange}
                />
              </div>

              <div className="grid gap-1 py-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formState.password}
                  onChange={onChange}
                />
              </div>

              <Button variant={"primary"}>Sign in</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
