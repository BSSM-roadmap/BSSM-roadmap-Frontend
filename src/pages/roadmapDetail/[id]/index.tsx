import { 로드맵정보 } from "@/atom/로드맵정보";
import Project from "@/components/Project";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { BsArrowDownSquareFill } from "react-icons/bs";
import Image from "next/image";

const RoadMapDetail = () => {
  const state = useRecoilValue(로드맵정보);
  console.log(state);

  return (
    <Box
      bgImage="url('/images/roadMap.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="70%"
    >
      <Flex
        width={"800px"}
        margin={"0 auto"}
        flexDirection={"column"}
        gap={"1rem"}
        marginBottom={"1rem"}
      >
        <Flex
          fontSize={"1.6rem"}
          fontWeight={"semibold"}
          paddingTop={"1.5rem"}
          paddingBottom={"0.8rem"}
          margin={"0 auto"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {state.title}
          <Flex
            cursor={"pointer"}
            alignItems={"center"}
            gap={"0.5rem"}
            flexDirection={"column"}
            onClick={() => {
              alert("찜하기 완료");
            }}
          >
            <Image src="/images/folder.png" width={40} height={30} alt="img" />
            <Text fontSize={"0.8rem"}>로드맵 저장하기</Text>
          </Flex>
        </Flex>
        <Project state={state.step1} number={"01"} />
        <Text margin={"0 auto"}>
          <BsArrowDownSquareFill />
        </Text>
        <Project state={state.step2} number={"02"} />
        <Text margin={"0 auto"}>
          <BsArrowDownSquareFill />
        </Text>
        <Project state={state.step3} number={"03"} />
        <Text margin={"0 auto"}>
          <BsArrowDownSquareFill />
        </Text>
        <Project state={state.step4} number={"04"} />
        <Text margin={"0 auto"}>
          <BsArrowDownSquareFill />
        </Text>
        <Project state={state.step5} number={"05"} />
        <Text margin={"0 auto"}>
          <Image src="/images/crown.png" width={60} height={60} alt="img" />
        </Text>
      </Flex>
    </Box>
  );
};

export default RoadMapDetail;
