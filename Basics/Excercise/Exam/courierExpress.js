function courierExpress(arg1, arg2, arg3){
    let packageWeight = Number(arg1);
    let deliveryType = arg2;
    let distanceInKm = Number(arg3);
    let totalPrice = 0;
    let pricePerKm = 0;
    let premiumMultiplier = 0;

    if (packageWeight < 1){
        pricePerKm = 0.03;
        premiumMultiplier = pricePerKm * 0.8
    } else if (packageWeight < 10){
        pricePerKm = 0.05;
        premiumMultiplier = pricePerKm * 0.4
    } else if (packageWeight < 40){
        pricePerKm = 0.10;
        premiumMultiplier = pricePerKm * 0.05
    } else if (packageWeight < 90){
        pricePerKm = 0.15;
        premiumMultiplier = pricePerKm * 0.02
    } else if (packageWeight < 150){
        pricePerKm = 0.20;
        premiumMultiplier = pricePerKm * 0.01
    }

    totalPrice = distanceInKm * pricePerKm

    switch (deliveryType) {
        case "standard": 
        console.log(`The delivery of your shipment with weight of ${packageWeight.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`)
        break;

        case "express":
        let extraCostPerKg = packageWeight * premiumMultiplier
        let totalExtraCost = extraCostPerKg * distanceInKm
        totalPrice += totalExtraCost
        
        console.log(`The delivery of your shipment with weight of ${packageWeight.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`)
        break;
    }
}
courierExpress(87,
    "express",
    130,   
    )