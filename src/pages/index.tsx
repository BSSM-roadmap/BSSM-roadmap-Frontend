import { Box, Button, Flex, Text, theme } from "@chakra-ui/react";
import Image from "next/image";
import RoadMapImage from "@/assets/roadmap.svg";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <Flex w={"90%"} h={"100%"} margin={"0 auto"}>
      <Box w={"60%"} display={"flex"} flexDirection={"column"}>
        <Box w={"100%"} h={"50%"} display={"flex"} alignItems={"center"}>
          <Text fontSize={["2xl", "3xl", "4xl", "5xl"]} marginLeft={"20px"}>
            <Texts>선배</Texts>들이 알려주는
            <br /> <Texts>후배</Texts>들을 위한 <Texts>공부법</Texts>
          </Text>
        </Box>
        <Box w={"60%"} h={"50%"} display={"flex"}>
          <Button
            colorScheme="telegram"
            marginLeft={"20px"}
            w={"60%"}
            h={"45px"}
            paddingTop={"22px"}
            paddingBottom={"22px"}
            onClick={() => {
              router.push("/roadMap");
            }}
          >
            로드맵 보러가기
          </Button>
        </Box>
      </Box>
      <Box w={"40%"} h={"100%"} display={"flex"} alignItems={"flex-end"}>
        <Box marginBottom={"3rem"} marginRight={"20px"}>
          <Image
            src={RoadMapImage}
            width={700}
            height={700}
            alt="Picture of the author"
          />
        </Box>
      </Box>
    </Flex>
  );
}

const Texts = styled.span`
  font-weight: 600;
`;
