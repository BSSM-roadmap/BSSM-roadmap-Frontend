import instance from "@/apis/httpClient";

export const getUser = async () => {
  if (typeof window !== "undefined") {
    const token = window.localStorage.getItem("TOKEN:ACCESS");
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
