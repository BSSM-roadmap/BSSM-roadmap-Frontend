import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { 로드맵 } from "@/dummy/로드맵";
import { truncateText } from "@/utils/truncate";

const MyPage = () => {
  return (
    <Box maxWidth={"800px"} margin={"0 auto"}>
      <Flex
        width={"100%"}
        height={"20vh"}
        margin={"0 auto"}
        alignItems={"center"}
        justifyContent={"center"}
        borderBottom={"1px"}
        borderBottomColor={"gray.300"}
      >
        <Flex width={"90%"} height={"100%"} gap={"1rem"} alignItems={"center"}>
          <Image src="/images/user.png" width={80} height={30} alt="img" />
          <Flex flexDirection={"column"}>
            <Text fontWeight={"semibold"} fontSize={"1.2rem"}>
              이상진
            </Text>
            <Text>2학년 (2022년 입학생)</Text>
            <Text>소프트웨어 개발과</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex width={"90%"} margin={"0 auto"} flexDirection={"column"}>
        <Flex
          alignItems={"center"}
          gap={"6px"}
          marginTop={"10px"}
          marginBottom={"20px"}
        >
          <Image
            src="/images/thumb-tack.png"
            width={20}
            height={20}
            alt="img"
          />
          <Text fontWeight={"semibold"}>이상진님이 찜한 로드맵</Text>
        </Flex>
        <Flex flexDirection={"column"} gap={"10px"} marginBottom={"30px"}>
          {로드맵.map((data) => (
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
                <Image
                  src="/images/road.png"
                  width={50}
                  height={50}
                  alt="img"
                />
              </Flex>
              <Box>
                <Text fontWeight={"semibold"}>{data.title}</Text>
                <Text>{truncateText(data.step1, 30)}</Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default MyPage;
