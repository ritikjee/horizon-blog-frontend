"use client";

import axios from "axios";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadDropzone } from "@/lib/uploadThing";
import { ArrowRight, Loader2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Page() {
  const [formState, setFormState] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [loadingProfileImage, setLoadingProfileImage] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(formState);
    axios.post("/api/send");
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
            href="/sign-in"
          >
            Already have an account? Sign-in
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6">
          <form onSubmit={onSubmit}>
            <div className="grid gap-2">
              <div className="grid gap-1 py-2">
                <Label htmlFor="profileImage">Profile Image</Label>
                <div className="flex items-center justify-around">
                  {!loadingProfileImage ? (
                    <>
                      {!profileImage ? (
                        <UploadDropzone
                          endpoint="profileImageUploader"
                          onUploadProgress={() => {
                            setLoadingProfileImage(true);
                          }}
                          onClientUploadComplete={(url) => {
                            setLoadingProfileImage(false);
                            setProfileImage(url[0].url);
                          }}
                          className="text-primary dark:text-primary/90 p-2 rounded-md border border-primary dark:border-primary/90 hover:bg-primary dark:hover:bg-primary/90 hover:text-white dark:hover:text-white transition-colors w-32 h-32 "
                        />
                      ) : (
                        <div className="relative">
                          <Image
                            src={profileImage || ""}
                            alt="Profile Image"
                            width={200}
                            height={200}
                            className="rounded-full h-32 w-32"
                          />
                          <X
                            className="w-6 h-6 text-bold bg-rose-800 rounded-full absolute top-2 right-2 cursor-pointer"
                            onClick={() => setProfileImage(null)}
                          />
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="w-32 h-32 flex items-center justify-center">
                      <Loader2 className="text-primary w-10 h-10 flex items-center justify-center animate-spin" />
                    </div>
                  )}
                </div>
              </div>
              <div className="grid gap-1 py-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  placeholder="you@example.com"
                  value={formState.email}
                  onChange={onChange}
                />
              </div>

              <div className="grid gap-1 py-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  name="name"
                  placeholder="John Wiltman"
                  value={formState.name}
                  onChange={onChange}
                />
              </div>
              <div className="grid gap-1 py-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  placeholder="johnwiltman"
                  value={formState.username}
                  onChange={onChange}
                  name="username"
                />
                <p className="text-xs">This is your public display name.</p>
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

              <Button variant={"primary"}>Sign up</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
