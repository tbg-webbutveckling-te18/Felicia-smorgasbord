// greater than
var age = 18
if (age >= 18) {
    console.log('You can get your drivers licens.');
} else {
    console.log('you cannot get your drivers license');
}

// if something is equal too
var lesson = 'Web Development';
if (lesson == 'History') {
    console.log('We have: ' + lesson);
} else if (lesson == 'Web Development') {
    console.log('We have: ' + lesson);
} else {
    console.log('Spare time!');
}

var isSunny = false;
if (isSunny == true) {
    console.log('Put on some shorts today');
} else {
    console.log('Put on some warm clothes today');
}
// funktioner i ett objekt är en metod
// funktion = xxx()
// metod = yy.xxx()

// step 1
var d = new Date();

if (d.getUTCHours() < 18) {
    console.log("G'Day!");
} else {
    console.log('Evening!');
} 

// step 2
if (d.getUTCHours() < 10) {
    console.log('Good morning!');
} else if (d.getUTCHours() < 18) {
    console.log("G'Day!");
} else {
    console.log("Good Evnin'");
}

// step 3
if (d.getHours() < 10) {
    if (d.getMonth() > 9 || d.getMonth() < 2) {
        console.log('Go ahead and sleep like a bear!');
    } else {
        console.log('Good Morning!');
    }
} else if (d.getHours() < 18) {
    console.log("G'Day!");
} else {
    console.log("Good Evnin'");
}