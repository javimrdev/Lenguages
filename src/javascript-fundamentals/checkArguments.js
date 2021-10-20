function f(input) {
    var result;
    if (input === undefined) {
        result = "Unknown";
    } else if (input === null) {
        result = "";
    } else {
        result = input;
    }
    return result;
}

function f(input) {
    const result = 'Unknown';
    result = input === undefined
        ? 'Unknown'
        : input === null
            ? ''
            : input;

    return result;
}