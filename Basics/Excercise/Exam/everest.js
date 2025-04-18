function everest(args){
    let currentHeight = 5364;
    let target = 8848;
    let dayCounter = 1;
    let hasReachedTarget = false;
    let index = 0
    let resting = args[index];

    while (resting !== "END") {
        if (resting === "Yes"){
            dayCounter++;
            if (dayCounter > 5) {
                break;
            }
        }
        resting = args[index];
        if (resting === "END"){
            break;
        }

        let meetersClimbed = Number(args[index + 1]);
        index += 2;

        currentHeight += meetersClimbed
        if (currentHeight >= target){
            hasReachedTarget = true
            break;
        }

    }

    if (currentHeight >= target) {
        hasReachedTarget = true
    }
    if (hasReachedTarget){
        console.log(`Goal reached for ${dayCounter} days!`)
    } else {
        console.log("Failed!")
        console.log(currentHeight)
    }

}



everest(["Yes",
    "700",
    "END"])
    
    
    