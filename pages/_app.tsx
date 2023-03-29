import "@styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import React from "react";
import {
  UserOutlined,
  CalendarOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const { Header, Content, Footer, Sider } = Layout;

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const siderItems = [
    {
      key: "calendar",
      icon: <CalendarOutlined />,
      label: <Link href="/">Calendar</Link>,
    },
    {
      key: "profile",
      icon: <UserOutlined />,
      label: <Link href="/profile">Profile</Link>,
    },
  ];

  const setSiderSelectedMenu = () => {
    const pathname = router.pathname;

    return pathname.length > 5 ? pathname.slice(1) : "calendar";
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={siderItems}
            selectedKeys={[setSiderSelectedMenu()]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <span>
              <Button type="link" icon={<LoginOutlined />}>
                Login
              </Button>
            </span>
          </Header>
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
