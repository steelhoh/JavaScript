function messageTranslator(input){
    let numberOfCommands = input.shift()
    let regex = /^!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[A-Za-z]{8,})\]$/;

    for (let i = 0; i < numberOfCommands; i++) {
        let match = input[i].match(regex);

        if (!match) {
            console.log("The message is invalid");
        } else {
            let { command, message } = match.groups;
            let letterToAsciiNum = message.split("").map(char => char.charCodeAt(0)).join(" ");
            console.log(`${command}: ${letterToAsciiNum}`);
        }
    }
}



// messageTranslator(
//     ["2",
//     "!Send!:[IvanisHere]",
//     "*Time@:[Itis5amAlready"]
// )

messageTranslator(
    ["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"]
)