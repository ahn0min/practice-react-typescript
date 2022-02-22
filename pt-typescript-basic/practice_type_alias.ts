type Person = {
  name: string;
  age?: number; 
}

// & sms Intersection으로서 두개 이상의 타입들을 합쳐준다.
type Developer = Person & {
  skills: string[];
}

const person: Person = {
  name: '집사람'
};

const developer: Developer = {
  name: '안사람',
  skills: ["1", "2", "3"]
}

type People = Person[] // Person[]을 이제 앞으로 People이라는 타입으로 사용할 수 있습니다. // person의 집합인다.
const people: People = [person, developer]

// type[]은 type을 만족하는 것들의 모임이라고 생각할 수 있다.
type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange']