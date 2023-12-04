import instance from "@/apis/httpClient";
import LoadingPage from "@/components/Loading";
import Projects from "@/components/Projects";
import { Box, Flex } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { 유저아이디 } from "@/atom/유저아이디";
import { getUser, heartCount } from "@/apis";
import Storage from "@/storage";

const RoadMap = () => {
  const token = Storage.getItem("TOKEN:ACCESS");

  const { data: roadMap, isLoading } = useQuery(["roadMap"], () => {
    const config = {
      headers: {
        Authorization: token,
      },
    };

    return instance.get("/roadmap", config).then((res) => res.data);
  });

  const [userId, setUserId] = useRecoilState(유저아이디);
  const [hearts, setHearts] = useState();

  const useInfoQuery = () => {
    return useQuery({
      queryKey: ["user"],
      queryFn: () => getUser(),
    }).data;
  };

  const userInfoQuery = useInfoQuery();

  useEffect(() => {
    setUserId(userInfoQuery?.userId);
  }, [userInfoQuery]);

  useQuery({
    queryKey: ["ProjectLiked", "params", "roadMap"],
    queryFn: () => heartCount(Number(roadMap?.roadmapId)),
    onSuccess: (data) => {
      setHearts(data);
    },
  });

  return (
    <Box maxWidth={"800px"} margin={"0 auto"}>
      <Box
        marginTop={"30px"}
        marginBottom={"20px"}
        fontWeight={"semibold"}
        fontSize={"1.3rem"}
        color={"darkblue"}
      >
        선배들의 로드맵
      </Box>
      {isLoading ? (
        <LoadingPage />
      ) : roadMap && roadMap.length < 1 ? (
        <Flex
          width={"100%"}
          height={"60vh"}
          alignItems={"center"}
          justifyContent={"center"}
          fontSize={"1.2rem"}
        >
          로드맵 없음
        </Flex>
      ) : (
        <Flex flexDirection={"column"} gap={"10px"} marginBottom={"40px"}>
          {roadMap?.map((data: any) => (
            <Projects key={data.id} data={data} />
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default RoadMap;
