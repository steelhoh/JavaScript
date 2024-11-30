function orderCost(arg1, arg2, arg3) {
    let chickenMenu = Number(arg1);
    let fishMenu    = Number(arg2);
    let veganMenu   = Number(arg3);
    let menuCost = chickenMenu * 10.35 + fishMenu * 12.40 + veganMenu * 8.15
    let desertCost = menuCost * 0.2
    console.log(menuCost + desertCost + 2.5)
}

orderCost(9,
    2,
    6)