//сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

function depositCalculation(num1, num2, num3) {
    let depositedAmmount = Number(num1);
    let months = Number(num2);
    let interestRate = Number(num3)
    let sum = 0

    sum = depositedAmmount + months * ((depositedAmmount * interestRate/100)/12)
    console.log(sum)
}


depositCalculation(2350,
    6,
    7 
)