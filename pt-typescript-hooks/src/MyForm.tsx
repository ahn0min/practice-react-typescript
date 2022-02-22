import { useState } from "react";

type MyFormProps = {
  onSubmit: (form: { name: string, description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: '',
    description: ''
  });
  const { name, description } = form;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 모르기 때문에 우선 any로 설정
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // 여기도
    e.preventDefault();
    onSubmit(form);
    // 초기화
    setForm({
      name: "",
      description: ''
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">제출</button>
    </form>
  )
}

export default MyForm