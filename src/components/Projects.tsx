import { truncateText } from "@/utils/truncate";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { roadMap } from "@/interface/로드맵";
import { 유저데이터 } from "@/interface/유저인터페이스";
import instance from "@/apis/httpClient";
import { CiHeart } from "react-icons/ci";
import { useMutation, useQueryClient } from "react-query";
import { aHeart, dHeart } from "@/apis";
import { useRecoilValue } from "recoil";
import { 유저아이디 } from "@/atom/유저아이디";
import { IoMdHeart } from "react-icons/io";

interface projectProps {
  data: roadMap;
}

const Projects = ({ data }: projectProps) => {
  const router = useRouter();

  const [userProfile, setUserProfile] = useState<유저데이터>();
  const userId = useRecoilValue(유저아이디);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = data?.userId;
        const response = await instance.get(`/user/${userId}`);
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchData();
  }, []);

  const queryClient = useQueryClient();

  const addHeart = useMutation({
    mutationFn: () => aHeart(Number(data?.roadmapId), userId),
    onSuccess: () => {
      queryClient.invalidateQueries(["roadMap"]);
    },
  });

  const deleteHeart = useMutation({
    mutationFn: () => dHeart(Number(data?.roadmapId), userId),
    onSuccess: () => {
      queryClient.invalidateQueries(["roadMap"]);
    },
  });

  const heartController = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();
    if (data.saveState == true) {
      deleteHeart.mutate();
    } else {
      addHeart.mutate();
    }
  };

  return (
    <Flex
      key={data.roadmapId}
      width={"100%"}
      height={"80px"}
      padding={"10px"}
      backgroundColor={"gray.100"}
      borderRadius={"5px"}
      alignItems={"center"}
      gap={"10px"}
      cursor={"pointer"}
      onClick={() => {
        router.push(`/roadmapDetail/${String(data.roadmapId)}`);
      }}
    >
      <Flex
        width={"63px"}
        height={"63px"}
        backgroundColor={"white"}
        borderRadius={"5px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image src="/images/road.png" width={50} height={50} alt="img" />
      </Flex>
      <Flex width={"100%"} justifyContent={"space-between"}>
        <Box>
          <Text fontWeight={"semibold"}>
            <span style={{ marginRight: "10px" }}>
              {userProfile?.name}님의 로드맵
            </span>{" "}
            ({userProfile?.enrolledAt}
            입학생)
          </Text>
          <Flex>
            <Flex marginRight={"10px"}>
              <Text fontWeight={"semibold"}>01. </Text>
              {truncateText(data.steps[0], 20)}
            </Flex>
            <Flex>
              <Text fontWeight={"semibold"}>02. </Text>
              {truncateText(data.steps[1], 20)}
            </Flex>
          </Flex>
        </Box>
        <Flex alignItems={"center"} marginRight={"0.5rem"}>
          {data.saveState ? (
            <IoMdHeart
              style={{
                width: "1.3rem",
                height: "1.3rem",
                marginRight: "0.3rem",
              }}
              onClick={heartController}
            />
          ) : (
            <CiHeart
              style={{
                width: "1.3rem",
                height: "1.3rem",
                marginRight: "0.3rem",
              }}
              onClick={heartController}
            />
          )}
          {data.saveCount}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Projects;
