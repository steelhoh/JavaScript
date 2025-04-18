function deersOfSanta(arg1, arg2, arg3, arg4, arg5){
    let numberOfDays = Number(arg1);
    let foodLeftInKg = Number(arg2);
    let deerOne = Number(arg3);
    let deerTwo = Number(arg4);
    let deerThree = Number(arg5);

    let foodConsumptionRate = numberOfDays * (deerOne + deerTwo + deerThree)
    let result = Math.abs(foodLeftInKg - foodConsumptionRate)

    if (foodLeftInKg >= foodConsumptionRate) {
        console.log(`${Math.floor(result)} kilos of food left.`)
    } else {console.log(`${Math.ceil(result)} more kilos of food are needed.`)}

}

/* 
“{килограми, които остават} kilos of food left.”
Резултатът трябва да е закръглен към ПО-МАЛКОТО цяло число
Ако оставената храна НЕ Е достатъчна:
“{килограми, които не  недостигат} more kilos of food are needed.”
Резултатът трябва да е закръглен към ПО-ГОЛЯМОТО цяло число
*/

deersOfSanta(2,
    10,
    1,
    1,
    2,
    )