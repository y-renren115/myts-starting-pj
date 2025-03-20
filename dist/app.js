"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./models/types");
const person = {
    name: 'john',
    age: 24,
    hobbies: ['sports', 'cooking'],
    role: types_1.Role.ADMIN
};
// Union型を扱う完全な実装
const combine = (input1, input2) => {
    // 数値の場合は数値として加算
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    // それ以外の場合は文字列として結合
    return input1.toString() + input2.toString();
};
// 数値の例
const combineAges = combine(30, 26);
console.log('数値の組み合わせ:', combineAges);
// 文字列の例
const combineNames = combine('Max', 'Anna');
console.log('文字列の組み合わせ:', combineNames);
console.log('人物情報:', person.name);
for (const hobby of person.hobbies) {
    console.log('趣味:', hobby.toUpperCase());
}
// analytics.tsをインポートして実行
require("./analytics");
//# sourceMappingURL=app.js.map