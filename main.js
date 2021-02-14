// DOM要素の取得
const coin10 = document.getElementById("coin10");
const coin50 = document.getElementById("coin50");
const coin100 = document.getElementById("coin100");
const coin500 = document.getElementById("coin500");
const display = document.getElementById("display");
const colaButton = document.getElementById("cola-button");
const waterButton = document.getElementById("water-button");
const coffeeButton = document.getElementById("coffee-button");
const chargeButton = document.getElementById("charge-button");
const drinkNumber = document.getElementById("drinkNumber");
const charge = document.getElementById("charge");

// 状態を管理するための変数
let totalMoney = 0;
let chargeMoney = 0;
let num = 0;

// 合計金額を計算するための関数
const calcTotalMoney = function(i) {
  // 投入金額の合計を計算する
  totalMoney = totalMoney + i;
  display.innerText = totalMoney;
};

// お釣りの金額を計算するための関数
const calcChargeMoney = function() {
  chargeMoney = totalMoney;
  charge.innerHTML = chargeMoney;
  totalMoney = 0;
  display.innerHTML = totalMoney;
};

// 購入ボタンを押した時の関数
const buyDrink = function(price) {
  num++;
  drinkNumber.innerHTML = num;
  totalMoney -= price;
  display.innerHTML = totalMoney;
};

// 関数の実行
coin10.onclick = function() {
  calcTotalMoney(10);
};

coin50.onclick = function() {
  calcTotalMoney(50);
};

coin100.onclick = function() {
  calcTotalMoney(100);
};

coin500.onclick = function() {
  calcTotalMoney(500);
};

colaButton.onclick = function() {
  if (totalMoney < 150) {
    return;
  }
  buyDrink(150);
};

waterButton.onclick = function() {
  if (totalMoney < 100) {
    return;
  }
  buyDrink(100);
};

coffeeButton.onclick = function() {
  if (totalMoney < 120) {
    return;
  }
  buyDrink(120);
};

chargeButton.onclick = function() {
  calcChargeMoney();
};
