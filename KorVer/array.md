# *Array 배열*
###### 예를들어 [1,2,3] 이라는 배열의 타입을 정하기 위해서는 number[] 라는 syntax를 사용하면 된다. 이 syntax는 어떠한 타입으로도 지정이 가능합니다.(eg. strign[] 으로 지정후 ["coffe","bagel","tea"] 이렇게 선언)

## 예제코드
```typescript
const platformList = ["web","ios","android","xbox","ps"];

function supportedPlatforms(item: string[]){
//...
}
supportedPlatforms(platformList);
```
다른 방법으로는 
```typescript
const platformList = [100,200,300,400];
const supportedPlatforms = (item:Array<number>) => {
//...
}

supportedPlatforms(platformList)
```
###### 위의 코드는 제너릭 스타일 이다.
