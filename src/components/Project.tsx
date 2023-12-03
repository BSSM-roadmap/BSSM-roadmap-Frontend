import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Project = ({ state, number }: any) => {
  return (
    <Flex flexDirection={"column"} gap={"1rem"} minHeight={"3rem"}>
      <Flex
        backgroundColor={"gray.200"}
        width={"100%"}
        borderRadius={"0.5rem"}
        padding={"10px"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Box
          backgroundColor={"darkblue"}
          width={"10%"}
          borderRadius={"0.3rem"}
          height={"2rem"}
          color={"white"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          marginBottom={"0.5rem"}
        >
          STEP {number}
        </Box>
        <Box
          width={"100%"}
          height={"80%"}
          backgroundColor={"white"}
          borderRadius={"0.3rem"}
          padding={"5px"}
        >
          <Text fontSize={"1.1rem"}>{state}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Project;
