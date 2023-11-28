import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { 로드맵 } from "@/dummy/로드맵";
import { 나의로드맵 } from "@/dummy/나의로드맵";
import Projects from "@/components/Projects";
import { useRouter } from "next/router";
import { useInfoQuery } from "./services/mutation.service";
import { 유저데이터 } from "@/interface/유저인터페이스";

const MyPage = () => {
  const [myRoadMap, setMyRoadMap] = useState(1);
  const router = useRouter();
  const [user, setUser] = useState<유저데이터>();

  const infoQuery = useInfoQuery();

  useEffect(() => {
    setUser(infoQuery);
  }, [infoQuery]);

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
                {(Number(user?.grade) >= 2 && user?.classNo == 1) ||
                user?.classNo == 2
                  ? "소프트웨어 개발과"
                  : "임베디드 개발과"}
              </Text>
            </Box>
            <Box flexDirection={"column"} gap={"0.5rem"} marginTop={"26px"}>
              <Text cursor={"pointer"}>로그아웃</Text>
              <Flex
                cursor={"pointer"}
                gap={"0.3rem"}
                onClick={() => {
                  router.push("/createRoadMap");
                }}
              >
                로드맵 작성
              </Flex>
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
            {로드맵.map((data) => (
              <Projects key={data.id} data={data} />
            ))}
          </Flex>
        ) : (
          <Flex flexDirection={"column"} gap={"10px"} marginBottom={"30px"}>
            {나의로드맵.map((data) => (
              <Projects key={data.id} data={data} />
            ))}
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default MyPage;
