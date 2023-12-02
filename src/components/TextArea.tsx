// components/TextArea.jsx

import { Box, Textarea } from "@chakra-ui/react";
import React from "react";

interface TextAreaProps {
  numbers: string;
  value: string;
  onChange: (value: string) => void;
}

const TextArea = ({ numbers, value, onChange }: TextAreaProps) => {
  return (
    <Box>
      STEP {numbers}
      <Textarea
        resize={"none"}
        borderColor={"gray.300"}
        marginBottom={"20px"}
        marginTop={"10px"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Box>
  );
};

export default TextArea;
