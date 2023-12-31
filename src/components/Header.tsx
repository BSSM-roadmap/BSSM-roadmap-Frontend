// ... (import statements)

import { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { TOKEN } from "@/storage/constants";
import Storage from "@/storage";

const Header = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderContent = () => {
    if (isClient && Storage.getItem(TOKEN.ACCESS)) {
      return (
        <Box
          fontSize={"0.9rem"}
          cursor={"pointer"}
          onClick={() => {
            router.push("/myPage");
          }}
        >
          나의페이지
        </Box>
      );
    } else {
      return (
        <Link href={process.env.NEXT_PUBLIC_REDIRECT_URL as string} passHref>
          <Box fontSize={"0.9rem"} cursor={"pointer"}>
            로그인
          </Box>
        </Link>
      );
    }
  };

  return (
    <>
      <Box
        h={"55px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        borderBottom={"1px"}
        borderBottomColor={"gray.200"}
        boxShadow={"base"}
        width={"100%"}
      >
        <Box
          paddingLeft={"20px"}
          fontFamily={"monospace"}
          bgGradient="linear(to-l, #7c92ff, #160090)"
          bgClip="text"
          fontSize={"1.2rem"}
          fontWeight={"bold"}
          cursor={"pointer"}
          onClick={() => {
            router.push("/");
          }}
        >
          BSMRoadMap
        </Box>
        <Box
          paddingRight={"20px"}
          fontFamily={"monospace"}
          display={"flex"}
          gap={"1.5rem"}
          fontWeight={"medium"}
        >
          <Flex
            fontSize={"0.9rem"}
            cursor={"pointer"}
            onClick={() => {
              router.push("/roadMap");
            }}
          >
            로드맵보기
          </Flex>
          <Flex
            fontSize={"0.9rem"}
            cursor={"pointer"}
            onClick={() => {
              router.push("/map");
            }}
          >
            협약업체위치
          </Flex>
          <Flex
            fontSize={"0.9rem"}
            cursor={"pointer"}
            onClick={() => {
              router.push("/companies");
            }}
          >
            학교협약업체
          </Flex>
          {renderContent()}
        </Box>
      </Box>
    </>
  );
};

export default Header;
