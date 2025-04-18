function workout(input){
    let workoutDays = Number(input[0])
    let kilometersDayOne = Number(input[1])
    let targetKms = 1000
    let kilometerRan = kilometersDayOne
    let kilometersLastDay = kilometersDayOne

    for (let currentDay=2; currentDay < workoutDays + 2; currentDay++){
        kilometersLastDay = kilometersLastDay + ((Number(input[currentDay])/ 100) * kilometersLastDay)
        kilometerRan += kilometersLastDay
    }

    let result = Math.abs(kilometerRan - targetKms)

    if (kilometerRan >= targetKms){
        console.log(`You've done a great job running ${Math.ceil(result)} more kilometers!`)
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(result)} more kilometers`)
    }
}

/*
You've done a great job running {избяганите километри повече от 1000} more   kilometers!"
 Ако пробяганите километри са < 1 000 км – да се отпечата съобщение:
"Sorry Mrs. Ivanova, you need to run {недостигащите километри} more kilometers"
*/

workout(["5",
    "30",
    "10",
    "15",
    "20",
    "5",
    "12"])
    
    
    