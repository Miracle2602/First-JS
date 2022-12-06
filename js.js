// + - сложение
// - - вычитание
// - /
// - ++
// - --
// - **
// - %




// let num1 = prompt("первое число")
// let num2 = prompt("второе число")
// let result = (num1 + num2)
// alert(result)

                          //ДОМОШНЯЯ РАБОТА:ВЫВЕСТИ СОТНИ

// let число = prompt("Введите трехзначное число")
// let единица = число%10          
// let a = (число/10)-единица*0.1  
// let десятки = a%10               
// let сотни = (a-десятки)/10
// let result = (сотни)
// alert(result)



// let num1 = +prompt("Введите имя")
// let num2 = +prompt("Введите фамилию")
// let num3 = +prompt("Введите отчество")

// let result1 = num1
// let result2 = num2
// let result3 = num3

// alert(`Имя: ${result1} Фамилия ${result2} Отчество ${result3}`)



// console.log(+true+"232gfgf")=1232gfgf
// cons       (""+3+10)=310

// let res = 5
// res *= 5
// res = res + 5
// res++


// console.log (res)

// <=
// >=
// == нестроое сравнение
// === строгое сравнение
// >
// <
// ! не



// ||- false
// &&
 
//  console.log ((100<10))||((10<100)) = true

//  if (10<100) {
//     console.log(1) }


// let a = +prompt ("Первое число")
// let b = +prompt ("Второе число")


// if       (a>b) { alert (`${a}`) }

// else if  (a<b) { alert (`${b}`) }

// else           { alert ("Числа равны") }

// let min = +prompt ("Введите число")

// if (min >= 0 && min <= 14) {
// 	alert('В первую четверть.');
// }
// if (min >= 15 && min <= 30) {
// 	alert('Во вторую четверть.');
// }
// if (min >= 31 && min <= 45) {
// 	alert('В третью четверть.');
// }
// if (min >= 46 && min <= 59) {
// 	alert('В четвертую четверть.');
// }


// let lan = prompt ('Введите язык (ru или en)')

// if       (lan = ru) {
// alert ("Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье")
// }

// else if  (lan = en) {
// alert("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday")
// }


// "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"
// "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"


// var lang = 'ru';
// var lang = 'en';
// if (lang == 'ru') {
// 	var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// }
// if (lang == 'en') {
// 	arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
// }                                                                          (изучть функцию скобок)
// alert(arr);

let lang = prompt ('Набери язык (ru; en)')
let arr = {
	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
alert(arr[lang]);
