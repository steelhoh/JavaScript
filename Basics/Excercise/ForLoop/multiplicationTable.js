function multiplicationTable(arg) {
    number = Number(arg);
    for (let i = 1; i <= 10; i++){
        console.log(`${i} * ${number} = ${i * number}`)
    }
}

multiplicationTable(3)