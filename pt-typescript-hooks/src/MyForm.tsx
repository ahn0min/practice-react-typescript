import { useState, useRef } from "react";

// useRef: 렌덜이과 관련이 없는 값이 DOM 에 직접적으로 접근해야할 상황이 있을 때 사용

// props의 type 설정
type MyFormProps = {
  onSubmit: (form: { name: string, description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  // null 값도 아니고 복잡한 객체이자 배열도 아니기 때문에 Generics 사용 불필요
  const [form, setForm] = useState({
    name: '',
    description: ''
  });
  // type을 모를때는 해당 DOM위에 마우스를 hover 해보면 IDE에서 나타내준다.
  const inputRef = useRef<HTMLInputElement>(null)

  // input tag에 name 속성을 선언해주었기 때문에 가능
  const { name, description } = form;
  
  // 모르기 때문에 우선 any로 설정
  // 마우스를 hover해보면 
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    // 초기화
    setForm({
      name: "",
      description: ''
    })
    // 선택된 DOM 이 없다면 return 
    if (!inputRef.current) {
      return 
    }
    // 존재한다면 focus
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} ref={inputRef} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">제출</button>
    </form>
  )
}

export default MyForm