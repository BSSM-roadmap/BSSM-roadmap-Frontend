import TextArea from "@/components/TextArea";
import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { 유저아이디 } from "@/atom/유저아이디";
import { useCreateMutation } from "./services/mutation.service";

const CreateRoadMap = () => {
  const [steps, setSteps] = useState<string[]>(["", "", "", "", ""]);
  const userId = useRecoilValue(유저아이디);

  const handleTextAreaChange = (index: number, value: string) => {
    const newMessages = [...steps];
    newMessages[index] = value;
    setSteps(newMessages);
  };

  const mutation = useCreateMutation(userId, steps);

  const handleWriteComplete = () => {
    mutation.mutate();
  };

  return (
    <Box margin={"0 auto"} maxWidth={"800px"} height={"93vh"}>
      <Flex
        width={"100%"}
        height={"120px"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={"0.5rem"}
      >
        <Flex
          fontSize={"1.4rem"}
          fontWeight={"semibold"}
          gap={"0.3rem"}
          color={"darkblue"}
        >
          로드맵 작성하기
        </Flex>
        자신만의 공부비법을 작성해 주세요!
      </Flex>
      <Flex
        flexDirection={"column"}
        width={"100%"}
        justifyContent={"space-between"}
      >
        {[1, 2, 3, 4, 5].map((number, index) => (
          <TextArea
            key={number}
            numbers={number.toString()}
            value={steps[index]}
            onChange={(value) => handleTextAreaChange(index, value)}
          />
        ))}
      </Flex>
      <Button
        marginTop={"2rem"}
        backgroundColor={"darkblue"}
        color={"white"}
        _hover={{ bg: "#100061" }}
        marginBottom={"30px"}
        float={"right"}
        onClick={handleWriteComplete}
      >
        작성완료
      </Button>
    </Box>
  );
};

export default CreateRoadMap;
