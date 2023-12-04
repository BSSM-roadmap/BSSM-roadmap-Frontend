import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Projects from "@/components/Projects";
import { useRouter } from "next/router";
import { 유저데이터 } from "@/interface/유저인터페이스";
import { useQuery } from "react-query";
import instance from "@/apis/httpClient";
import { roadMap } from "@/interface/로드맵";
import LoadingPage from "@/components/Loading";
import Storage from "@/storage";

const Useres = () => {
  const [myRoadMap, setMyRoadMap] = useState(1);
  const router = useRouter();
  const [user, setUser] = useState<유저데이터>();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(`/user/${id}`);
        const data = response.data;
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [id]);

  const token = Storage.getItem("TOKEN:ACCESS");
  const { data: userRoadMap, isLoading: userRoadMapLoading } = useQuery(
    ["roadMap"],
    () => {
      const config = {
        headers: {
          Authorization: token,
        },
      };

      return instance
        .get(`/user/${user?.userId}/roadmap`, config)
        .then((res) => res.data);
    },
    {
      enabled: !!user?.userId,
    }
  );

  const { data: addRoadMap, isLoading: addRoadMapLoading } = useQuery(
    ["roadMap"],
    () => {
      const config = {
        headers: {
          Authorization: token,
        },
      };

      return instance
        .get(`/save/${user?.userId}/roadmap`, config)
        .then((res) => res.data);
    },
    {
      enabled: !!user?.userId,
    }
  );

  console.log("userId", user?.userId);

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
          <Flex width={"100%"} justifyContent={"space-between"}>
            <Box width={"30%"}>
              <Text fontWeight={"semibold"} fontSize={"1.2rem"}>
                {user?.name}
              </Text>
              <Text>
                {user?.grade}학년 / {user?.enrolledAt}년 입학생
              </Text>
              <Text>
                {(Number(user?.grade) >= 2 && user?.classNo === 1) ||
                user?.classNo === 2
                  ? "소프트웨어 개발과"
                  : "임베디드 개발과"}
              </Text>
            </Box>
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
          <Text
            fontWeight={"semibold"}
            borderBottom={"1px"}
            marginRight={"1rem"}
            color={myRoadMap === 1 ? "darkblue" : "gray.500"}
            borderBottomColor={myRoadMap === 1 ? "darkblue" : "gray.500"}
            cursor={"pointer"}
            transition={"color 0.3s, borderBottomColor 0.3s"}
            onClick={() => {
              setMyRoadMap(1);
            }}
          >
            작성한 로드맵
          </Text>
          <Text
            fontWeight={"semibold"}
            borderBottom={"1px"}
            color={myRoadMap === 2 ? "darkblue" : "gray.500"}
            borderBottomColor={myRoadMap === 2 ? "darkblue" : "gray.500"}
            transition={"color 0.3s, borderBottomColor 0.3s"}
            cursor={"pointer"}
            onClick={() => {
              setMyRoadMap(2);
            }}
          >
            찜한 로드맵
          </Text>
        </Flex>
        {myRoadMap === 2 ? (
          <Flex flexDirection={"column"} gap={"10px"} marginBottom={"30px"}>
            {addRoadMapLoading ? (
              <LoadingPage />
            ) : addRoadMap?.length > 0 ? (
              addRoadMap.map((data: roadMap) => (
                <Projects key={data.roadmapId} data={data} />
              ))
            ) : (
              <Box
                width={"100%"}
                height={"25rem"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text fontSize={"1.2rem"}>찜한 로드맵 없음</Text>
              </Box>
            )}
          </Flex>
        ) : (
          <Flex flexDirection={"column"} gap={"10px"} marginBottom={"30px"}>
            {userRoadMapLoading ? (
              <LoadingPage />
            ) : userRoadMap?.length > 0 ? (
              userRoadMap.map((data: roadMap) => (
                <Projects key={data.roadmapId} data={data} />
              ))
            ) : (
              <Box
                width={"100%"}
                height={"25rem"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text fontSize={"1.2rem"}>작성한 로드맵 없음</Text>
              </Box>
            )}
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Useres;
