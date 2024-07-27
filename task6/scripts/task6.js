// Крок 0. Позначення величин

// Крок 1. Введення необхадних даних
let numberDay = parseInt(prompt('Номер дня тижня','1'))
const monDay = 1
const tuesDay = 2
const wednesDay = 3
const thursDay = 4
const friDay = 5
const saturDay = 6
const sunDay = 7
// Крок 2. Обчислення
// Крок 3. Виведення результатів
if (numberDay===monDay)
   alert('Ви обрали день тижня - понеділок')
else  if (numberDay===tuesDay)
   alert('Ви обрали день тижня - вівторок')
else if (numberDay===wednesDay)
   alert('Ви обрали день тижня - середа')
else if (numberDay===thursDay)
   alert('Ви обрали день тижня - четвер')
else if (numberDay===friDay)
   alert('Ви обрали день тижня - пятниця')
else if (numberDay===saturDay)
   alert('Ви обрали день тижня - субота')
else if (numberDay===sunDay)
   alert('Ви обрали день тижня - неділя')
else 
   alert("Такого дня немає")