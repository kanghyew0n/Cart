import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import global from "../styles/global";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Global styles={global} />
                <Component {...pageProps} />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </>
    );
}
