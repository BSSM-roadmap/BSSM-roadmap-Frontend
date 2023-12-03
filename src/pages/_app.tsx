import Header from "@/components/Header";
import "@/styles/globalStyle";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Rubik } from "next/font/google";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Header />
          <Component {...pageProps} />
        </ChakraProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
