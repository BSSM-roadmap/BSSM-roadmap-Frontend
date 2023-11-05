import { dataProps } from "@/interface/roadMapData";
import { truncateText } from "@/utils/truncate";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Projects = ({ data }: dataProps) => {
  return (
    <Flex
      key={data.id}
      width={"100%"}
      height={"80px"}
      padding={"10px"}
      backgroundColor={"gray.100"}
      borderRadius={"5px"}
      alignItems={"center"}
      gap={"10px"}
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
        <Text fontWeight={"semibold"}>{data.title}</Text>
        <Flex>
          <Flex marginRight={"10px"}>
            <Text fontWeight={"semibold"}>01. </Text>
            {truncateText(data.step1, 30)}
          </Flex>
          <Flex>
            <Text fontWeight={"semibold"}>02. </Text>
            {truncateText(data.step2, 17)}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Projects;
