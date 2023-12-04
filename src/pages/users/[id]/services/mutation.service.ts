import { useQuery } from "react-query";
import { getUserAddRoadMap, getUserRoadMap } from "./api.service";

export const useRoadMap = (userId: number) => {
  return useQuery({
    queryKey: ["userRoadMap"],
    queryFn: () => getUserRoadMap(userId),
  }).data;
};

export const useAddRoadMap = (userId: number) => {
  return useQuery({
    queryKey: ["userRoadMap"],
    queryFn: () => getUserAddRoadMap(userId),
  }).data;
};
