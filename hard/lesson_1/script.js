let num = 266219;
let sum = 1;
for (let i = 0; i < num.toString().length; i++) {
  sum = sum * +num.toString()[i]
};
console.log(sum);

console.log((sum ** 3).toString().substring(0 , 2));