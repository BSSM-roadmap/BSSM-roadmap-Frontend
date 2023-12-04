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

export const modifyRoadMaps = async (roadmapId: number, steps: string[]) => {
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

export const login = async (authCode: string | null) => {
  if (authCode) {
    const { data } = await instance.post(`/login/oauth?code=${authCode}`);
    return data;
  }
};

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

export const createRoadMaps = async (userId: number, steps: string[]) => {
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
