'use strict'
const number = process.argv[2] || 0; //実行の０、１、２番目を代入、なければ０を代入。選択的代入
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log (sum);