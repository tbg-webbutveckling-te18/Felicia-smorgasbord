

document.writeln('Twinkle, twinkle, little star <br>');
document.writeln('how i wonder what you are <br>');
document.writeln('up above the world so high <br>');
document.writeln('like a diamond in the sky <br>');

document.writeln('<br>');

document.writeln('Twinkle, twinkle, little star <br>');
document.writeln('how i wonder what you are <br>');
document.writeln('up above the world so high <br>');
document.writeln('like a diamond in the sky <br>');

document.writeln("<br>----------------------------------<br>" + ' <br>');

function twinkle() {
    document.writeln('Twinkle, twinkle, little star <br>');
    document.writeln('how i wonder what you are <br>');
    document.writeln('up above the world so high <br>');
    document.writeln('like a diamond in the sky <br>');

    document.writeln('<br>');
}

twinkle();
twinkle();

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
