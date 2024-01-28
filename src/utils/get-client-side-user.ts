import axios from "axios";

import Cookies from "js-cookie";

export const getClientSideUser = async () => {
  const token = Cookies.get("horizon_auth_token");

  if (!token) {
    return null;
  }

  try {
    const data = await axios.get(
      `${process.env.NEXT_PUBLIC_backend_URL}/auth/user/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data.data;
  } catch (error) {
    Cookies.remove("horizon_auth_token");
    return null;
  }
};
