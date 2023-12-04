import { TOKEN } from "@/storage/constants";
import axios from "axios";
import Storage from "@/storage";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const refresh = async () => {
  if (typeof window !== "undefined") {
    const token = Storage.getItem("TOKEN:ACCESS");
    if (token) {
      const { data } = await instance.put("/login/token", {
        headers: {
          authorization: `${Storage.getItem("TOKEN:ACCESS")}`,
          "refresh-token": `${Storage.getItem("TOKEN:REFRESH")}`,
        },
      });
      Storage.setItem(TOKEN.ACCESS, data.accessToken);
    }
  }
};

export default refresh;
