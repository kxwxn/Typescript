# *Type Aliases & Interface 타입 별칭과 인터페이스*
###### 이 방법을 사용하면 그때그때 일회성으로 타입을 지정하는게 아니라 하나의 틀을 만들어 놓고 추후에 재사용이 가능하게 끔 만들어 놓는 방법입니다.

## 예제 코드
```typescript
//Type Alias
type CoordType = {
  x:number;
  y:number;
}

function printCoord(pt:CoordType){
  console.log("x value is" + pt.x);
  console.log("y value is" + pt.y)
}

//Interface
interface CoordType2{
  x:number;
  y:number;
}

function printCoord(pt:CoordType2){
  console.log("x value is" + pt.x);
  console.log("y value is" + pt.y)
}


printCoord({x:100,y:300})

```

