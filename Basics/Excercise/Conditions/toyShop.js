function toyShop(arg1, arg2, arg3, arg4, arg5, arg6) {
    let tripCopst = Number(arg1);
    let puzzleCount = Number(arg2);
    let dollCount = Number(arg3);
    let bearCount = Number(arg4);
    let minionCount = Number(arg5);
    let truckCount = Number(arg6);

    let orderPrice = puzzleCount * 2.60 + dollCount * 3 + bearCount * 4.10 + minionCount * 8.20 + truckCount * 2

    let toyCount = puzzleCount + dollCount + bearCount + minionCount + truckCount

    if (toyCount >= 50) {
        orderPrice *= 0.75
    }
    orderPrice *= 0.90

    if (orderPrice >= tripCopst) {
        console.log(`Yes! ${(orderPrice - tripCopst).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(tripCopst - orderPrice).toFixed(2)} lv needed.`)
    }

}

toyShop(320,
    8,
    2,
    5,
    5,
    1)