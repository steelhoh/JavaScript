function oscars(args){
    let authorName = args[0];
    let points = Number(args[1]);
    let numberOfJudges = Number(args[2]);
    let pointsNeeded = 1250.5;
    let nominated = false

    for (let i = 3; i < (3 + (numberOfJudges * 2)); i+=2){
        let currentJudgePoints = args[i].length;
        let currentJudgeMultiplier = Number(args[i + 1]);
        let pointsGiven = (currentJudgePoints * currentJudgeMultiplier) / 2;
        points += pointsGiven;
        if (points > pointsNeeded) {
            console.log(`Congratulations, ${authorName} got a nominee for leading role with ${points.toFixed(1)}!`);
            nominated = true
            break;
        }
    }
    
    if (!nominated) {
        let result = Math.abs(points - pointsNeeded)
        console.log(`Sorry, ${authorName} you need ${result.toFixed(1)} more!`)
    }
}


oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])