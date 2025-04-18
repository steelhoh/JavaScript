function cleaverLily(arg1, arg2, arg3){
    let age = Number(arg1);
    let washingMachinePrice = Number(arg2);
    let toyPrice = Number(arg3);
    let toyCount = 0
    let currentCash = 0
    let cashIncrease = 10

    for (let currentAge = 1; currentAge <= age; currentAge++){
        if (currentAge % 2 !== 0){
            toyCount++;
        } else {
            currentCash += cashIncrease
            cashIncrease += 10
            currentCash -= 1
        }

        
    }
    currentCash += toyCount * toyPrice
    let result = Math.abs(currentCash - washingMachinePrice)

    if (currentCash >= washingMachinePrice) {
        console.log(`Yes! ${result.toFixed(2)}`)
    } else {console.log(`No! ${result.toFixed(2)}`)}
}


cleaverLily(21,
    1570.98,
    3)