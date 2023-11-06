import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Project = ({ state, number }: any) => {
  return (
    <Flex flexDirection={"column"} gap={"1rem"}>
      <Flex
        backgroundColor={"gray.200"}
        width={"100%"}
        height={"135px"}
        borderRadius={"0.5rem"}
        padding={"10px"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Box
          backgroundColor={"darkblue"}
          width={"10%"}
          borderRadius={"0.3rem"}
          height={"30px"}
          color={"white"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          STEP {number}
        </Box>
        <Box
          width={"100%"}
          height={"75px"}
          backgroundColor={"white"}
          borderRadius={"0.3rem"}
          padding={"5px"}
        >
          <Text fontSize={"1.3rem"}>{state}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Project;
