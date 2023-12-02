import { truncateText } from "@/utils/truncate";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { roadMap } from "@/interface/로드맵";

const Projects = ({ data }: { data: roadMap }) => {
  const router = useRouter();

  return (
    <Flex
      key={data.roadmapId}
      width={"100%"}
      height={"80px"}
      padding={"10px"}
      backgroundColor={"gray.100"}
      borderRadius={"5px"}
      alignItems={"center"}
      gap={"10px"}
      cursor={"pointer"}
      onClick={() => {
        router.push(`/roadmapDetail/${String(data.roadmapId)}`);
      }}
    >
      <Flex
        width={"63px"}
        height={"63px"}
        backgroundColor={"white"}
        borderRadius={"5px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image src="/images/road.png" width={50} height={50} alt="img" />
      </Flex>
      <Box>
        <Text fontWeight={"semibold"}>
          {/* <span style={{ marginRight: "10px" }}>{data.step}</span> ({data.grade}
          입학생) */}
        </Text>
        <Flex>
          {/* <Flex marginRight={"10px"}>
            <Text fontWeight={"semibold"}>01. </Text>
            {truncateText(data.step1, 30)}
          </Flex>
          <Flex>
            <Text fontWeight={"semibold"}>02. </Text>
            {truncateText(data.step2, 17)}
          </Flex> */}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Projects;
