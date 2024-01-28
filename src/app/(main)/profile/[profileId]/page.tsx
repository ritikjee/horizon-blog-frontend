import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import UserAction from "@/components/user-action-button";
import UserFollow from "@/components/user-follow-button";
import { getServerSideUser } from "@/utils/get-server-side-user";
import axios from "axios";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

interface ProfilePageProps {
  params: {
    profileId: string;
  };
}

async function ProfilePage({ params }: ProfilePageProps) {
  const user = await getServerSideUser();

  try {
    const { data: profile } = await axios.get(
      `${process.env.NEXT_PUBLIC_backend_URL}/profile/getProfile/${params.profileId}`
    );

    return (
      <div>
        <MaxWidthWrapper className="pt-5 md:py-16">
          <div className="flex flex-col items-center justify-center md:flex-row gap-10 md:gap-36">
            <div className="w-[300px] h-[300px] rounded-full relative">
              <Image
                src={profile.profileImage}
                fill
                alt="profile image"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col items-start gap-5">
              <div className="flex items-center justify-around gap-3">
                <div className="text-3xl">{profile.userName}</div>
                <Button variant={"ghost"}>Edit Profile</Button>
              </div>
              <div className="flex  justify-center items-center gap-10">
                <div>
                  <span className="text-xl font-medium">
                    {profile.Blogs.length}
                  </span>{" "}
                  posts
                </div>
                <UserFollow
                  followers={profile.Followers}
                  following={profile.Following}
                />
              </div>
              <div>
                <div className="font-medium text-xl">{profile.name}</div>
                <div className="text-md">{profile.bio}</div>
              </div>
              <UserAction user={user} username={params.profileId} />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    );
  } catch (error) {
    redirect("/?error=profile-not-found");
  }
}

export default ProfilePage;
