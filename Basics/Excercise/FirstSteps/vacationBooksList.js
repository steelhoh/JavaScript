function readingTime(arg, arg2, arg3) {
    let pageCount = Number(arg);
    let readingPerHour = Number(arg2);
    let deadline = Number(arg3);

    console.log((pageCount / readingPerHour) / deadline)
}

readingTime(212,
    20,
    2)