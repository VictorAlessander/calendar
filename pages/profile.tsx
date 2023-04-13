import Meta from "@partials/meta";
import { Divider, Button, Form, Input, notification } from "antd";
import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

interface IProfileServerSideProps {
  session: Session | null;
}

export const getServerSideProps: GetServerSideProps<
  IProfileServerSideProps
> = async (context) => {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };

  return { props: { session } };
};

export default function Profile({
  session,
  ...props
}: IProfileServerSideProps) {
  // useCheckAuth();
  const [formOne] = Form.useForm();
  const [formTwo] = Form.useForm();

  const openNotification = () => {
    notification.success({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  return (
    <>
      <Meta />
      <main>
        <Divider orientation="left">Registration Data</Divider>

        <Form layout="vertical" form={formOne} style={{ maxWidth: 600 }}>
          <Form.Item label="Email">
            <Input
              type="text"
              placeholder="Enter an email"
              value="anyemail@townsend.com"
            />
          </Form.Item>
          <Form.Item label="Name">
            <Input type="text" placeholder="Enter a name" value="any name" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={openNotification}>
              Submit
            </Button>
          </Form.Item>
        </Form>

        <Divider orientation="left">Change Password</Divider>

        <Form form={formTwo} layout="vertical" style={{ maxWidth: 600 }}>
          <Form.Item>
            <Input type="password" placeholder="Current Password" />
          </Form.Item>
          <Form.Item>
            <Input type="password" placeholder="New Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={openNotification}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </main>
    </>
  );
}
