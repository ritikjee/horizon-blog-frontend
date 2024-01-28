"use client";
import ReactQuill from "react-quill";
import { useState } from "react";
import { toast } from "sonner";
import Cookies from "js-cookie";
import axios from "axios";
import { X } from "lucide-react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { UploadDropzone } from "@/lib/uploadThing";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { getClientSideUser } from "@/utils/get-client-side-user";

import "@uploadthing/react/styles.css";
import "react-quill/dist/quill.snow.css";

function AddBlogPage() {
  const router = useRouter();
  const [formState, setFormState] = useState({
    title: "",
    slug: "",
  });
  const [blog, setBlog] = useState("");
  const [profileImage, setProfileImage] = useState<string | undefined>(
    undefined
  );

  const onChange = (e: any) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const user = await getClientSideUser();
    console.log(user);

    if (!user) {
      toast.error("You must be logged in to create a blog");
      router.push("/sign-in?origin=/add-blog");
      return;
    }

    const token = Cookies.get("horizon_auth_token");

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_backend_URL}/blog/addblog?username=${user.username}`,
        {
          ...formState,
          blog,
          profileImage,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("Blog created successfully!");
      router.push(`/blog/${data._id}`);
    } catch (error: any) {
      console.log(error);
      toast.error("error creating blog");
    }
  };

  return (
    <MaxWidthWrapper className="mt-10">
      <div className="grid w-full gap-5">
        <form onSubmit={onSubmit}>
          <div className="grid gap-2 mb-5">
            <Label htmlFor="title">Title</Label>
            <Input
              placeholder="Type your title here"
              name="title"
              id="title"
              value={formState.title}
              onChange={onChange}
            />
          </div>

          <Label htmlFor="title">Cover Image</Label>

          {!profileImage ? (
            <UploadDropzone
              endpoint="profileImageUploader"
              onUploadBegin={() => {
                toast.info("Uploading profile image...");
              }}
              onClientUploadComplete={(url) => {
                console.log(url);
                setProfileImage(url[0].url);
                toast.success("Cover image uploaded!");
              }}
              onUploadError={(error) => {
                console.log("Error: ", error);
                toast.error("Error uploading profile image!");
              }}
            />
          ) : (
            <div className=" flex items-center justify-center">
              <div className="flex items-center justify-center w-56 h-56 relative ">
                <Image
                  src={profileImage || ""}
                  alt="Profile Image"
                  width={200}
                  height={200}
                  className=" h-52 w-52"
                />
                <X
                  className="w-6 h-6 text-bold bg-rose-800 rounded-full absolute top-0 right-0 cursor-pointer"
                  onClick={() => setProfileImage(undefined)}
                />
              </div>
            </div>
          )}
          <div className="grid gap-2 mb-5">
            <Label htmlFor="slug">Slug</Label>
            <Textarea
              placeholder="Type your slug here."
              name="slug"
              id="slug"
              value={formState.slug}
              onChange={onChange}
            />
            <p className="text-sm text-muted-foreground">
              This will be short description for your blog.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid w-full gap-2">
              <Label htmlFor="blog">Your blog</Label>
              <ReactQuill
                className="h-96"
                theme="snow"
                value={blog}
                onChange={setBlog}
              />
            </div>
            <Button type="submit" className="mt-10">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </MaxWidthWrapper>
  );
}

export default AddBlogPage;
