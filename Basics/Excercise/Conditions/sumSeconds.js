function sumSeconds(arg1, arg2, arg3) {
    let firstTime = Number(arg1);
    let secondTime = Number(arg2);
    let thirdTime = Number(arg3);
    let totalTime = firstTime + secondTime + thirdTime;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    let textToPrint = ""

    if (seconds < 10){
        textToPrint = `${minutes}:0${seconds}`
    } else {
        textToPrint = `${minutes}:${seconds}`
    }
    console.log(textToPrint)
}


sumSeconds(35,
    45,
    44)