// 화살표함수를 통해 Generics를 사용하면 props의 타입이 명확하지 않아 any로 취급을 한다.
// 그래서 난 함수 선언문방식을 통해 진행하려고 한다.

// React.FC는 여러 이슈가 존재한다. default props를 component 바깥에서 선언해줄 경우
// 선언을 하지 않은 것처럼 동작한다.

type GreetingsProps = {
  name: string;
  age: number;
  optional?: number;
  // method props 받아오기
  onClick: (name: string) => void // void 반환값이 없다.
}

function Greetings({name, age, optional, onClick}: GreetingsProps) {
  const handleClick = () => onClick(name);

  return (
    <div>
      Hello, {name} My Age is {age}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  )
}

Greetings.defaultProps = {
  age: 20
}

export default Greetings

// 1. 생략해도 되는 props의 경우 ? optional하게 해준다.
// 2. React.FC 별로 좋지 않다.
// 3. 함수 선언문(function), 함수표현식(const) 선택이다.
// 4. Props에 대한 타입을 선언 할 땐 interface, type중 일관성만 지키면 된다.