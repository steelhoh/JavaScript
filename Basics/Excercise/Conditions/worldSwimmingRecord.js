function wordSwimmingRecord(arg1, arg2, arg3) {
    let worldRecord = Number(arg1);
    let distanceMeters = Number(arg2);
    let metersPerSecond = Number(arg3);

    let timeSwimming = distanceMeters * metersPerSecond;
    let delay = (Math.floor(distanceMeters / 15)) * 12.5;
    let totalTime = timeSwimming + delay;

    if (totalTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {let timeNeeded = Math.abs(totalTime - worldRecord);
        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`)
    }
}

wordSwimmingRecord(55555.67,
    3017,
    5.03
)