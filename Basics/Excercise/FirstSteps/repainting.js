function repainting(arg1, arg2, arg3, arg4) {
    let plasticNeeded = Number(arg1);
    let paintNeeded = Number(arg2);
    let paintTinnerNeeded = Number(arg3);
    let hoursNeeded = Number(arg4);
    let materialCost = ((plasticNeeded + 2) * 1.50) + ((paintNeeded * 1.1) * 14.50) + (paintTinnerNeeded * 5.00) + 0.40
    let workCost = materialCost * 0.3 * hoursNeeded
    let expenses = materialCost + workCost

    console.log(expenses)
}
