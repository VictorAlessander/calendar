import { LoginOutlined } from "@ant-design/icons";
import { Layout, Button, theme } from "antd";

const { Header: AntdHeader } = Layout;

const Header = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <AntdHeader
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
    </AntdHeader>
  );
};

export default Header;
