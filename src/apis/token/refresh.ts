import { TOKEN } from "@/storage/constants";
import axios from "axios";
import Storage from "@/storage";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const refresh = async () => {
  if (typeof window !== "undefined") {
    const refreshToken = Storage.getItem("TOKEN:REFRESH");
    if (refreshToken) {
      const { data: token } = await instance.put(
        "/login/token",
        {},
        {
          headers: {
            "refresh-token": refreshToken,
          },
        }
      );
      console.log("token.accessToken", token);
      Storage.setItem(TOKEN.ACCESS, token);
    }
  }
};

export default refresh;
