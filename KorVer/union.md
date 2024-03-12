# *Union Type 유니언 타입*
###### 여러가지 다른 타입들을 조합해서 사용할때 사용할 수 있는 syntax 입니다. 쉽게 말해서 하나 이상의 타입을 내포 할 수 있게 타입 지정을 할 때 사용되는 문법입니다. "|" 를 사용합니다.

## 예제 코드
```typescript
function userId(id:number | string){
  console.log("User ID" + id);  
}

userId(101)  // number 로써 타입체크
userId("100") // string 으로써 타입체크
userId(false) // 에러 발생, boolean 타입으로써 명시해둔 타입에 포함되지 않았습니다.
```

###### 유의할 점은 아래의 코드 처럼 유니언 타입을 사용할 경우에는 제공 받은 타입이 유니언 타입 모두를 만족 시킬는 연산 메소드만 실행 할 수 있습니다. 그렇지 않을 경우에는 narrowing 을 통해서 조건문으로 해결을 하면 됩니다.

```typescript
// narrowing
function printID(id: number | string){
// console.log(id.toUpperCase()); // 에러
  if(typeof id ==="string"){
  console.log(id.toUpperCase()); // OK
}
}
```
