import { Button, Form, Input } from "antd";
import { ISignInForm } from "../../types";
import useAuthHandlers from "../../model/useAuthHandlers";

function SignInForm() {
  const [form] = Form.useForm<ISignInForm>();

  const { loginMutate } = useAuthHandlers();

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={loginMutate.mutate}
      className="flex flex-col"
      requiredMark={false}
      validateTrigger="onSubmit"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
          },
          {
            required: true,
            pattern: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
            message: "Please enter a valid email address",
          },
        ]}
      >
        <Input size="large" color="#FFF" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        className="mt-5"
        rules={[{ required: true, min: 8 }]}
      >
        <Input.Password size="large" />
      </Form.Item>
      <Button
        type="primary"
        className="mt-5 w-full"
        size="large"
        htmlType="submit"
        loading={loginMutate.isPending}
      >
        Sign in to your account
      </Button>
    </Form>
  );
}

export default SignInForm;
