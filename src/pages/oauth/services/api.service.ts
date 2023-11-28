import instance from "@/apis/httpClient";

export const login = async (authCode: string | null) => {
  if (authCode) {
    const { data } = await instance.post(`/login/oauth?code=${authCode}`);
    return data;
  }
};
