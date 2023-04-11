// Задание:
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

    Example:
h = 0
m = 1
s = 1

result = 61000

// Решение:

function past(h, m, s) {
    let convertHours = h * 60 * 60 * 1000;
    let convertMinutes = m * 60 * 1000;
    let convertSeconds = s * 1000;
    return convertHours + convertMinutes + convertSeconds;
}
