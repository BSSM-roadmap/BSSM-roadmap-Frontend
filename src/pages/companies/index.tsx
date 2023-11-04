import Companies from "@/components/Companies";
import { ESW업체 } from "@/dummy/ESW업체";
import { SW업체 } from "@/dummy/SW업체";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function RoadMap() {
  return (
    <Flex w={"90%"} margin={"0 auto"}>
      <Box width={"50%"} marginRight={"0.5rem"}>
        <Flex width={"100%"} height={"80px"} alignItems={"center"}>
          <Text fontWeight={"600"} fontSize={"1.25rem"}>
            소프트웨어 개발과
          </Text>
        </Flex>
        <Flex
          width={"100%"}
          gap={"0.8rem"}
          flexDirection={"column"}
          marginBottom={"50px"}
        >
          {SW업체.map((data, i) => (
            <Companies key={i} data={data} i={i} />
          ))}
        </Flex>
      </Box>
      <Box width={"50%"}>
        <Flex width={"100%"} height={"80px"} alignItems={"center"}>
          <Text fontWeight={"600"} fontSize={"1.25rem"}>
            임베디드 소프트웨어 개발과
          </Text>
        </Flex>
        <Flex
          width={"100%"}
          gap={"0.8rem"}
          flexDirection={"column"}
          marginBottom={"50px"}
        >
          {ESW업체.map((data, i) => (
            <Companies key={i} data={data} i={i} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
