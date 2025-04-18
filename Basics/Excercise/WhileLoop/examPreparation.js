function exam(args){
    let badGrades = Number(args[0]);
    let index = 1;
    let taskName = args[index];
    let grade = Number(args[index + 1]);
    index+=2;

    let averageGrade = 0;
    let numberOfProblems = 0;
    let lastProblemName = "";
    let badGradeCount = 0;
    let hasFailed = false
    let gradeSum = 0

    while (taskName !== "Enough"){
        if (grade <= 4) {
            badGradeCount += 1
    
            if (badGradeCount === badGrades) {
                console.log(`You need a break, ${badGrades} poor grades.`)
                hasFailed = true
                break;
            }
        } 
        numberOfProblems += 1;
        gradeSum += grade
        lastProblemName = taskName;
        taskName = args[index];
        grade = Number(args[index + 1]);
        index+=2;
    }

    if (!hasFailed) {
        averageGrade = gradeSum / numberOfProblems
        console.log(`Average score: ${averageGrade.toFixed(2)}`)
        console.log(`Number of problems: ${numberOfProblems}`)
        console.log(`Last problem: ${lastProblemName}`)
    }
}


exam(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])