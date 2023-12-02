import instance from "@/apis/httpClient";
import Storage from "@/storage";

export const createRoadMap = async (userId: number, steps: string[]) => {
  if (typeof window !== "undefined") {
    const token = Storage.getItem("TOKEN:ACCESS");
    if (token) {
      const { data } = await instance.post(
        "/roadmap",
        { userId, steps },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return data;
    }
  }
};
