import { Button, Form, Input } from "antd";
import { ISignUpForm } from "../../types";
import useAuthHandlers from "../../model/useAuthHandlers";

function SignUpForm() {
  const [form] = Form.useForm<ISignUpForm>();

  const { registerMutation } = useAuthHandlers();

  return (
    <Form
      layout="vertical"
      form={form}
      className="flex flex-col gap-3"
      onFinish={(values) =>
        registerMutation.mutate({ ...values, lastName: "" })
      }
    >
      <Form.Item label="Your name" name="firstName">
        <Input size="large" color="#FFF" />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input size="large" color="#FFF" />
      </Form.Item>
      <Form.Item name="password" label="Password">
        <Input.Password size="large" />
      </Form.Item>
      <Button
        type="primary"
        className="mt-5 w-full"
        size="large"
        htmlType="submit"
        loading={registerMutation.isPending}
      >
        Create an account
      </Button>
    </Form>
  );
}

export default SignUpForm;
