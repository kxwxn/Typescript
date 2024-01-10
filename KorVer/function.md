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
