function cinema(arg1, arg2, arg3){
    let type = arg1;
    let rows = Number(arg2);
    let columns = Number(arg3);

    let seatCount = rows * columns
    let price = 0

    switch (type) {
        case "Premiere":
            price = seatCount * 12.00
            break;
        case "Normal":
            price = seatCount * 7.50
            break;
        case "Discount":
            price = seatCount * 5.00
            break;
    } 
    console.log(`${price.toFixed(2)} leva`)
}

cinema("Normal",
21,
13)