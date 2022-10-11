// CONVERT CELSIUS TO FAHRENHEIT
function convertCtoF(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// REVERSE A STRING
function reverseString(str) {
    let res = ''
    for (let i=str.length - 1; i>=0; i--) {
      res += str[i];
    }
    return res;
}

// FACTORIALIZE A NUMBER
function factorialize(num) {
    if (num === 0) {
      return 1
    } else {
      return num * factorialize(num - 1);
    }
  }