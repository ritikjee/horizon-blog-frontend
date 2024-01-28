import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface Props {
  title: string;
  date: string;
  description: string;
  image: string;
  href: string;
}

function BlogCard({ date, description, title, href, image }: Props) {
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[650px] relative">
        <div>
          <div className="relative w-full h-72 bg-pink-50">
            <Image fill className="rounded-t-lg" src={image} alt="blogImage" />
          </div>

          <div className="px-5 pt-4 text-zinc-600">{date}</div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-36 overflow-hidden">
              {description}
            </p>
          </div>
          <Button variant={"link"} className="absolute bottom-4 left-0">
            <Link href={`/blog/${href}`}>
              <span className="inline">Read more</span>
              <MoveRight className="inline" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
