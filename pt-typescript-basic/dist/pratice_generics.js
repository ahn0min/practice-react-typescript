"use strict";
// 여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법
// 함수에 Generics 사용하기
// 객체 A + 객체 B
// 꺽쇠 안에 타입의 이름을 위치시키면 어떤 타입이 들어올지도 알 수 있으며, 타입이 깨지지도 않게 해준다.
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 2 });
// 이 경우 T 는 number 가 될 꺼고 파라미터에서도 동일한 T를 사용함으로써 타입추론이 깨지지 않게 되는 것이다.
// 결구 함수명 뒤의 꺽쇠 타입과 파라미터의 타입은 같아야 한다.
function wrap(param) {
    return { param };
}
const wrapped = wrap(10);
// interface에서 Generics 사용하기
// interface Items<T> {
//   list: T[];
// }
// const items: Items<string> = {
//   list: ['1', 'two', 'three']
// }
// Items의 <T>는 string이 된다.
// list 프로퍼티는 string[] 이 된다.
// Tyle alias에서 Generic 사용하기
// type Items<T> = {
//   list: T[];
// }
// const items: Items<number> = {
//   list: [1, 2, 3,]
// }
// class 에서 Generics 사용하기
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
