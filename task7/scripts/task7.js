let numberMonth = parseInt(prompt('Номер місяця','12'))
const January = 1
const February = 2
const March =3
const April =4
const May =5
const June =6
const July =7
const August =8
const September =9
const October =10
const November = 11
const December =12



if (numberMonth<=2)
   alert('Пора року - зима')
else if (numberMonth<=5)
   alert('Пора року - весна')
else if (numberMonth<=8)
   alert('Пора року - літо')
else if (numberMonth<=11)
   alert('Пора року - осінь')
else if (numberMonth===12)
   alert('Пора року - зима')
else
alert('Не існуючий місяць')