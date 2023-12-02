import { useMutation } from "react-query";
import { createRoadMap } from "./api.service";

export const useCreateMutation = (userId: number, steps: string[]) => {
  return useMutation({
    mutationKey: ["createRoadMap"],
    mutationFn: () => createRoadMap(userId, steps),
  });
};
