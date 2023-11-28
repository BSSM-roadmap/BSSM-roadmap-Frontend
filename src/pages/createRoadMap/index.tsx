import TextArea from "@/components/TextArea";
import { Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const CreateRoadMap = () => {
  return (
    <Box margin={"0 auto"} maxWidth={"800px"} height={"93vh"}>
      <Flex
        width={"100%"}
        height={"120px"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={"0.5rem"}
      >
        <Flex fontSize={"1.4rem"} fontWeight={"semibold"} gap={"0.3rem"}>
          로드맵 작성하기
        </Flex>
        자신만의 공부비법을 작성해 주세요!
      </Flex>
      <Flex
        flexDirection={"column"}
        width={"100%"}
        justifyContent={"space-between"}
      >
        <TextArea numbers={"1"} />
        <TextArea numbers={"2"} />
        <TextArea numbers={"3"} />
        <TextArea numbers={"4"} />
        <TextArea numbers={"5"} />
      </Flex>
      <Button
        marginTop={"2rem"}
        backgroundColor={"darkblue"}
        color={"white"}
        _hover={{ bg: "#100061" }}
        marginBottom={"30px"}
      >
        작성완료
      </Button>
    </Box>
  );
};

export default CreateRoadMap;
