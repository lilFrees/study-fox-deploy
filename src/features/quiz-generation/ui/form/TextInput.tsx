import { Input } from "antd";

interface TextInputProps {
  value: string | null;
  onChange: (value: string) => void;
}

function TextInput({ value, onChange }: TextInputProps) {
  return (
    <Input.TextArea
      size="large"
      className="mb-0 h-full border-0 bg-white pt-[16px] pr-[140px] pl-10 font-mono text-lg text-black placeholder:text-gray-600"
      placeholder="Choose popular quiz themes"
      rows={5}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default TextInput;
