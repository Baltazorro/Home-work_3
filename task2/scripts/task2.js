// Крок 0. Позначення величин
//ціна товару - priceProduct
//кількість грошей - moneyTotal
//залишок грошей 
//лоторея - priseLottery
// Крок 1. Введення необхадних даних
let priceProduct = parseFloat(prompt('Ціна товару','0'))
let moneyTotal = parseFloat(prompt('Кількість грошей','0'))
let balanceMoney = moneyTotal-priceProduct
const priseLottery = 4
// Крок 3. Виведення результатів
if (moneyTotal>priceProduct)
{alert('Успішна покупка')
   if (balanceMoney>=priseLottery)
      alert('Бажаєте прибрати лоторею за 4 грн?')
   else('Дякуємо за покупку')
}
else alert('Недостатньо коштів')