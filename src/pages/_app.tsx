import Header from "@/components/Header";
import "@/styles/globalStyle";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  <style jsx global>
    {`
      :root {
        --font-rubik: ${rubik.style.fontFamily};
      }
    `}
  </style>;
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
