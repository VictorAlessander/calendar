import "@styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import React from "react";
import { Layout } from "antd";
import Sider from "@components/UI/Sider/Sider";
import Header from "@components/UI/Header/Header";
import Footer from "@components/UI/Footer/Footer";
import Body from "@components/UI/Body/Body";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: React.ReactNode;
}

function WithLayout({ children }: ILayoutProps) {
  return (
    <Layout>
      <Sider />
      <Layout>
        <Header />
        <Body>{children}</Body>
        <Footer />
      </Layout>
    </Layout>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      {router.pathname != "/login" ? (
        <WithLayout>
          <Component {...pageProps} />
        </WithLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </QueryClientProvider>
  );
}
