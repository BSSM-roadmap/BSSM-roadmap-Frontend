import Header from "@/components/Header";
import "@/styles/globals.css";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

export const theme = extendTheme({ colors });

const App = ({ Component, pageProps }: AppProps) => {
  <style jsx global>
    {`
      :root {
        --font-rubik: ${rubik.style.fontFamily};
      }
    `}
  </style>;
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box height={"93vh"}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default App;
