function magicNumberFinder(n){
    num = Number(n);
    let magicNumFound = false
    for (let a = 1; a <= 9; a++){
        if (magicNumFound){
            break;
        }
        for (let b = 9; b >= a; b--){
            if (magicNumFound){
                break;
            }
            for (let c = 0; c <= 9; c++){
                if (magicNumFound){
                    break;
                }
                for (let d = 9; d >= c; d--){
                    if (magicNumFound){
                        break;
                    }

                    if (a + b + c + d === a * b * c * d && num % 10 === 5){
                        console.log("" + a + b + c + d)
                        magicNumFound = true
                        break;
                    }
                    if (Math.floor((a * b * c * d / (a + b + c + d))) === 3 && num % 3 === 0){
                        console.log("" + d + c + b + a)
                        magicNumFound = true
                        break;
                    }
                }
            }
        } 
    }
    if (!magicNumFound){
        console.log("Nothing found")
    }

}


/*
a се мени от 1 до 9
b се мени от 9 до а
c се мени от 0 до 9
d се мени от 9 до c
*/

magicNumberFinder(214)