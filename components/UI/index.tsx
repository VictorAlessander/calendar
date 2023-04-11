import Body from "./Body/Body";
import Header from "./Header/Header";
import Sider from "./Sider/Sider";
import { Layout } from "antd";
import Footer from "@components/UI/Footer/Footer";

interface ILayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: ILayoutProps) {
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
