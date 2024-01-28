import axios from "axios";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { redirect } from "next/navigation";
import Image from "next/image";
import Comment from "@/components/comment";
import { getServerSideUser } from "@/utils/get-server-side-user";

async function BlogsPage({ params }: { params: { blogId: string } }) {
  const user = await getServerSideUser();
  try {
    const { data: blog } = await axios.get(
      `${process.env.NEXT_PUBLIC_backend_URL}/blog/getblogbyid/${params.blogId}`
    );

    return (
      <>
        <MaxWidthWrapper className="my-10  lg:my-20 overflow-hidden">
          <h1 className="text-4xl font-bold mx-5 lg:mx-16">{blog.title}</h1>
          <div className="relative w-full h-[600px] my-10 ld:my-16 rounded-xl">
            <Image
              className="rounded-xl"
              fill
              src={blog.coverImage}
              alt="blogImage"
            />
          </div>
          <div className="pl-5 md:pl-10 lg:pl-20">
            <p className="border-l-4 border-l-primary p-4 font-serif">
              {blog.slug}
            </p>
          </div>
          <div
            className="py-10 px-5 md:px-10 lg:px-20 text-lg"
            dangerouslySetInnerHTML={{ __html: blog.body }}
          />
        </MaxWidthWrapper>
        <MaxWidthWrapper className="mb-20">
          <Comment user={user} userId={user?._id} blogId={params.blogId} />
        </MaxWidthWrapper>
      </>
    );
  } catch (error) {
    redirect("/");
  }
}

export default BlogsPage;
