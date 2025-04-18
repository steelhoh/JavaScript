function moving(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let index = 3
    let availableSpace = width * length * height
    let currentWeight = input[index];
    let isFull = false;
    index++;
    
    while (currentWeight !== "Done") {
        let boxes = Number(currentWeight);
        if (availableSpace - boxes < 0) {
            console.log(`No more free space! You need ${Math.abs(availableSpace - boxes)} Cubic meters more.`);
            isFull = true;
            break;
        }
        availableSpace -= boxes
        currentWeight = input[index];
        index++;
    }

    if (!isFull) {
        console.log(`${Math.abs(availableSpace)} Cubic meters left.`)
    }

}

/*
"{брой свободни куб. метри} Cubic meters left."
"No more free space! You need {брой недостигащи куб. метри} Cubic meters more."
*/

moving(["10", 
    "1",
    "2",
    "4", 
    "6",
    "Done"])