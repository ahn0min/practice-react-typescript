"use strict";
/*

let count = 0; // number
count += 1;
// count = "갑자기 문자열" // error

const message: string = "hello world" // 문자열
const done: boolean = true;

const numbers: number[] = [1, 2, 3] // 숫자배열
const messages: string[] = ['1', '2', '3']; // 문자배열

// messages.push(1); // nubmer 넣을 수 없음

let mightBeUndefined: string | undefined = undefined; // string 또는 undefined
let nullableNumber: number | null = null; // null 또는 number

let color: 'red' | 'blue' | 'orange' = 'blue' // red, blue, orange 중 하나임
color = 'orange'
color = 'red'

*/
// 각각의 파라미터가 어떤 타입인지 () 우측은 반환값이 어떤 타입인지 
function sum(x, y, z) {
    return x + y + z;
}
sum(1, 2, 3);
// 타입스크립트를 사용했을때의 편리한점은 배열의 내장함수를 사용할 때에도 타입유추가 매우 잘 이루어진다는 점이다.
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
// 함수가 아무것도 반환하지 않을 때 : void
function returnNothing() {
    console.log('I am just saying hello world');
}
