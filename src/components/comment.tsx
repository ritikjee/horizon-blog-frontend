"use client";

import { useState } from "react";

import axios from "axios";

import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Send } from "lucide-react";

interface Props {
  user: any;
  userId: string;
  blogId: string;
}

function Comment({ blogId, user, userId }: Props) {
  const [body, setbody] = useState("");
  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (!user) {
      toast.error("You must be logged in to comment");
      router.push(`/sign-in?origin=/blog/${blogId}&comment=${body}`);
      return;
    }
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_backend_URL}/comment/addcomment`,
        {
          body,
          userId,
          blogId,
        }
      );

      toast.success("Comment added successfully!");
      router.refresh();
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold py-5">Comments</h1>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-center  gap-1 md:gap-2">
        <Textarea
          className="w-full h-24 mb-3"
          value={body}
          onChange={(e) => setbody(e.target.value)}
        />
        <Button onSubmit={onSubmit}>
          <Send />
        </Button>
      </div>
    </div>
  );
}

export default Comment;
