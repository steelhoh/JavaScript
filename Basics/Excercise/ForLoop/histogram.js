function histogram(args) {
    let n = Number(args[0])
    let p1 = 0
    let p2 = 0
    let p3 = 0
    let p4 = 0
    let p5 = 0

    for (let i = 1; i <= n; i++){
        if (args[i] < 200){
            p1++;
        } else if (args[i] < 400){
            p2++;
        } else if (args[i] < 600){
            p3++;
        } else if (args[i] < 800){
            p4++;
        } else {
            p5++;
        }
    }
    console.log(`${(p1 / n * 100).toFixed(2)}%`)
    console.log(`${(p2 / n * 100).toFixed(2)}%`)
    console.log(`${(p3 / n * 100).toFixed(2)}%`)
    console.log(`${(p4 / n * 100).toFixed(2)}%`)
    console.log(`${(p5 / n * 100).toFixed(2)}%`)
}

histogram(([7,
    800,
    801,
    250,
    199,
    399,
    599,
    799])
    )