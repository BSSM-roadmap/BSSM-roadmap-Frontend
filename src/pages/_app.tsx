import Header from "@/components/Header";
import "@/styles/globalStyle";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Rubik } from "next/font/google";
import { RecoilRoot } from "recoil";

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
    <RecoilRoot>
      <ChakraProvider>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
};

export default App;
