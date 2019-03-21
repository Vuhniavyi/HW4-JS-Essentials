// EX1

//var userName = prompt('Кто пришёл?', '');

//if (userName == 'Админ') {

 // var pass = prompt('Пароль?', '');

 // if (pass == 'Чёрный Властелин') {
  //  alert( 'Добро пожаловать!' );
  //} else if (pass == null) { // (*)
    //alert( 'Вход отменён' );
  //} else {
    //alert( 'Пароль неверен' );
  //}

//} else if (userName == null) { // (**)
  //alert( 'Вход отменён' );

//} else {

  //alert( 'Я вас не знаю' );

//}


// EX2
//let name = 'Maks';
//if (name === 'Maks') {
//	console.log ("Привет мне!");
//} else {
//	console.log ("Привет незнакомец!");
//}


// EX3
//for (var x = 3; x < 10000; x *= 3) {
//	console.log (x);
//} 


//let x = 3;
//while (x < 10000) {
//	console.log (x);
//	x *= 3;
//}


// EX4
//let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
//i = 0;
//while (i < animals.length) {
//	console.log (animals.length + " - " + "гарна тварина");
//	i++;
//}

//let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
//for (let i = 0; i<animals.length; i++) {
//	console.log (animals[i] + " - " + "гарна тварина");
//}

// EX5
//let drawCats = function (howManyTimes) {
//	for (let i = 0; i < howManyTimes; i++) {
//		console.log(i + " #");
//	}
//}
//drawCats(100)

// EX6
//var randomWords = ["Планета", "Червяк", "Цветок", "Компьютер"];

//pickRandomWord = function (words) {
//	return words [Math.floor(Math.random() * words.length)];
//};
//pickRandomWord(randomWords);
//pickRandomWord(["Чарли", "Радж", "Николь", "Кейт", "Сэнди"]);

// EX7 Генератор случайных дразнилок method 1
//var randomBodyParts = ["глаз", "нос", "череп"];
//var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
//var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// Выбор случайной части тела из массива randomBodyParts:
//var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// Выбор случайного прилагательного из массива randomAdjectives:
//var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// Выбор случайного слова из массива randomWords:
//var randomWord = randomWords[Math.floor(Math.random() * 5)];
// Соединяем случайные строки в предложение:
//var randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + "!!!";
//console.log(randomInsult);


// EX7 Генератор случайных дразнилок method 2
//var pickRandomWord = function (words) {
//return words[Math.floor(Math.random() * words.length)];
//};
//var randomBodyParts = ["глаз", "нос", "череп"];
//var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
//var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// Соединяем случайные строки в предложение:
//var randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
//console.log(randomString);

// EX8
//var add = function (a, b) {
//  return a + b;
//};
//var multiply = function (a, b) {
// return a * b;
//};
//add(multiply(36325, 9824), 777);

// EX9
//var areArraysSame = function (arr1, arr2) {
  //if (arr1.length !== arr2.length) {
  // return false;
  //}
  //for (var i = 0; i < arr1.length; i++) {
   // if (arr1[i] !== arr2[i]) {
   //   return false;
   // }
  //}
 // return true;
//};
//console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
//console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
//console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));





