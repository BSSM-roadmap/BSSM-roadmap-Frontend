import instance from "@/apis/httpClient";
import Storage from "@/storage";

export const getUser = async () => {
  if (typeof window !== "undefined") {
    const token = Storage.getItem("TOKEN:ACCESS");
    if (token) {
      const { data } = await instance.get("/user", {
        headers: {
          Authorization: token,
        },
      });
      return data;
    }
  }
};

export const getUserRoadMap = async (userId: number) => {
  const { data } = await instance.get(`/user/${userId}/roadmap`);
  return data;
};

export const getUserAddRoadMap = async (userId: number) => {
  const { data } = await instance.get(`/save/${userId}/roadmap`);
  return data;
};
