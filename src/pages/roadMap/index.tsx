import instance from "@/apis/httpClient";
import LoadingPage from "@/components/Loading";
import Projects from "@/components/Projects";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";

const RoadMap = () => {
  const { data: roadMap, isLoading } = useQuery("roadMap", () =>
    instance.get("/roadmap").then((res) => res.data)
  );

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
