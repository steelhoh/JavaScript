function bonusPointsCalc(num) {
    let number = Number(num);
    let bonusPoints = 0
    if (number <= 100) {
        bonusPoints += 5
    } else if (number <= 1000) {
        bonusPoints += number * 0.2
    } else {
        bonusPoints += number * 0.1
    }
    if (number % 2 === 0) {
        bonusPoints += 1
    } else if (number % 10 === 5) {
        bonusPoints += 2
    }

    console.log(bonusPoints)
    console.log(number + bonusPoints)
}

bonusPointsCalc(15875)