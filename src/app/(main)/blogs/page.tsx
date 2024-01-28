import BlogCard from "@/components/blog-card";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import axios from "axios";
import { redirect } from "next/navigation";
import React from "react";

async function BlogsPage() {
  try {
    const { data: blogs } = await axios.get(
      `${process.env.NEXT_PUBLIC_backend_URL}/blog/getblogs`
    );

    return (
      <div>
        <MaxWidthWrapper className="mt-5 md:mt-16">
          <div className="flex flex-col items-center justify-center  gap-8 ">
            <h1 className="text-zinc-500 font-medium text-lg">OUR BLOGS</h1>
            <h1 className="font-semibold text-xl sm:text-2xl md:text-5xl text-center">
              Find our all blogs from here
            </h1>
            <h1 className="text-md text-center lg:px-20">
              our blogs are written from very research research and well known
              writers writers so that we can provide you the best blogs and
              articles articles for you to read them all along
            </h1>
          </div>
          <div aria-hidden className="py-10" />
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog: any) => (
              <BlogCard
                key={blog._id}
                date={new Date(blog.createdAt).toDateString()}
                description={blog.slug}
                title={blog.title}
                href={blog._id}
                image={blog.coverImage}
              />
            ))}
          </div>
        </MaxWidthWrapper>
      </div>
    );
  } catch (error) {
    redirect("/");
  }
}

export default BlogsPage;
