 

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

// // The modulo operator returns remainder of devision
// // != means not equal to 
// // !=== means not equal to AND CHECK IF SAME DATA TYPE
// // == means equal to (12 === '12')
// // === means equal to AND CHACK IF SAME DATA TYPE (12 === '12')
// for (var i = 1; i <= 365; i++) {
//     if (i % 2 === 0) {
//         document.writeln('Even dates: ' + i + '<br>');
//     }
// }

document.writeln('Here rests the one and only, even of dates.<br>')

document.writeln("--------------------<br>");

// 08

// h e l l o

// Exercise 3 
// Print all numbers between -10 and 19

for (var num = -10; num <= 19; num++) {
    document.writeln(num);
}

document.writeln("<br>--------------------<br>");

// Exercise 4
// Print even numbers between 10 and 40

for (var num = 10; num <= 40; num++) {
    if (num % 2 === 0) {
        document.writeln(num);
    }
}

document.writeln("<br>--------------------<br>");

// Exercise 5
// print odd between 300 and 333

for (var num = 300; num <= 333; num++) {
    if (num % 2 !== 0) {
        document.writeln(num);
    }
}

document.writeln("<br>--------------------<br>");

// Exercise 6
// even num divideable by 5 And 3 between 5 och 50

for (var num = 5; num <= 50; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        document.writeln(num)
    }
}

document.writeln("<br>--------------------<br>");

// Exercise 7 : multiplication table
// Write a for loop that iterates from 0 to 10 
// for each iteration of the loop it will multiply
// the number by 9 and log the result

var multi = 9;
for (var num = 0; num <= 10; num++) {
    var result = num * multi;
    document.writeln(num + ' * ' + multi + ' = ' + result + '<br>');
}

document.writeln("--------------------<br>");

// NESTED FOR LOOPS
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 

for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        document.writeln('*');
    }
    document.writeln('<br>');
}

document.writeln("--------------------<br>");

// var multi = 9;
// for (var num = 0; num <= 10; num++) {
//     var result = num * multi;
//     document.writeln(num + ' * ' + multi + ' = ' + result + '<br>');
// }


for (var i = 0; i <= 10; i++) {
    for (var j = 0; j <= 10; j++) {
        var res = i * j;
        document.writeln(i + ' * ' + j + ' = ' + res + '<br>');
    }
    document.writeln('<br>');
}

document.writeln("--------------------<br>");

// var codeArr = ['CSS', 'HTML', 'JS', 18, true];
// var len = codeArr.length;
// for (var i = 0; i < len; i++) {
//     document.writeln('Language: ' + codeArr[i] + '<br>');
// }

var codeArr = ['Cyan', 'Magenta', 'Indian Yellow', 'Emerald Green']; 
var len = codeArr.length;
for (var i = 0; i < len; i++) {
    j = i + 1
    document.writeln('My #' + j + ' choise is ' + codeArr[i] + '<br>');
}

document.writeln("--------------------<br>");

var codeArr = ['Cyan', 'Magenta', 'Indian Yellow', 'Emerald Green', 'Pthalo Blue', 'Sap Green', 'Ultramarine Blue', 'Raw Sienna', 'Burnt Sienna', 'Raw Umber', 'Burnt Umber', 'Titanium White']; 
var len = codeArr.length;
for (var i = 0; i < len; i++) {
    j = i + 1
    if (j === 1) {
        document.writeln('My ' + j + 'st choice is ' + codeArr[i]);
    } 
    else if (j === 2) {
        document.writeln('My ' + j + 'nd choice is ' + codeArr[i]);
    } 
    else if (j === 3) {
        document.writeln('My ' + j + 'rd choice is ' + codeArr[i]);
    } 
    else {
        document.writeln('My ' + j + 'th choice is ' + codeArr[i]);
    }
    document.writeln('<br>');
}

document.writeln("--------------------<br>");

