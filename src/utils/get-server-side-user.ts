import axios from "axios";

import { cookies } from "next/headers";

export const getServerSideUser = async () => {
  const token = cookies().get("horizon_auth_token");

  if (!token) {
    return null;
  }

  const data = await axios.get(
    `${process.env.NEXT_PUBLIC_backend_URL}/auth/user/me`,
    {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }
  );

  return data.data;
};
