document.addEventListener('DOMContentLoaded', function(){
    let nameOfFilms = [],
        ratingOfFilms = []; 

    let numberOfFilms = prompt("Один из последних просмотренных фильмов?","");

    nameOfFilms[0] = prompt("Один из последних просмотренных фильмов?","");
    ratingOfFilms[0] = prompt("На сколько оцените его?","");
    
    nameOfFilms[1] = prompt("Один из последних просмотренных фильмов?","");
    ratingOfFilms[1] = prompt("На сколько оцените его?","");
    
    // let movie = {};

    let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        ganres: [],
        privat: false
    };


    for(let i = 0; i < nameOfFilms.length; i++){
        personalMovieDB.movies[nameOfFilms[i]] = ratingOfFilms[i];
    };

    console.log(personalMovieDB);


    // console.log(numberOfFilms);



   





});