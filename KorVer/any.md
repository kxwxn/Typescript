# *Any타입*
###### 어떠한 타입이로 값이 들어와도 해당값을 컴파일러는 타입체크를 하지 않습니다.

## 예제 코드

```typescript
const doSomething = (obj: any)=>{
  //...
  obj();
  obj.a=1;
} // 왜 any를 사용해야 하는지에 대해 코멘트를 작성해주는게 좋습니다.

doSomething({
  color:"red",
  x:1,
  y:-1,
}); // 객체 전달

doSomething("hello"); // 문자열 전달
```
