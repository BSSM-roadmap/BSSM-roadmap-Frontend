import { Box, Textarea } from "@chakra-ui/react";
import React from "react";

interface textProps {
  numbers: any;
}

const TextArea = ({ numbers }: textProps) => {
  return (
    <Box>
      STEP {numbers}
      <Textarea
        resize={"none"}
        borderColor={"gray.300"}
        marginBottom={"20px"}
        marginTop={"10px"}
      />
    </Box>
  );
};

export default TextArea;
