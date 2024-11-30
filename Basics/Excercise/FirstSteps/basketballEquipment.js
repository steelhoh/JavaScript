function costOfEquipment(num) {
    let yearSubscriptionCost = Number(num);
    let shoeCost = yearSubscriptionCost * 0.6;
    let shirtCost = shoeCost * 0.8;
    let ballCost = shirtCost / 4;
    let accessoriesCost = ballCost / 5;
    let totalCost = yearSubscriptionCost + shirtCost + shoeCost + ballCost + accessoriesCost
    console.log(totalCost)
}

costOfEquipment(365)