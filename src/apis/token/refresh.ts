import { TOKEN } from "@/storage/constants";
import axios from "axios";
import Storage from "@/storage";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const refresh = async () => {
  try {
    const { data } = await instance.put("/login/token", {
      refreshToken: `${Storage.getItem("TOKEN:REFRESH")}`,
    });
    Storage.setItem(TOKEN.ACCESS, data.accessToken);
  } catch (err) {
    Storage.clear();
  }
};

export default refresh;
