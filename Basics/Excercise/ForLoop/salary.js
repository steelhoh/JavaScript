function salary(args) {
    let tabs = args[0];
    let salary = args[1];
    let website = args
    let noSalaryLeft = false

    for (let i = 2; i <= tabs+2; i++){
        switch (website[i]) {
            case "Facebook":
                salary -= 150
                break;
            case "Instagram":
                salary -= 100
                break;
            case "Reddit":
                salary -= 50
                break;
        }
        if (salary <= 0) {
            console.log("You have lost your salary.")
            noSalaryLeft = true
            break
        }
    }
    if (!noSalaryLeft) {
        console.log(salary)
    }
}

salary([3,
    500,
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"])