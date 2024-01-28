import BlogCard from "@/components/blog-card";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { data: blogs } = await axios.get(
    `${process.env.NEXT_PUBLIC_backend_URL}/blog/getblogs`
  );

  const featuredPost = blogs.filter((blog: any) => blog.featured).slice(0, 7);

  const recentPost = blogs.sort((a: any, b: any) => a.createdAt - b.createdAt);

  return (
    <>
      <section className="bg-primary py-10 md:py-20">
        <MaxWidthWrapper>
          <div className="flex flex-col md:flex-row gap-7">
            <div className="w-full md:w-[50%] flex flex-col justify-evenly">
              <h1 className="text-3xl font-medium">{recentPost[0].title}</h1>
              <p>{recentPost[0].slug}</p>
              <Link href={`/blog/${recentPost[0]._id}`}>
                <Button variant={"outline"}>Read More</Button>
              </Link>
            </div>
            <div className="relative w-72 h-72 md:w-[600px] md:h-[400px] bg-cover">
              <Image
                src={recentPost[0].coverImage}
                alt="blog-cover"
                className="rounded-xl "
                fill
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="py-10">
        <MaxWidthWrapper>
          <div className="flex items-center justify-between pb-20">
            <div className="text-3xl font-bold">Our Recent Post</div>
            <Link href={"/blogs"}>
              <Button>View All</Button>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-7">
            <div className="relative w-72 h-72 md:w-[600px] md:h-[400px] bg-cover">
              <Image
                src={recentPost[0].coverImage}
                alt="blog-cover"
                className="rounded-xl "
                fill
              />
            </div>
            <div className="w-full md:w-[50%] flex flex-col justify-evenly">
              <h1 className="text-3xl font-medium">{recentPost[0].title}</h1>
              <p>{recentPost[0].slug}</p>
              <Link href={`/blog/${recentPost[0]._id}`}>
                <Button variant={"outline"}>Read More</Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-10">
            {recentPost.slice(1, 4).map((blog: any) => (
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
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex items-center justify-between pb-20">
            <div className="text-3xl font-bold">Our Popular Post</div>
            <Link href={"/blogs"}>
              <Button>View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-10">
            {featuredPost.map((blog: any) => (
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
      </section>
    </>
  );
}
