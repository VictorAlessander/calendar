import "@styles/globals.css";
import type { AppProps } from "next/app";
import { useState, createContext } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import React from "react";
import { useRouter } from "next/router";
import { DefaultLayout } from "@components/UI";

const DEFAULT_AUTH_CONTEXT_VALUES = {
  authenticated: false,
  token: null,
};

export const AuthContext = createContext(DEFAULT_AUTH_CONTEXT_VALUES);

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  const withLayout = () => {
    return (
      <AuthContext.Provider value={DEFAULT_AUTH_CONTEXT_VALUES}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </AuthContext.Provider>
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      {router.pathname != "/login" ? (
        withLayout()
      ) : (
        <AuthContext.Provider value={DEFAULT_AUTH_CONTEXT_VALUES}>
          <Component {...pageProps} />
        </AuthContext.Provider>
      )}
    </QueryClientProvider>
  );
}
