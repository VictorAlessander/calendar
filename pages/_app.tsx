import "@styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import React from "react";
import { Layout, theme } from "antd";
import Sider from "@components/UI/Sider/Sider";
import Header from "@components/UI/Header/Header";

const { Content, Footer } = Layout;

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Sider />
        <Layout>
          <Header />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Component {...pageProps} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </QueryClientProvider>
  );
}
