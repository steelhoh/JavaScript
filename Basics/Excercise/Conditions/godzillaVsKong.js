function costCalc(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let statists = Number(arg2);
    let costPerStatist = Number(arg3);
    let decoration = budget * 0.10;

    if (statists > 150) {
        costPerStatist = costPerStatist * 0.9
    }
    cost = statists * costPerStatist + decoration
    if (budget >= cost) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget-cost).toFixed(2)} leva left.`)
    } else {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(cost-budget).toFixed(2)} leva more.`)
    }
}

costCalc(9587.88,
    222,
    55.68
    )