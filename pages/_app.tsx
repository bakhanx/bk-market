import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import useUser from "@libs/client/useUser";
import { useRouter } from "next/router";


function CustomUser(){
  useUser();
  return null;
}

function MyApp({ Component, pageProps }: AppProps) {

  

  return (
    <SWRConfig
      value={{
        // refreshInterval:5000,
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <div className="w-full max-w-xl mx-auto ">
        
        <Component {...pageProps} />
        <CustomUser />
      </div>
    </SWRConfig>
  );
}

export default MyApp;
