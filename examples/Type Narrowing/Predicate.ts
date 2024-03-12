// Predicate type (타입명제)

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
} // 반환 값의 타입을 predicate(타입명제)로 animal is Cat 으로 type narrowing을 함으로써 true를 반환하면 그 파라미터는 Cat 의 인터페이스로 정의됩니다.

function makeNoise(animal: Cat | Dog) {
  if (isCat(animal)) {
    return "Meow~";
  } else {
    animal;
    return "Bow Wow!";
  }
}

// 타입 명제로 type narrowing을 할 경우 재사용이 가능한 함수를 사용할 수 있기 때문에, user 인가 admin 인가 등을 판단하는데 유용합니다.
