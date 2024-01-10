# *Optional Properties 객체의 선택적 속성*
###### 객체안의 속성들을 옵션으로 지정할수있습니다. 여기에 사용되는 표기법은 '?' 입니다. 꼭 요구되지 않은 속성을 작성할 때 사용할 수 있습니다.

## 예제 코드
```typescript
  const printObj = (pt:{x: number; y: number}) => {
  //...
}

printObj({x:3}); // 여기에서 전달한 parameter 값에 y 라는 속성이 없기 때문에 에러가 발생합니다.

```
하지만 아래의 코드 처럼 변경 하면 에러가 발생 하지 않습니다.

```typescript
  const printObj = (pt:{x: number; y?: number}) => {
  //...
}

printObj({x:2});
```
