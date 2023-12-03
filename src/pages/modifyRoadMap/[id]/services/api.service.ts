import instance from "@/apis/httpClient";
import Storage from "@/storage";

export const modifyRoadMap = async (roadmapId: number, steps: string[]) => {
  if (typeof window !== "undefined") {
    const token = Storage.getItem("TOKEN:ACCESS");
    if (token) {
      const { data } = await instance.put(
        `/roadmap/${roadmapId}`,
        { steps },
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
