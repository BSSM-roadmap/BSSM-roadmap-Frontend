import TextArea from "@/components/TextArea";
import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { 유저아이디 } from "@/atom/유저아이디";
import { useModifyMutation } from "./services/mutation.service";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import instance from "@/apis/httpClient";

const ModifyRoadMap = () => {
  const [steps, setSteps] = useState<string[]>(["", "", "", "", ""]);

  const router = useRouter();
  const { id } = router.query;

  const handleTextAreaChange = (index: number, value: string) => {
    const newMessages = [...steps];
    newMessages[index] = value;
    setSteps(newMessages);
  };

  const modifyMutation = useModifyMutation(Number(id), steps);

  const modifyRoadMap = () => {
    if (steps.some((step) => step.length < 5)) {
      toast.error("적어도 5글자 이상이어야 합니다.");
      return;
    }

    toast.success("게시글 수정 성공");
    modifyMutation.mutate();
    router.push("/roadMap");
  };

  useEffect(() => {
    if (id) {
      instance
        .get(`/roadmap/${id}`)
        .then((res) => setSteps(res.data.steps))
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, [id]);

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
          로드맵 수정하기
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
        onClick={modifyRoadMap}
      >
        수정완료
      </Button>
    </Box>
  );
};

export default ModifyRoadMap;
