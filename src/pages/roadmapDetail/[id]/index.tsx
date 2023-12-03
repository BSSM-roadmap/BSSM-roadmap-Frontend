import Project from "@/components/Project";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { IoIosArrowDown } from "react-icons/io";
import instance from "@/apis/httpClient";
import { useRouter } from "next/router";
import { roadMap } from "@/interface/로드맵";
import { 유저데이터 } from "@/interface/유저인터페이스";
import { 유저아이디 } from "@/atom/유저아이디";
import { IoMdMore } from "react-icons/io";
import { useDeleteMutation } from "./services/api.service";

const RoadMapDetail = () => {
  const [userProfile, setUserProfile] = useState<유저데이터>();
  const [roadMapp, setRoadMapp] = useState<roadMap>();
  const [isOpen, setIsOpen] = useState(false);

  const userId = useRecoilValue(유저아이디);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      instance
        .get(`/roadmap/${id}`)
        .then((res) => setRoadMapp(res.data))
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, [id]);

  useEffect(() => {
    if (roadMapp?.userId) {
      instance
        .get(`/user/${roadMapp.userId}`)
        .then((res) => setUserProfile(res.data))
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, [roadMapp]);

  const notify = () => {
    setIsOpen(!isOpen);
  };

  const { mutate } = useDeleteMutation(Number(roadMapp?.roadmapId));

  const deleteRoadMap = () => {
    mutate();
  };

  return (
    <Box>
      <Flex
        width={"800px"}
        margin={"0 auto"}
        flexDirection={"column"}
        gap={"1rem"}
        marginBottom={"3rem"}
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
          <Text fontSize={"24px"}>
            {userProfile?.name}
            <span style={{ fontSize: "18px" }}> 님의 로드맵</span>
          </Text>
          <Flex
            cursor={"pointer"}
            alignItems={"center"}
            gap={"0.5rem"}
            flexDirection={"column"}
          >
            {userId == roadMapp?.userId && (
              <>
                <Text fontSize={"1.5rem"} onClick={notify}>
                  <IoMdMore />
                </Text>
                {isOpen && (
                  <Flex
                    position={"absolute"}
                    width={"5rem"}
                    height={"3.5rem"}
                    backgroundColor={"gray.200"}
                    marginLeft={"7rem"}
                    borderRadius={"0.3rem"}
                    flexDirection={"column"}
                  >
                    <Flex
                      width={"100%"}
                      height={"50%"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      fontSize={"0.9rem"}
                      onClick={() => {
                        router.push(`/modifyRoadMap/${id}`);
                      }}
                    >
                      수정
                    </Flex>
                    <Flex
                      width={"100%"}
                      height={"50%"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      fontSize={"0.9rem"}
                      borderTop={"1px solid white"}
                      onClick={deleteRoadMap}
                    >
                      삭제
                    </Flex>
                  </Flex>
                )}
              </>
            )}
          </Flex>
        </Flex>
        <Project state={roadMapp?.steps[0]} number={"01"} />
        <Text margin={"0 auto"}>
          <IoIosArrowDown />
        </Text>
        <Project state={roadMapp?.steps[1]} number={"02"} />
        <Text margin={"0 auto"}>
          <IoIosArrowDown />
        </Text>
        <Project state={roadMapp?.steps[2]} number={"03"} />
        <Text margin={"0 auto"}>
          <IoIosArrowDown />
        </Text>
        <Project state={roadMapp?.steps[3]} number={"04"} />
        <Text margin={"0 auto"}>
          <IoIosArrowDown />
        </Text>
        <Project state={roadMapp?.steps[4]} number={"05"} />
      </Flex>
    </Box>
  );
};

export default RoadMapDetail;
