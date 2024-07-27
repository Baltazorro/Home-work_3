// Крок 0. Позначення величин
//firstNameChild
//secondNameChild
//numberCandiesFirst
//numberCandiesSecond
//Крок 1. Введення необхадних даних
const firstNameChild = prompt('Імя першої дитини')
const secondNameChild= prompt('Імя другої дитини')
let numberCandiesFirst= parseInt(prompt('Кількість цукерок в першої дитини','0'))
let numberCandiesSecond= parseInt(prompt('Кількість цукурок в другої дитини','0'))
// Крок 2 Розвязок задачі
if (numberCandiesFirst>numberCandiesSecond) 
   document.write(`Дитина з більшою кількістю цукерок ${firstNameChild} `)
else if (numberCandiesFirst<numberCandiesSecond)
   document.write(`Дитина з більшою кількістю цукерок ${secondNameChild} `)
else document.write(`Кількість цукерок одинакова`)