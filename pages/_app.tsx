import "@styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import React from "react";
import { useRouter } from "next/router";
import { DefaultLayout } from "@components/UI";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  const withLayout = () => {
    return (
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    );
  };

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        {router.pathname != "/login" ? (
          withLayout()
        ) : (
          <Component {...pageProps} />
        )}
      </QueryClientProvider>
    </SessionProvider>
  );
}
