import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/selectorComponent.css";
import "../styles/shop.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import "../styles/pagination.css";
import { store } from "../redux/app/store";
import { Provider } from "react-redux";
import "../styles/contact.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { ToastContainer } from "react-toastify";
import "../styles/tableComponent.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
  }, [router.events]);

  return (
    <>
      <ToastContainer />
      <LoadingBar
        waitingTime={100}
        color="#643001"
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
