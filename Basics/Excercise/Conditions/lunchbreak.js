function lunchbreak(arg1, arg2, arg3){
    let movieName = arg1;
    let movieLenght = Number(arg2);
    let breakTime = Number(arg3);

    let lunchTime = breakTime / 8;
    let relaxTime = breakTime / 4;
    let movieTime = breakTime - (lunchTime + relaxTime);

    let timeLeft = Math.ceil(Math.abs(movieTime - movieLenght))

    if (movieLenght <= movieTime){
        console.log(`You have enough time to watch ${movieName} and left with ${timeLeft} minutes free time.`)
    } else {console.log(`You don't have enough time to watch ${movieName}, you need ${timeLeft} more minutes.`)}
}
/*
"You have enough time to watch {име на сериал} and left with {останало време} minutes free time."
"You don't have enough time to watch {име на сериал}, you need {нужно време} more minutes."
*/

lunchbreak("Teen Wolf",
48,
60
)