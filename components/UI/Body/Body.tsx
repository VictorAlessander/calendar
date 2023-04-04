import { Layout, theme } from "antd";
import React from "react";

const { Content } = Layout;

interface IBodyProps {
  children: React.ReactNode;
}

const Body = ({ children }: IBodyProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default Body;
