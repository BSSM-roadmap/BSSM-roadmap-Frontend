import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React from "react";

const SignIn = () => {
  return (
    <div>
      <Flex
        width={"100%"}
        height={"93vh"}
        alignItems={"center"}
        backgroundColor={"gray.100"}
      >
        <Box width={"500px"} height={"80%"} margin={"0 auto"}>
          <Flex
            fontWeight={"semibold"}
            fontSize={"1.5rem"}
            gap={"0.3rem"}
            marginBottom={"2rem"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box
              paddingLeft={"20px"}
              fontFamily={"monospace"}
              bgGradient="linear(to-l, #7c92ff, #160090)"
              bgClip="text"
              fontSize={"2rem"}
              fontWeight={"bold"}
              marginBottom={"10px"}
            >
              BSMRoadMap
            </Box>
          </Flex>
          <Box display={"flex"} flexDirection={"column"}>
            <Box fontWeight={"extrabold"} marginBottom={"10px"}>
              아이디
            </Box>
            <Input
              type="text"
              backgroundColor={"white"}
              borderColor={"gray.300"}
            />
            <Box
              fontWeight={"extrabold"}
              marginTop={"20px"}
              marginBottom={"10px"}
            >
              비밀번호
            </Box>
            <Input
              type="password"
              backgroundColor={"white"}
              borderColor={"gray.300"}
            />
            <Button
              marginTop={"2rem"}
              backgroundColor={"darkblue"}
              color={"white"}
              _hover={{ bg: "#100061" }}
            >
              로그인
            </Button>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default SignIn;
