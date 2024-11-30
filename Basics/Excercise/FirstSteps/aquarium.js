function aquarium(arg1, arg2, arg3, arg4) {
    let lenght = Number(arg1);
    let widht = Number(arg2);
    let height = Number(arg3);
    let decorationPercentage = Number(arg4);

    let volume = lenght * widht * height * 0.001
    let waterNeeded = volume - (volume * decorationPercentage/100)
    console.log(waterNeeded)
}

aquarium(85,
    75,
    47,
    17
)