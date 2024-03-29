import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import useUser from "@libs/client/useUser";
import { useRouter } from "next/router";
import Script from "next/script";
import { Suspense } from "react";

function CustomUser() {
  useUser();
  return null;
}

function MyApp({ Component, pageProps }: AppProps) {
  console.log("App is running");
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

      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="lazyOnload"
      />

      {/* <Script src="https://connect.facebook.net/en_US/sdk.js" onLoad={() =>{
         window.fbAsyncInit = function() {
          FB.init({
            appId            : 'your-app-id',
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v15.0'
          });
        };
      }} /> */}
    </SWRConfig>
  );
}

export default MyApp;
