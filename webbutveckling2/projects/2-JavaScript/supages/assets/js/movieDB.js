/*
***************************************
Create your own code - movieDB
***************************************
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
       document.writeln(`You have not watched ${movie.title} : Rated ${movie.rating} stars`)
       document.writeln('<br>')
   } else {
       document.writeln(`You have watched ${movie.title} : Rated ${movie.rating} stars`)
       document.writeln('<br>')
   }
})

// Create an array of movie objects
// Each movie should have a title, rating and hasWatched properties
// Iterate through the array with a forEach and print out something that looks like:
/* 
   - You have seen "Frozen" - 4.5 stars
   - You have not seen "Django" - 5 stars
   - You have seen "Vaiana" - 5 stars
   - You have not seen "Shawshank Redemption" - 5 stars
*/