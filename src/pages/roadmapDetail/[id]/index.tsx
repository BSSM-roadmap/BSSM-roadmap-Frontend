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
        <Text
          fontSize={"1.4rem"}
          fontWeight={"semibold"}
          paddingTop={"2rem"}
          paddingBottom={"0.8rem"}
          margin={"0 auto"}
          width={"100%"}
        >
          {state.title}
        </Text>
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
