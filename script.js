document.addEventListener('DOMContentLoaded', function(){
    let nameOfFilms = [],
        ratingOfFilms = [],
        questName =  "Один из последних просмотренных фильмов?",
        questRating = "На сколько оцените его?",
        i,
        ganre = [],
        numberOfFilms;


    function start(){
        numberOfFilms = +prompt("Сколько просмотренных фильмов?","");
        while(!numberOfFilms || isNaN(numberOfFilms)){
            numberOfFilms = +prompt("Сколько просмотренных фильмов?","");
        }
    }
    
    start();

    let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        ganres: [],
        privat: false
    };

    
    
function rememberMyFilms(){
    for(i = 0; i < 2; i++){
        nameOfFilms[i] = prompt(questName,"");
        while (!nameOfFilms[i] || nameOfFilms[i].length > 50){
            nameOfFilms[i] = prompt(questName,"");
        }
        ratingOfFilms[i] = prompt(questRating,"");
        while (!ratingOfFilms[i] || ratingOfFilms[i].length > 50){
            ratingOfFilms[i] = prompt(questRating,"");
        }         
        personalMovieDB.movies[nameOfFilms[i]] = ratingOfFilms[i];
    }
}

// rememberMyFilms();

function detectMyLevel(){
    if (personalMovieDB.count < 10){
        alert('плохой киноман');
    }
    else{
        alert('хороший киноман');
    }
}
// detectMyLevel();

function writeYourGanres(){
    for(i=0;i<3;i++){
        ganre = prompt(`Ваш любимый жанр под номером ${i+1} ?`,"");
        while (!ganre || ganre == null){
            ganre = prompt(`Ваш любимый жанр под номером ${i+1} ?`,"");
        }        
        personalMovieDB.ganres[i] = ganre;
    }
}

writeYourGanres();

function showMyBD(private){
    if(private == false){
        console.log('private = false, because : ');
        console.log(personalMovieDB);
    }else{
        console.log('private = false, because : BIBA22 ');
    }  
}

showMyBD(personalMovieDB.privat);

});