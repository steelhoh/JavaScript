function timeCalculator(arg1, arg2) {
    let hours = Number(arg1);
    let minutes = Number(arg2);
    let bonusTime = 15
    let newTime = ""

    minutes += bonusTime

    if (minutes >= 60) {
        hours += 1
        minutes -=60
        if (hours > 23) {
            hours = 0
        }
    }
    if (minutes < 10) {
        newTime = `${hours}:0${minutes}`
    } else {newTime = `${hours}:${minutes}`}
    
    console.log(newTime)
}

timeCalculator(12,
    49)