import { Box, Flex, Text } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { LuSchool } from "react-icons/lu";
import { BsPersonCheck } from "react-icons/bs";

interface CompanyBoxProps {
  company: any;
  setCompany: Dispatch<SetStateAction<any>>;
}

const CompanyBox = ({ company, setCompany }: CompanyBoxProps) => {
  return (
    <>
      {company && (
        <Flex justifyContent={"center"}>
          <Box
            position={"fixed"}
            transition={"ease-in-out "}
            bottom={"30px"}
            borderRadius={"0.5rem"}
            width={{ base: "470px", sm: "480px", md: "490px", lg: "500px" }}
            zIndex={"10"}
            backgroundColor={"white"}
            padding={"20px"}
            border={"1px solid gray"}
          >
            <Flex
              justifyContent={"space-between"}
              w={"100%"}
              h={"20%"}
              alignItems={"flex-start"}
            >
              <Flex gap={"1rem"}>
                <Image
                  src={"/images/markers/office-building.png"}
                  width={40}
                  height={40}
                  alt="company"
                />
                <Text color={"black"} fontWeight={"semibold"}>
                  {company?.C_NAME}
                </Text>
              </Flex>
              <button
                onClick={() => {
                  setCompany(null);
                }}
              >
                <AiOutlineClose />
              </button>
            </Flex>
            <Flex
              width={"100%"}
              paddingTop={"50px"}
              paddingBottom={"10px"}
              alignItems={"center"}
              gap={"0.3rem"}
            >
              <LuSchool />
              <Text fontWeight={"semibold"}>학과: </Text>
              {company.DEPARTMENT == "ESW"
                ? "임베디드 소프트웨어 개발과"
                : "소프트웨어 개발과"}
            </Flex>
            <Flex
              width={"100%"}
              paddingTop={"5px"}
              paddingBottom={"10px"}
              alignItems={"center"}
              gap={"0.3rem"}
            >
              <BsPersonCheck />
              <Text fontWeight={"semibold"}>협약인원: </Text>
              {company.C_COUNT}명
            </Flex>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default CompanyBox;
