function shopping(arg1, arg2, arg3, arg4){
    let budget = Number(arg1);
    let videoCards = Number(arg2);
    let processors = Number(arg3);
    let ram = Number(arg4);

    let videoCardCost = videoCards * 250;
    let processorCost = (videoCardCost * 0.35) * processors;
    let ramCost = (videoCardCost * 0.10) * ram;

    let totalCost = videoCardCost + ramCost + processorCost;

    if (videoCards > processors) {
        totalCost *= 0.85
    }
    let result = Math.abs(budget - totalCost);
    if (budget >= totalCost) {
        console.log(`You have ${result.toFixed(2)} leva left!`);
    } else {console.log(`Not enough money! You need ${result.toFixed(2)} leva more!`)}
}


shopping(920.45,
    3,
    1,
    1)
/*
"You have {остатъчен бюджет} leva left!"

"Not enough money! You need {нужна сума} leva more!"
*/