import { useMutation, useQueryClient } from "react-query";
import { createRoadMap } from "./api.service";

export const useCreateMutation = (userId: number, steps: string[]) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createRoadMap"],
    mutationFn: () => createRoadMap(userId, steps),
    onSuccess: () => {
      queryClient.invalidateQueries("roadMap");
    },
  });
};
