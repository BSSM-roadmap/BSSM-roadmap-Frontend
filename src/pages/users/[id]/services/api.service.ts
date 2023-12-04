import instance from "@/apis/httpClient";

export const getUserRoadMap = async (userId: number) => {
  const { data } = await instance.get(`/user/${userId}/roadmap`);
  return data;
};

export const getUserAddRoadMap = async (userId: number) => {
  const { data } = await instance.get(`/save/${userId}/roadmap`);
  return data;
};
