function fishingBoat(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let season = arg2;
    let numberOfFishermen = Number(arg3);
    let shipRentalCost = 0;
    let extraDiscount = 0;
    let discount = 0;

    if (numberOfFishermen % 2 === 0){
        extraDiscount = 0.95;
    }

    switch (season) {
        case "Spring": 
            shipRentalCost = 3000;

            break;
        case "Summer": 
            shipRentalCost = 4200;

            break;
        case "Autumn": 
            shipRentalCost = 4200;
            extraDiscount = 0;

            break;
        case "Winter": 
            shipRentalCost = 2600;
            break;
    }

    if (numberOfFishermen <= 6) {
        discount = 0.90;
    } else if (numberOfFishermen <= 11) {
        discount = 0.85;
    } else {
        discount = 0.75;
    }

    shipRentalCost *= discount;
    if (extraDiscount){
        shipRentalCost *= extraDiscount;
    }
    
    let result = Math.abs(budget - shipRentalCost);

    if (budget >= shipRentalCost) {
        console.log(`Yes! You have ${result.toFixed(2)} leva left.`)
    } else {console.log(`Not enough money! You need ${result.toFixed(2)} leva.`)}
}

//"Spring", "Summer", "Autumn", "Winter"
// Yes! You have {останалите пари} leva left.
// Not enough money! You need {сумата, която не достига} leva.

fishingBoat(2000,
    "Winter",
    13)