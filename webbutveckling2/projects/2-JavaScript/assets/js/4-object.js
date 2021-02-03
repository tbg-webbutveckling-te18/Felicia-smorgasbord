var person = ['Sid', 35, 'EagleSheildBay'];

document.writeln('<br>');
document.writeln('<br>');
document.writeln('<br>');

// document.writeln(person[2]);


var personFriends = ['Bob', 'Mei', 'Alice', 'Naoko'];

var user = {
    name: 'Daichi',
    age: 35,
    city: 'Tokyo',
    friends: ['Bob', 'Mei', 'Alice', 'Naoko'],
    isEvil: false,
    shoutout: function() {
        alert(`Sup.`); 
    },
    ageUp: function() {
        return this.age++;
    }
};

var ageUpBtn = document.querySelector(".ageUp");
ageUpBtn,addEventListener('click', function() {
    firstOutput.innerHTML = `My name is ${user.name}. I am ${user.ageUp()} years old and I live in ${user.city}<br>`;
})

var firstOutput = document.getElementById("userInfo");
firstOutput.innerHTML += `My name is ${user.name}. I am ${user.age} years old and I live in ${user.city}<br>`;
// user.shoutout();

// for(var i = 0; i < user.friends.length; i++) {
//     console.log(user.friends[i]);
// }

user.friends.forEach(function(friend) {
    console.log(friend)
})

// console.log(user.age)
// user.age++;
// console.log(user.age)

var posts = [
    {
        author: "Yukio",
        comment: "Cats the movie sucks!",
    },
    {
        author: "Hachi",
        comment: "Fuck you!"
    },
    {
        author: "Kamala",
        comment: "Hey bud, there is no need for such foul language."
    }
]

// html ref
var postOutput = document.querySelector(".posts");

posts.forEach(function(post) {
    postOutput.innerHTML += `Author: ${post.author} <br> Commented: ${post.comment}<br> <br>`;
})

var input = document.querySelector(".updateCity");
var city = document.querySelector(".city");
input.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') {
        city.innerHTML = input.value;
        // alert('sdfghj')
    }
})

var toggle = document.querySelector(".btnToggle");
toggle.addEventListener('click', function () {
    // classList.add 
    // classList.remove
    city.classList.toggle("changeText");
    // prompt("OK?"); 
})