

var person = ['Sid', 35, 'EagleSheildBay'];

document.writeln(person[2]);

var personFriends = ['Bob', 'Mei', 'Alice', 'Naoko'];

var user = {
    name: 'Daichi',
    age: 35,
    city: 'Tokyo',
    friends: ['Bob', 'Mei', 'Alice', 'Naoko'],
    isEvil: false,
    shoutout: function() {
        alert(`Sup.`);
    }
};

document.writeln(`My name is ${user.name} and I am ${user.age} and I live in ${user.city}`);
user.shoutout();