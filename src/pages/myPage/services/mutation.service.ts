import { useQuery } from "react-query";
import { getUser, getUserRoadMap } from "./api.service";

export const useInfoQuery = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  }).data;
};

export const useRoadMap = (userId: number) => {
  return useQuery({
    queryKey: ["userRoadMap"],
    queryFn: () => getUserRoadMap(userId),
  }).data;
};
