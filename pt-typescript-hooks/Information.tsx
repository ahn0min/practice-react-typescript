import { useState } from "react";

type Information = { 
  name: string;
  description: string;
}

type Todo = {
  id: number;
  text: string;
  done: boolean;
}
function Information() {
  // 이런 경우에 Generics를 사용하면 좋다.

  // 1. null 값이가 null 값이 아닐 경우
  const [information, setInformation] = useState<Information | null>(null) ;
  // 2. 까다로운 구조의 객체이거나 배열인 경우
  
  // 여기서 사용된 as 는 타입표명(Type Assertion) 이라는 문법
  // 특정 값이 특정 타입이다 라는 정보를 덮어 쓸 수 있는 문법
  // 즉 타입스크립트가 추론한 타입보다 내가 정한 타입이 맞다고 표시하는 것과 같다.

  // 여기서는 [] 이 녀석은 Todo로 이루어진 배열이다. 로 쓰인다.

  const [todos, setTodos] = useState([] as Todo[]);

  return (
    <div>{information}</div>
  )
}