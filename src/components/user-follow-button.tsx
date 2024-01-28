import { Button } from "./ui/button";

interface UserFollowProp {
  followers: [];
  following: [];
}

function UserFollow({ followers, following }: UserFollowProp) {
  return (
    <div className="flex">
      <Button variant={"ghost"}>
        <span className="text-xl font-medium px-1">{followers.length}</span>
        Followers
      </Button>
      <Button variant={"ghost"}>
        <span className="text-xl font-medium px-1">{following.length}</span>
        Followings
      </Button>
    </div>
  );
}

export default UserFollow;
