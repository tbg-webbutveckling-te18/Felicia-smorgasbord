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


/*
**********************
    MovieDB
**********************
*/

var movies = [ 
    {
        title: 'Deadpool',
        rating: 4,
        hasWatched: true
    },
    {
        title: 'The Mimic',
        rating: 3,
        hasWatched: false
    },
    {
        title: 'Spirited Away',
        rating: 5,
        hasWatched: true
    },
    {
        title: 'Nerve',
        rating: 2.5,
        hasWatched: true
    }
];

movies.forEach(function(movie) {
    if (movie.hasWatched === false) {
        console.log(`You have not watched ${movie.title} : Rated ${movie.rating} stars`)
    } else {
        console.log(`You have watched ${movie.title} : Rated ${movie.rating} stars`)
    }
})





var opc = document.querySelector("#outputCalc");
var countObj = {
   someText: `This is some text`,
   multiply: function(x, y) {
       return x * y;
   },
   divide: function(x, y) {
       return x / y;
   }
}

// opc.innerHTML = countObj.multiply(prompt("Tal 1"), prompt("Tal 2"));


// animal sound library

var outputSound = document.querySelector(".animalSound");
var btnAnimal = document.querySelectorAll(".btnAnimal");

var animalSound = {
    dog: function() {
        outputSound.innerHTML = 'Woof!';
    },
    cat: function() {
        outputSound.innerHTML = 'Meow!'
    },
    wolf: function() {
        outputSound.innerHTML = 'Awoo!';
    },
    cow: function() {
        outputSound.innerHTML = 'Mooo!'
    }
}

for(var i = 0; i < btnAnimal.length; i++) {
    btnAnimal[i].addEventListener('click', function() {
        switch (this.innerHTML) {
            case 'Dog': {
                animalSound.dog();
                break;
            }
            case 'Cat': {
                animalSound.cat();
                break;
            }
            case 'Wolf': {
                animalSound.wolf();
                break;
            }
            case 'Cow': {
                animalSound.cow();
                break;
            }
        }
    })
    btnAnimal[i].addEventListener('mouseover', function() {
        // this.style.backgroundColor = "Coral";
        this.classList.add("toggleBtnBG")
    })

    btnAnimal[i].addEventListener('mouseleave', function() {
        // this.style.backgroundColor = "";
        this.classList.remove("toggleBtnBG")
    })
}

var addFriend = document.querySelector(".friend");
var removeFriend = document.querySelector(".unfriend");

var users = {
    friends: ['Matthew', 'Sara', 'Hana'],
    addFriend: function(friend) {
        this.friends.push(friend);
    },
    removeFriend: function() {
        this.friends.pop();
    }
}

addFriend.addEventListener("click", function() {
    users.addFriend(prompt("Add new friend's name:"));
    console.log('New friend added.')
});

removeFriend.addEventListener("click", function() {
    users.removeFriend();
    console.log('One friend removed.')

});

var btnDoomed = document.querySelector(".doomed");

youAreDoomed = () => document.body.innerHTML = "lol";

btnDoomed.addEventListener("click", youAreDoomed);



var todo = document.querySelectorAll('.todo li');

for(var i = 0; i < todo.length; i++) {
    todo[i].addEventListener('mouseover', function() {
        this.classList.add('todo-hover');
    })

    todo[i].addEventListener('mouseleave', function() {
        this.classList.remove('todo-hover');
    })

    todo[i].addEventListener('click', function() {
        this.classList.toggle('todo-complete');
    })
} 