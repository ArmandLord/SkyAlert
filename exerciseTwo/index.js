var cardinal = 23;
/*
    1st  	11th👀	21st	31st
    2nd  	12th👀	22nd	40th
    3rd  	13th👀	23rd	50th
    4th  	14th	24th	60th
    5th  	15th	25th	70th
    6th  	16th	26th	80th
    7th  	17th	27th	90th
    8th  	18th	28th	100th
    9th  	19th	29th	1,000th
    10th  	20th	30th	1,000,000th
*/
function changeOrdinalNumber(ordinal) {
    if (ordinal === 0) {
        console.log("0");
        return "0";
    }
    else {
        var firstModulo = ordinal % 10;
        var secondModulo = ordinal % 100;
        if (firstModulo === 1 && secondModulo !== 11) {
            console.log(ordinal + "st");
            return ordinal + "st";
        }
        if (firstModulo === 2 && secondModulo !== 12) {
            console.log(ordinal + "nd");
            return ordinal + "nd";
        }
        if (firstModulo === 3 && secondModulo !== 13) {
            console.log(ordinal + "rd");
            return ordinal + "rd";
        }
        console.log(ordinal + "th");
        return ordinal + "th";
    }
}
changeOrdinalNumber(cardinal);

module.exports = changeOrdinalNumber
