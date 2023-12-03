import { useMutation, useQueryClient } from "react-query";
import { modifyRoadMap } from "./api.service";

export const useModifyMutation = (roadmapId: number, steps: string[]) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["modifyRoadMap"],
    mutationFn: () => modifyRoadMap(roadmapId, steps),
    onSuccess: () => {
      queryClient.invalidateQueries("roadMap");
    },
  });
};
