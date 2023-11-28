import instance from "@/apis/httpClient";
import Projects from "@/components/Projects";
import { 로드맵 } from "@/dummy/로드맵";
import { TOKEN } from "@/storage/constants";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const RoadMap = () => {
  if (typeof window !== "undefined") {
    instance.get("/user", {
      headers: {
        Authorization: window.localStorage.getItem("TOKEN:ACCESS"),
      },
    });
  }

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
      <Flex flexDirection={"column"} gap={"10px"} marginBottom={"40px"}>
        {로드맵.map((data) => (
          <Projects key={data.id} data={data} />
        ))}
      </Flex>
    </Box>
  );
};

export default RoadMap;
