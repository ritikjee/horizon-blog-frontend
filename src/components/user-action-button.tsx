"use client";

import { Button } from "./ui/button";

interface UserActionProps {
  username: string;
  user: any;
}

function UserAction({ username, user }: UserActionProps) {
  return (
    <div>
      {user?.username !== username && (
        <div>
          <Button>Follow</Button>
        </div>
      )}
    </div>
  );
}

export default UserAction;
