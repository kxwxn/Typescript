# *Funtion 함수*
###### 기본적으로 타입스크립트는 함수의 인풋(Parameter) 그리고 아웃풋(Return)의 타입체크를 지원합니다.

## 예제 코드
```typescript
// 인풋(Parameter) 타입 어노테이션
const sayHello =(name:string)=>{
  console.log("Hello"+name.toUpperCase()+"!!");
}

sayHello(100); // 에러
sayHello("100"); // 타입 체크 성공

// 아웃풋(Return) 타입 어노테이션
const getCha = (): number => {
  return "100" // Type 'string' is not assignable to type 'number'.ts 라는 에러가 발생합니다.
  return 100 // 타입 체크에 성공합니다.
}

getCha();
```

## 아래는 함수 표현식에서 타입을 쓸 때

```typescript
type MathType = (x:number,y:number)=>number

const add: MathType = (x,y)=>x+y;
const subtract: MathType = (x,y)=>x-y;
```
## Rest parameter 사용법
###### Rest parameter는 함수의 파라미터를 정의할 때 사용되는 특별한 문법적 요소로, 함수가 임의의 개수의 인자를 받을 수 있도록 합니다. Rest parameter는 함수의 파라미터 리스트에서 나머지 인자들을 나타내는 것으로, 기본적으로 ... (spread 연산자)와 함께 사용됩니다.
```typescript
type SumAllType = (a:number,...rest:Array<number>)=>number;
const sumAll:SumAllType = (a,...rest)=>{
  return rest.reduce((acc,n)=>acc+n,a);
};
```
## interface를 사용해서 함수 표현식에 타입 지정하기
```typescript
interface User {
 userId:number;
 name:string;
 skills:string[];
}

// User 객체 (위의 User 인터페이스) 를 통째로 넘기기위해 함수 타입을 작성합니다.
type PrintUserFn =(user:User)=>string; 

// 함수표현식을 이용해서 타입을 지정합니다.
const PrintUser:PrintUserFn = ({userId,name,skills}):string=>{
  return `${userId} ${name} ${sklls.join(" ")}`;
} 
```
## 객체 메소드의 타입을 지정하는 방법들

```typescript
// 첫번쨰
type MathFn = {
  add : (a:number, b: number) => number; 
};

const mathObj = {
  add(a,b) {
    return a+b;
 },
};

// 두번째
type AddFn = (a:number, b:number)=>number;

const mathObj:{add:AddFn} = {
  add(a,b) {
    return a+b;
 },
};


```
