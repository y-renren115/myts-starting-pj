// 定数名: {}は定数名: Objectと同一
// なるべくTypescriptのデフォルトの型推論に任せるのが良い
// Tupleは要素の長さが固定された配列

// typeキーワードを使用するのがエイリアス型（alias）

type Combinable = number | string;

enum Role {
  ADMIN, READ_ONLY, AUTHOR,
} // enumの後ろに独自にカスタムで定義したい型名を記述。この場合enumが独自に、ADMIN: 0, READ_ONLY: 1, AUTHOR: 2とインデックスを割り当てる。

const person:{
  name: string,
  age: number,
  hobbies: string[],
  role: Role, // 要素の順番が固定されている場合、Tupleにする
} = {
  name: 'john',
  age: 24,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN,
};

// 一つの引数に対して複数の型があり得る場合にはUnion型となる
const combine = (input1: Combinable, input2: Combinable) => {
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    const res = input1 + input2;
    return res;
  }
}


const combineAges = combine(30, 26);
console.log(combineAges);

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}