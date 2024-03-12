// Discriminated Unions(유니온타입 판별)

interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "Oink!";
    case "cow":
      return "Mooo~";
    case "rooster":
      return "Cockadoodledoo~~~";
    default:
      // we should never make it here, if we handled all cases correctly.
      // 라인의 코드는 절대로 작동하면 안됩니다. 위에서 모든 케이스들이 올바르게 작성 되었다면요.
      const _exhaustiveCheck: never = animal;
      // 여기서 animal 은 마지막 남은 Sheep이 할당 되네요, 왜냐하면 위에서 "sheep" 케이스를 작성하지 않았기 때문입니다.
      return _exhaustiveCheck;
  }
}

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster",
};

const scream: string = getFarmAnimalSound(stevie);

console.log(scream);
// Cockadoodledoo~~~
