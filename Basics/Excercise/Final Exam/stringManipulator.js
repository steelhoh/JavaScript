function stringManipulator(data){
    let string = data.shift()

    for (let command of data) {
        if (command === "End") break;

        let [action, arg1, arg2] = command.split(" ");

        switch (action) {
            case "Translate": 
            string = string.split(arg1).join(arg2);
            console.log(string);
            break;

        case "Includes":
            console.log(string.includes(arg1) ? "True" : "False");
            break;
        case "Start":
            console.log(string.startsWith(arg1) ? "True" : "False");
            break;
        case "Lowercase":
            string = string.toLowerCase();
            console.log(string);
            break;
        case "FindIndex":
            console.log(string.lastIndexOf(arg1));
            break;
        case "Remove":
            let startIndex = Number(arg1);
            let count = Number(arg2);
            string = string.substring(0, startIndex) + string.substring(startIndex + count);
            console.log(string);
            break;
        }
    }
}

stringManipulator(
    ["*S0ftUni is the B3St Plac3**",
        "Translate 2 o",
        "Includes best",
        "Start the",
        "Lowercase",
        "FindIndex p",
        "Remove 2 7",
        "End"]
)