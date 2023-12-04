import instance from "./httpClient";
import Storage from "@/storage";

export const aHeart = async (roadmapId: number, userId: number) => {
  if (typeof window !== "undefined") {
    const token = Storage.getItem("TOKEN:ACCESS");
    if (token) {
      await instance.post(
        `/save/${roadmapId}`,
        { userId },
        {
          headers: {
            authorization: token,
          },
        }
      );
    }
  }
};

export const dHeart = async (roadmapId: number, userId: number) => {
  if (typeof window !== "undefined") {
    const token = Storage.getItem("TOKEN:ACCESS");
    if (token) {
      await instance.delete(`/save/${roadmapId}`, {
        params: { userId: userId },
        headers: {
          authorization: token,
        },
      });
    }
  }
};

export const heartCount = async (roadmapId: number) => {
  const { data } = await instance.get(`/save/${roadmapId}/count`);
  return data;
};
