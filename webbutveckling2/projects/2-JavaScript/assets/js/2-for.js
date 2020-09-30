

for(var i = 0; i <= 10; i++) {
    document.writeln("Count is: " + i + "<br>");
}

document.writeln("--------------------<br>"); 

// increment by 2 (or more)
// count += 2. this is equal to count = count +2;
for(var count = 1; count < 13; count +=2 ) {
    document.writeln("Count is: " + count + "<br>");
}

document.writeln("--------------------<br>"); 

// loop through a list
var str = "Hello World!";
// document.writeln(str[0]);
for (var i = 0; i < str.length; i++) {
    document.writeln(str[i]);
}

document.writeln("<br>--------------------<br>"); 

// loop through an array
var codeArr = ['CSS', 'HTML', 'JS', 18, true];
var len = codeArr.length;
for (var i = 0; i < len; i++) {
    document.writeln('Language: ' + codeArr[i] + '<br>');
}

document.writeln("--------------------<br>");

// The modulo operator returns remainder of devision
// != means not equal to 
// !=== means not equal to AND CHECK IF SAME DATA TYPE
// == means equal to (12 === '12')
// === means equal to AND CHACK IF SAME DATA TYPE (12 === '12')
for (var i = 1; i <= 365; i++) {
    if (i % 2 == 0) {
        document.writeln('Even dates: ' + i + '<br>');
    }
}

document.writeln("--------------------<br>");

// 08

// h e l l o

// Exercise 3 
// Print all numbers between -10 and 19

for (var num = -10; num <= 19; num++) {
    document.writeln(num + '<br>');
}

document.writeln("--------------------<br>");

// Exercise 4
// Print even numbers between 10 and 40

for (var num = 10; num <= 40; i++) {
    if (num % 2 === 0) {
        document.writeln(num + '<br>');
    }
}

document.writeln("--------------------<br>");

// Exercise 5
// print odd between 300 and 333

document.writeln("--------------------<br>");

// Exercise 6
// even num divideable by 5 And 3 between 5 och 50

document.writeln("--------------------<br>");