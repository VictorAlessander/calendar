import Meta from "@partials/meta";
import { Divider, Button, Form, Input } from "antd";

export default function Profile() {
  const [formOne] = Form.useForm();
  const [formTwo] = Form.useForm();

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
            <Button type="primary">Submit</Button>
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
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </main>
    </>
  );
}
