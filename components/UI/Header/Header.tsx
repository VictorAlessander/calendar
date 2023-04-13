import { LogoutOutlined } from "@ant-design/icons";
import { Layout, Button, theme } from "antd";
import { signOut, useSession } from "next-auth/react";

const { Header: AntdHeader } = Layout;

const Header = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { status } = useSession();

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
        {status === "authenticated" ? (
          <Button
            type="link"
            icon={<LogoutOutlined />}
            onClick={() => signOut()}
          >
            Logout
          </Button>
        ) : null}
      </span>
    </AntdHeader>
  );
};

export default Header;
