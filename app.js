"use strict";
// 定数名: {}は定数名: Objectと同一
// なるべくTypescriptのデフォルトの型推論に任せるのが良い
// Tupleは要素の長さが固定された配列
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {})); // enumの後ろに独自にカスタムで定義したい型名を記述。この場合enumが独自に、ADMIN: 0, READ_ONLY: 1, AUTHOR: 2とインデックスを割り当てる。
const person = {
    name: 'john',
    age: 24,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN,
};
// 一つの引数に対して複数の型があり得る場合にはUnion型となる
const combine = (input1, input2) => {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        const res = input1 + input2;
        return res;
    }
};
const combineAges = combine(30, 26);
console.log(combineAges);
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
