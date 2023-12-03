import { truncateText } from "@/utils/truncate";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { roadMap } from "@/interface/로드맵";
import { 유저데이터 } from "@/interface/유저인터페이스";
import instance from "@/apis/httpClient";

interface projectProps {
  data: roadMap;
}

const Projects = ({ data }: projectProps) => {
  const router = useRouter();

  const [userProfile, setUserProfile] = useState<유저데이터>();

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
            {truncateText(data.steps[0], 19)}
          </Flex>
          <Flex>
            <Text fontWeight={"semibold"}>02. </Text>
            {truncateText(data.steps[1], 19)}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Projects;
