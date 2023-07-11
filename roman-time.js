"use strict";

const NumberObject = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
};

const ArabicArray = [50, 40, 10, 9, 5, 4, 1];
const TimeRegExp = /^([01][0-9]|2[0-3]):([0-5][0-9])$/;

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    try {
        typeof time === "string" && TimeRegExp.test(time);

        let splitted_time = time.match(TimeRegExp);
        let hours = parseInt(splitted_time[1], 10);
        let minutes = parseInt(splitted_time[2], 10);

        return getRomanNumber(hours) + ":" + getRomanNumber(minutes);
    } catch (e) {
        throw new TypeError("Неверное время");
    }
}

function getRomanNumber(n) {
    if (n === 0) {
        return "N";
    }

    let result = "";
    let i = 0;
    while (n > 0) {
        let arabicNumber = ArabicArray[i];
        if (arabicNumber > n) {
            i++;
        } else {
            n -= arabicNumber;
            result += NumberObject[arabicNumber];
        }
    }
    return result;
}

module.exports = romanTime;
