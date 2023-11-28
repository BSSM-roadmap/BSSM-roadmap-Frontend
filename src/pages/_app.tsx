import Header from "@/components/Header";
import "@/styles/globalStyle";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Rubik } from "next/font/google";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const rubik = Rubik({ subsets: ["latin"] });
const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  <style jsx global>
    {`
      :root {
        --font-rubik: ${rubik.style.fontFamily};
      }
    `}
  </style>;

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ChakraProvider>
          <Header />
          <Component {...pageProps} />
        </ChakraProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
