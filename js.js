let str = "какая-то строка"
let num = 1234
let bool = true
let notValue = null
let und = undefined
let app = []

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

let число = prompt("Введите трехзначное число")
let единица = число%10          
let a = (число/10)-единица*0.1  
let десятки = a%10               
let сотни = (a-десятки)/10
let result = (сотни)
alert(result)
