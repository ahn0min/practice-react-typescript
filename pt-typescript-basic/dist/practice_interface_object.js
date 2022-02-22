"use strict";
/*

interface Person {
  name: string;
  age?: number; // 물을표가 있다는 것은 optional 하다는 것이다. 필수값이 아님!
}

interface Developer {
  name: string;
  age: number;
  skills: string[];
}

const pserson: Person = {
  name: '카리나',
  age: 23
}

const developser: Developer = {
  name: "개발자 카리나",
  age: 24,
  skills: ['javascript', 'react']
}
*/
// 그러나 Person, Develposer interface는 서로 유사하다.
// extends를 이용하여 다른 interface의 요구사항을 상속받을 수 있다.
// interface Person {
//   name: string;
//   age: number;
// }
// interface Developer extends Person {
//   skills: string[];
// }
// const person: Person = {
//   name: '손오공',
//   age: 100
// }
// const develpoer: Developer = {
//   name: '손오공',
//   age: 101,
//   skills: ['원기옥', '에네르기파']
// }
