'use strict'

let money = prompt ('Ваш месячный доход?');
let income = "жопа";
let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm ('Есть ли у вас депозит в банке');
let mission = 10000;
let period = 6;
let budgetDay = money / 30;
let expenses1 = prompt ('Введите обязательную статью расходов');
let expenses2 = prompt ('Введите обязательную статью расходов');
let amount1 = prompt ('Во сколько это обойдется');
let amount2 = prompt ('Во сколько это обойдется');
let budgetMonth = (money - amount1 - amount2);
let missionComplete = Math.ceil(mission / budgetMonth);



console.log(money);
console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев и Цель заработать " + mission + " денех");
console.log(addExpenses.toLowerCase().split(", "));
console.log(budgetDay);
console.log(deposit);
console.log(budgetMonth);
console.log(missionComplete);