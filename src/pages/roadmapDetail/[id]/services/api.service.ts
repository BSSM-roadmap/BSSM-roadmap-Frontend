import { useMutation } from "react-query";
import Storage from "@/storage";
import instance from "@/apis/httpClient";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const useDeleteMutation = (roadmapId: number) => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["deleteRoadMap"],
    mutationFn: async () => {
      if (typeof window !== "undefined") {
        const token = Storage.getItem("TOKEN:ACCESS");
        if (token) {
          await instance.delete(`/roadmap/${roadmapId}`, {
            headers: {
              Authorization: token,
            },
          });

          toast.success("로드맵이 삭제되었습니다.");
          router.push("/roadMap");
        }
      }
    },
  });
};
