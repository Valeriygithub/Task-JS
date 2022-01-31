/* 1) Чистый JS:  написать функцию форматирования для суммы, пример:  "3123123.00" -> "3 123 123.00"*/

let number = '3123123.00';
let number2 = '3123123123.00';

function format(a) {
	let formatNumFerst = a.replace(/\d/, "$& ");
	let formNum = formatNumFerst.replace(/\d{3}|\d{3}\./g, ' $&');
	let result = formNum.replace(/\s/, '');
	return result;
}
format(number);
console.log(format(number));
console.log(format(number2));

/* 2) Чистый JS: сделать маску ввода на  инпуте например для суммы с копейками *.00 
(если отличается от маски то не вводится ничего) Вместо  * любое количество цифр,
 там где 00 (это две любые цифры) */

let body = document.querySelector('body');
let form = document.createElement('form');
body.append(form);

let input = document.createElement('input');
input.type = 'text';
input.className = 'my-input';
form.append(input);

let inputElement = document.querySelector('.my-input');
inputElement.placeholder = '*.00';

let blocлLettersSym = /[^\d\.]/gi;
let banPoints = /^\.|\.{2}/;
let resultInput = /(\.\d{3}).*|\.\d+\./; // 

inputElement.oninput = function () {
	this.value = this.value.replace(blocлLettersSym, '');
	this.value = this.value.replace(banPoints, '');
	this.value = this.value.replace(resultInput, '');
}