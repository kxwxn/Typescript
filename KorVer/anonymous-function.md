# *Anonymous funtion 익명 함수*
###### 주어진 값, 예를 들어 배열같은 것 들을 대상으로 익명의 함수(메소드와 그것의 콜백함수)를 통해서 연산 작업을 할때 역으로 타입추론을 하여서 사용자 경험을 좋게 만들어 줍니다.

## 예제 코드
```typescript
const users = ["alice","Bob","Eve"]

users.forEach((user)=>{
  //...
  user. // 이렇게 타입추론을 해서 user가 string 타입인것을 알아내어, string 타입에 사용할수 있는 메소드들을 보여주게됩니다.
})

```
