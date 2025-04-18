function newHouse(arg1, arg2, arg3){
    let flower = arg1;
    let flowerCount = Number(arg2);
    let budget = Number(arg3);

    let flowerCost = 0

    switch (flower) {
        case "Roses":
            flowerCost = flowerCount * 5
            if (flowerCount > 80){
                flowerCost *= 0.90
            }
            break;
        case "Dahlias":
            flowerCost = flowerCount * 3.80
            if (flowerCount > 90){
                flowerCost *= 0.85
            }
            break;
        case "Tulips":
            flowerCost = flowerCount * 2.80
            if (flowerCount > 80){
                flowerCost *= 0.85
            }
            break;
        case "Narcissus":
            flowerCost = flowerCount * 3
            if (flowerCount < 120){
                flowerCost *= 1.15
            }
            break;
        case "Gladiolus":
            flowerCost = flowerCount * 2.5
            if (flowerCount < 80){
                flowerCost *= 1.20
            }
            break;  
    }
    let result = Math.abs(budget - flowerCost)

    if (budget >= flowerCost) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flower} and ${result.toFixed(2)} leva left.`)
    } else console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`)

}

//  Hey, you have a great garden with {броя цвета} {вид цветя} and {останалата сума} leva left."
// "Not enough money, you need {нужната сума} leva more."

//"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"

newHouse("Tulips",
88,
260)