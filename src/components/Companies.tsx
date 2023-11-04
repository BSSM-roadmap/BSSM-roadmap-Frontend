import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { 학과데이터 } from "@/interface/학과인터페이스";

interface CompaniesProps {
  data?: 학과데이터;
  i: number;
}

const Companies = ({ data, i }: CompaniesProps) => {
  return (
    <>
      <Box
        key={i}
        width={"95%"}
        backgroundColor={"gray.100"}
        height={"90px"}
        padding={"10px"}
        borderRadius={"5px"}
      >
        {data?.C_NAME}
        {data?.C_COUNT}
      </Box>
    </>
  );
};

export default Companies;
