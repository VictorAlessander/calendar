import Link from "next/link";
import { CalendarOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useRouter } from "next/router";

const { Sider: AntdSider } = Layout;

const Sider = () => {
  const router = useRouter();

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
    <AntdSider
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
        defaultSelectedKeys={["calendar"]}
        items={siderItems}
        selectedKeys={[setSiderSelectedMenu()]}
      />
    </AntdSider>
  );
};

export default Sider;
