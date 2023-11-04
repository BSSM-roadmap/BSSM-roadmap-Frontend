import React from "react";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";
import { 업체데이터 } from "@/interface/업체인터페이스";

interface CompaniesProps {
  data?: 업체데이터;
  i: number;
}

const Companies = ({ data, i }: CompaniesProps) => {
  return (
    <>
      <Flex
        key={i}
        width={"95%"}
        backgroundColor={"gray.100"}
        height={"90px"}
        padding={"10px"}
        borderRadius={"5px"}
      >
        <Flex
          backgroundColor={"white"}
          width={"70px"}
          height={"70px"}
          borderRadius={"5px"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image
            src="/images/markers/office-building.png"
            width={50}
            height={50}
            alt="img"
          />
        </Flex>
        <Box marginLeft={"15px"}>
          <Flex>
            <Text fontWeight={"bold"} marginRight={"5px"}>
              회사명:
            </Text>
            {data?.C_NAME}
          </Flex>
          <Flex alignItems={"center"}>
            <Text fontWeight={"bold"} marginRight={"5px"}>
              업무내용:
            </Text>
            <Text fontSize={"0.8rem"}>
              {data?.업무내용 ? data?.업무내용 : "업무내용 불러올 수 없음"}
            </Text>
          </Flex>
          <Flex alignItems={"center"}>
            <Text fontWeight={"bold"} marginRight={"5px"}>
              필요역량:
            </Text>
            <Text fontSize={"0.8rem"}>
              {data?.필요역량 ? data?.필요역량 : "필요역량 불러올 수 없음"}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Companies;
