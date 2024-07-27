// Крок 0. Позначення величин
//вік людини - ageHuman
//дитина у садочку - childKindergarten
//школяр - schoolboyHuman
//студент - studentHuman
//працівник - workerHuman
//пенсіонер - pensionerHuman
// Крок 1. Введення необхадних даних
let ageHuman = parseInt(prompt('Вік людини','18'))
// Крок 2. Обчислення
// Крок 3. Виведення результатів
if (ageHuman<6)
   alert('Ця людина є дитиною у садочку')
else if (ageHuman<=17)
   alert('Ця людина є школярем')
else if (ageHuman<=25)
   alert('Ця людина є студентом')
else if (ageHuman<=60)
   alert('Ця людина є працівником')
else 
alert('Ця людина є пенсіонером')