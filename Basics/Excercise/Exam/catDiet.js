function catDiet(arg1, arg2, arg3, arg4, arg5){
    let percentageFats = Number(arg1);
    let percentageProtein = Number(arg2);
    let percentageFibers = Number(arg3);
    let totalCalories = Number(arg4);
    let percentageWater = Number(arg5);

    let totalFats = (totalCalories * (percentageFats / 100)) / 9
    let totalProtein = (totalCalories * (percentageProtein / 100)) / 4
    let totalFibres = (totalCalories * (percentageFibers / 100)) / 4

    let totalFoodWeight = totalFats + totalProtein + totalFibres
    let caloriesPer1GramOfFood = totalCalories / totalFoodWeight

    let caloriesPer1GramOfFoodWithoutWater = caloriesPer1GramOfFood * ((100 - percentageWater) / 100)
    console.log(caloriesPer1GramOfFoodWithoutWater.toFixed(4))

}

catDiet(40,
    40,
    20,
    3000,
    40,
    
    )