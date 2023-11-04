import { 학과 } from "@/dummy/학과";
import { Box, Flex, Text } from "@chakra-ui/react";
import styled from "styled-components";
import Image from "next/image";

interface 학과데이터 {
  id: number;
  name: string;
  imgUrl: string;
}

export default function RoadMap() {
  return (
    <Flex w={"90%"} margin={"0 auto"}>
      <Box width={"50%"} marginRight={"0.5rem"}>
        <Flex width={"100%"} height={"80px"} alignItems={"center"}>
          <Text fontWeight={"600"} fontSize={"1.25rem"}>
            소프트웨어 개발과
          </Text>
        </Flex>
        <Flex
          width={"100%"}
          gap={"0.8rem"}
          flexDirection={"column"}
          marginBottom={"50px"}
        >
          {학과.map((data) => (
            <Box
              key={data.id}
              width={"95%"}
              backgroundColor={"gray.100"}
              height={"90px"}
              padding={"10px"}
              borderRadius={"5px"}
            >
              {data.name}
            </Box>
          ))}
        </Flex>
      </Box>
      <Box width={"50%"}>
        <Flex width={"100%"} height={"80px"} alignItems={"center"}>
          <Text fontWeight={"600"} fontSize={"1.25rem"}>
            소프트웨어 개발과
          </Text>
        </Flex>
        <Flex
          width={"100%"}
          gap={"0.8rem"}
          flexDirection={"column"}
          marginBottom={"50px"}
        >
          {학과.map((data: 학과데이터) => (
            <Box
              key={data.id}
              width={"95%"}
              backgroundColor={"gray.100"}
              height={"90px"}
              padding={"10px"}
              borderRadius={"5px"}
              display={"flex"}
            >
              {/* <Image
                src={data.imgUrl}
                alt="Description"
                width={300}
                height={10}
              /> */}
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
