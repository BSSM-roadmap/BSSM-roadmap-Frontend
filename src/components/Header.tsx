import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <Box
        h={"7vh"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        borderBottom={"1px"}
        borderBottomColor={"gray.200"}
        boxShadow={"base"}
      >
        <Box
          paddingLeft={"20px"}
          fontFamily={"monospace"}
          bgGradient="linear(to-l, #7c92ff, #160090)"
          bgClip="text"
          fontSize={"1.2rem"}
          fontWeight={"bold"}
          cursor={"pointer"}
          onClick={() => {
            router.push("/");
          }}
        >
          BSMRoadMap
        </Box>
        <Box
          paddingRight={"20px"}
          fontFamily={"monospace"}
          display={"flex"}
          gap={"1.5rem"}
          fontWeight={"medium"}
        >
          <Flex
            fontSize={"0.9rem"}
            cursor={"pointer"}
            onClick={() => {
              router.push("/roadMap");
            }}
          >
            로드맵보기
          </Flex>
          <Flex
            fontSize={"0.9rem"}
            cursor={"pointer"}
            onClick={() => {
              router.push("/map");
            }}
          >
            협약회사위치
          </Flex>
          <Flex
            fontSize={"0.9rem"}
            cursor={"pointer"}
            onClick={() => {
              router.push("/companies");
            }}
          >
            학교협약회사
          </Flex>
          <Flex
            fontSize={"0.9rem"}
            cursor={"pointer"}
            onClick={() => {
              router.push("/createRoadMap");
            }}
          >
            로드맵작성
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Header;
