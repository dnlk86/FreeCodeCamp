// Roman Numeral Converter
function convertToRoman(num) {
    let res = [];
    let numArr = num.toString(10).split("").reverse();
    const romanNums = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"],
    ];
    res = numArr.map((v, i) => romanNums[i][Number(v)]);
    return res.reverse().join("");
}

convertToRoman(36);
