```typescript

interface Add {
  (num1: number, num2: number): number;
}

const add: Add = (x, y) => {
  const result = x + y;
  console.log(result);
  return result;
};

add(10, 27);

//-------------------------------------------------------------//

interface IsAdult {
  (age: number): boolean;
}

const isAdult: IsAdult = (age) => {
  // if (age > 18) {
  //   console.log("you are good to go");
  // } else {
  //   console.log("you are banned");
  // }
  return age > 18;
};

isAdult(33); // true
```

```typescript
type Score = "A" | "B" | "C" | "F";

interface User {
  name: string;
  age: number;
  gender?: string; // ? 가 있으면 할당이 될수 있고 안될수도 있다는 것을 명시
  readonly birthYear: number; // 읽기 전용
  [grade: number]: Score;
}

let user: User = {
  name: "xx",
  age: 30,
  birthYear: 2000,
  1: "A",
  2: "C",
  3: "F",
};

user.age = 19;
user.gender = "male";
user.birthYear = 1999; // birthYear는 위에서 readonly로 선언 되었기 때문에 재할당이 불가능하다.
```