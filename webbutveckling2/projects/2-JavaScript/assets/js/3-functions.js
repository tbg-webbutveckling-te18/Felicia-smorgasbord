 

// document.writeln('Twinkle, twinkle, little star <br>');
// document.writeln('how i wonder what you are <br>');
// document.writeln('up above the world so high <br>');
// document.writeln('like a diamond in the sky <br>');

// document.writeln('<br>');

// document.writeln('Twinkle, twinkle, little star <br>');
// document.writeln('how i wonder what you are <br>');
// document.writeln('up above the world so high <br>');
// document.writeln('like a diamond in the sky <br>');

// document.writeln("<br>----------------------------------<br>" + ' <br>');

// function twinkle() {
//     document.writeln('Twinkle, twinkle, little star <br>');
//     document.writeln('how i wonder what you are <br>');
//     document.writeln('up above the world so high <br>');
//     document.writeln('like a diamond in the sky <br>');

//     document.writeln('<br>');
// }

// // twinkle();
// // twinkle();

// // document.writeln('<br>' + twinkle);

// /*
// ******************************************************
//                       ARGUMENTS                       
// ******************************************************
// */

// document.writeln("----------------------------------<br>" + ' <br>');

// function square(num) {
//     document.writeln(num * num);
// }

// square(10);
// square(5);
// square('h'); // not a number

// /*
// ******************************************************
//                         RETURN                       
// ******************************************************
// */

// document.writeln(' <br> ' + '<br>----------------------------------<br>' + ' <br>');

// function area(width, height) {
//     return width * height;
// }

// document.writeln('The area is: ' + area(5, 10));

// var res = area(6, 9);

// document.writeln(res);

// document.writeln(' <br> ' + '<br>----------------------------------<br>' + ' <br>');

// function quadrupleMe(x) {
//     return 4 * x;
// }

// var myNum = quadrupleMe(4);

// // Select an element
// var btnNum = document.getElementById('myNum');

// // Manupilate an element
// btnNum.innerHTML = 'My <strong>favorite</strong>  number is; ' + myNum;



// Funktion för att göra första bokstave stor
// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
     
// }

// var city = 'stockholm';
// var capital = capitalize(city);
// document.writeln('The Capital of Sweden is: ' + capital);

// document.writeln(' <br> ' + '<br>----------------------------------<br>' + ' <br>');

// function isEven(x) {
//     if (num % 2 === 0) {
//         return document.writeln('True')
//     }
//     else {
//         return document.writeln('False')
//     }
// }

// var num = 4;
// isEven(num);

// document.writeln(' <br> ' + '<br>----------------------------------<br>' + ' <br>');

// function kebabToSnake(x) {
//     return document.writeln(x.replaceAll('-', '_'));
// }

// var word = 'Hello-there-friend';
// kebabToSnake(word);

// document.writeln(' <br> ' + '<br>----------------------------------<br>' + ' <br>');

// var p = document.getElementById('scopes'); // global scope

// // declare
// function localScope() {
//     var localVar = 31;
//     p.innerHTML = localVar;
// }

// // call
// localScope();

// // document.writeln(' <br> ' + '<br>----------------------------------<br>' + ' <br>');

// var globalVar = 'This is a global var';

// p.innerHTML = globalVar;
// p.style.fontSize = '20px';
// p.style.color = 'lightGreen';

// function changeGlobalVar() {
//     globalVar = 'Hah! I got a new value now!';
//     p.innerHTML = globalVar;
// }

// changeGlobalVar();

// function tricky() {
//     var globalVar = 'Am i a local variable?';
//     p.innerHTML = globalVar;
// }

// tricky();
// p.innerHTML = globalVar;

// document.writeln(' <br> ' + '<br>----------------------------------<br>' + ' <br>');

function myTimer() {
    var d = new Date();
    var clock = document.getElementById('clock');
    clock.innerHTML = d.toLocaleTimeString();
}

myTimer();

var seconds = setInterval(myTimer, 1000);
var btnStopTime = document.getElementsByClassName('stopTime')[0];
var doomsStr = document.getElementById('doomsMessage');

btnStopTime.addEventListener('click', function() {
    clearInterval(seconds);
    doomsStr.innerHTML = 'Hahah! time is stoped forever!';
    doomsStr.style.transition = 'all .4s ease';
    doomsStr.style.fontSize = '60px';
    doomsStr.style.color = 'crimson';
});

// document.writeln(' <br> ' + '<br>----------------------------------<br>' + ' <br>');

var output = document.getElementById('tellFortune');
var btnFortune = document.getElementsByTagName('button')[1];

function tellFortune(job, place, partner, kids) {
    output.innerHTML = `You will be a(n) ${job} in ${place} and married to ${partner} with ${kids} kid(s)`;
    // var str = 'You will be a/an ' + x + ' in ' + y + ', and married to ' + z + ' with' + z + ' kidz.';
}

// tellFortune('Game Designer', 'New Yourk', 'Mei', 1);

var jobArr = ['Game Designer', 'Web Developer', 'Homeless', 'YouTuber', 'President', 'Musican', 'Fashion Designer', 'Postman', 'Teacher', 'Factory Worker', 'Baker', 'Waitress', 'Chef', 'Firefighter', 'Doctor', 'Scientist', 'Therapist', 'Author', 'Lifeguard', ''];
var placeArr = ['Tokyo', 'Moscow', 'New York', 'Manchester', 'Dublin', 'Rome', 'London', 'Buenos Aires', 'Venice', 'Paris'];
var partnerArr = ['Mei', 'Mark', 'Johnny', 'Daichi', 'Igor', 'Frank', 'Lisa', 'Ellie', 'Van', 'Alice', 'David', 'Steven', 'Joey', 'Jaime'];
var kidsArr = [0, 1, 2, 3, 4, 5, 8,];

btnFortune.addEventListener('click', function() {
    var randomJob = jobArr[Math.floor(Math.random() * jobArr.length)];
    var randomPlace = placeArr[Math.floor(Math.random() * placeArr.length)];
    var randomPartner = partnerArr[Math.floor(Math.random() * partnerArr.length)];
    var randomKids = kidsArr[Math.floor(Math.random() * kidsArr.length)];

    tellFortune(randomJob, randomPlace, randomPartner, randomKids);
});

document.writeln(' <br> ' + '<br>----------------------------------<br>' + ' <br>');

function calculateDogAge(puppyAge, human) {
        var dogAge = puppyAge * 7;
        var humanAge = Math.round(human / 7);
        document.writeln(`Your puppy is ${dogAge} years old in dog years and you, human, is ${humanAge} years old in dog years.`);
}

calculateDogAge(2, 18); 

document.writeln(' <br> ' + '<br>----------------------------------<br>' + ' <br>');


var yourCurrentAge = 18;
var numberOfPizza = 3;

function calculateSupply(yourCurrentAge, numberOfPizza) {
        var yearsLeftToLive = 100 - yourCurrentAge;
        var pizzaYouNeed = Math.rounsd(yearsLeftToLive * 365 * numberOfPizza);
        document.writeln(`You have ${yearsLeftToLive} years left to live and need ${pizzaYouNeed} pizzas to last you for the rest of your life.`);
}

calculateSupply(yourCurrentAge, numberOfPizza);