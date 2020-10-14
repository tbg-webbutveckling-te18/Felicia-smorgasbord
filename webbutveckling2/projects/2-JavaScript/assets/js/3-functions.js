

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

document.writeln("<br>----------------------------------<br>" + ' <br>');

function square(num) {
    document.writeln(num * num);
}

square(10);
square(5);
square('h'); // not a number

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
document.writeln(myNum);

document.writeln(' <br> ' + '<br>----------------------------------<br>' + ' <br>');
