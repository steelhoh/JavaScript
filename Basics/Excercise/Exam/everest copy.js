function everest(args) {
    let currentHeight = 5364;
    const target = 8848;
    let dayCounter = 1;
    let hasReachedTarget = false;
    let index = 0;

    while (index < args.length) {
        let resting = args[index];
        if (resting === "END") {
            break;
        }

        if (resting === "Yes") {
            dayCounter++;
            if (dayCounter > 5) {
                break;
            }
        }

        let metersClimbed = Number(args[index + 1]);
        currentHeight += metersClimbed;
        index += 2;

        if (currentHeight >= target) {
            hasReachedTarget = true;
            break;
        }
    }

    if (hasReachedTarget) {
        console.log(`Goal reached for ${dayCounter} days!`);
    } else {
        console.log("Failed!");
        console.log(currentHeight);
    }
}