"use strict";
// interface 사용해보기
// 객체나 클래스를 위한 타입을 지정 할 때 사용되는 문법입니다.
// implements를 사용하여 Circle이 Shape interface의 요구사항을 충족하겠다는 것을 명시
// class Circle implements Shape {
//   // 멤버 편수 radius의 값을 설정
//   radius: number;
//   constructor(radius: number) {
//     this.radius = radius
//   }
//   // 너비를 구하는 함수 구현
//   getArea(): number {
//     return this.radius * this.radius * Math.PI;
//   }
// }
// public accessor를 사용 
class Circle {
    // 멤버 편수 radius의 값을 설정
    // radius: number;
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    // 너비를 구하는 함수 구현
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    // width: number;
    // height: number;
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
// console.log(circle.radius); // public임으로 class 외부에서도 access 가능
// console.log(rectangle.width) // private임으로 class 외부에서는 access 불가능
//즉 priavte는 어떠한 값들이 있는지 외부에서는 알 수가 없다. 오픈소스가 아니다!
const shapes = [new Circle(5), new Rectangle(2, 3)];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
