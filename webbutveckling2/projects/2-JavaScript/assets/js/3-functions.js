

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

function twinkle() {
    document.writeln('Twinkle, twinkle, little star <br>');
    document.writeln('how i wonder what you are <br>');
    document.writeln('up above the world so high <br>');
    document.writeln('like a diamond in the sky <br>');

    document.writeln('<br>');
}

// twinkle();
// twinkle();

// document.writeln('<br>' + twinkle);

/*
******************************************************
                      ARGUMENTS                       
******************************************************
*/

document.writeln("----------------------------------<br>" + ' <br>');

function square(num) {
    document.writeln(num * num);
}

square(10);
square(5);
square('h'); // not a number

/*
******************************************************
                        RETURN                       
******************************************************
*/

document.writeln(' <br> ' + '<br>----------------------------------<br>' + ' <br>');

function area(width, height) {
    return width * height;
}

document.writeln('The area is: ' + area(5, 10));

var res = area(6, 9);

document.writeln(res);

document.writeln(' <br> ' + '<br>----------------------------------<br>' + ' <br>');

function quadrupleMe(x) {
    return 4 * x;
}

var myNum = quadrupleMe(4);

// Select an element
var btnNum = document.getElementById('myNum');

// Manupilate an element
btnNum.innerHTML = 'My <strong>favorite</strong>  number is; ' + myNum;



// Funktion för att göra första bokstave stor
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
     
}

var city = 'stockholm';
var capital = capitalize(city);
document.writeln('The Capital of Sweden is: ' + capital);

document.writeln(' <br> ' + '<br>----------------------------------<br>' + ' <br>');

function isEven(x) {
    if (num % 2 === 0) {
        return document.writeln('True')
    }
    else {
        return document.writeln('False')
    }
}

var num = 4;
isEven(num);

document.writeln(' <br> ' + '<br>----------------------------------<br>' + ' <br>');

function kebabToSnake(x) {
    return document.writeln(x.replaceAll('-', '_'));
}

var word = 'Hello-there-friend';
kebabToSnake(word);

document.writeln(' <br> ' + '<br>----------------------------------<br>' + ' <br>');

var p = document.getElementById('scopes'); // global scope

// declare
function localScope() {
    var localVar = 31;
    p.innerHTML = localVar;
}

// call
localScope();

// document.writeln(' <br> ' + '<br>----------------------------------<br>' + ' <br>');

var globalVar = 'This is a global var';

p.innerHTML = globalVar;
p.style.fontSize = '20px';
p.style.color = 'lightGreen';

function changeGlobalVar() {
    globalVar = 'Hah! I got a new value now!';
    p.innerHTML = globalVar;
}

changeGlobalVar();

function tricky() {
    var globalVar = 'Am i a local variable?';
    p.innerHTML = globalVar;
}

tricky();
p.innerHTML = globalVar;

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