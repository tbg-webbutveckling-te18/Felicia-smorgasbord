// console.log("hello world");



//if else

//for-loops

//arrays

//objects


var input = document.querySelector(".changeName");
var Name = document.querySelector(".name");
input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        Name.innerHTML = input.value;
        input.value = "";
    }
})


var time = document.querySelector(".time");
var btnTime = document.querySelector(".uppdateTime");

// var month = d.getMonth();
// var day = d.getDate();
// var time = d.getTime();

btnTime.addEventListener('click', function() {
    var d = new Date();

    time.innerHTML = "Month: " + (d.getMonth() + 1) + "<br>Day: " + (d.getDate()) + "<br>Time: " + (d.toLocaleTimeString());
})




















// for (var i = 0; i <= 10; i++) {
//     document.writeln(i);
// }






//  if(button == this){
//      document.writeln("do this");
//  }else {
//      document.writeln("do thit");
//  }

// console.log("test");

// document.writeln("test");




// var menu = document.getElementsByClassName('navImg');

// menu.addEventListener('click', {
//     // 
// });