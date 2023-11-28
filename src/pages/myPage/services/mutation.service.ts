import { useQuery } from "react-query";
import { getUser } from "./api.service";

export const useInfoQuery = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  }).data;
};
