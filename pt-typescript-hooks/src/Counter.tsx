import { useState } from "react" 

function Counter() {
  // Generics를 이용해 state의 value의 type을 지정해주면 된다.
  // 그러나 이건 생략해도 가능하다. ㅎㅎ..

  // 그럼 어떤 상황에 Generic을 통해 타입을 명시해 주는 것이 좋을까?
  // null || not null 일 경우이다.
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>상승</button>
        <button onClick={onDecrease}>하락</button>
      </div>
    </div>
  )
}

export default Counter;

// Information component로 이동