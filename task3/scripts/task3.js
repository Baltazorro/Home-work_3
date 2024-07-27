// Крок 0. Позначення величин
// Крок 1. Введення необхадних даних
// Крок 2. Обчислення
// Крок 3. Виведення результатів
//let min=1, max=5
const randomNum = Math.floor(Math.random() * 5) + 1



let userNum = parseInt(prompt("Маєте дві спроби. Введіть число від 1 до 5",'0'))


if (userNum === randomNum) 
  alert(`Вітаємо! Ви вгадали число з першої спроби! Правильне число: ${randomNum}`)
 else alert("Неправильно! Спробуйте ще раз.")
  
  userNum = parseInt(prompt("Маєте ще одну спробу. Введіть число від 1 до 5:"))
  if (userNum === randomNum) 
    alert(`Вітаємо! Ви вгадали число з другої спроби! Правильне число: ${randomNum}`)
   else 
    alert(`Ви використали всі спроби. Правильне число: ${randomNum}`)
  
