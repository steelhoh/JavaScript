
function moneyCalculator(arg1, arg2, arg3, arg4) {
    let penCount = Number(arg1)
    let markerCount = Number(arg2)
    let cleaningAgentLeters = Number(arg3)
    let discount = Number(arg4)
    let moneyNeeded = 0

    moneyNeeded += (penCount * 5.80) + (markerCount * 7.20) + (cleaningAgentLeters * 1.2)
    moneyNeeded -= moneyNeeded * discount / 100
    
    console.log(moneyNeeded)
}


moneyCalculator(4,
    2,
    5,
    13  )