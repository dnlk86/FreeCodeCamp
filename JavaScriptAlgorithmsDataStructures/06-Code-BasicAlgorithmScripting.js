// CONVERT CELSIUS TO FAHRENHEIT
function convertCtoF(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

convertCtoF(30);

// REVERSE A STRING
function reverseString(str) {
    let res = ''
    for (let i=str.length - 1; i>=0; i--) {
      res += str[i];
    }
    return res;
}

reverseString("hello");

// FACTORIALIZE A NUMBER
function factorialize(num) {
    if (num === 0) {
      return 1
    } else {
      return num * factorialize(num - 1);
    }
  }

  factorialize(5);

// FIND THE LONGEST WORD IN A STRING
function findLongestWordLength(str) {
    let max = 0;
    const arr = str.split(" ");
    for (let i in arr) {
      max = arr[i].length > max ? arr[i].length : max;
    }
    return max;
  }

  findLongestWordLength("The quick brown fox jumped over the lazy dog");

// RETURN LARGEST NUMBERS IN ARRAYS
function largestOfFour(arr) {
    let newArr = [];
    for (let i in arr) {
      newArr.push(Math.max(...arr[i]));
    }
    return newArr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// CONFIRM THE EDITING
function confirmEnding(str, target) {
    return str.substr(-target.length) === target ? true : false; // WITHOUT USING THE ENDSWITH METHOD
  }
  
  confirmEnding("Bastian", "n");

// REPEAT A STRING REPEAT A STRING
function repeatStringNumTimes(str, num) {
    if (num <= 0) {
      return "";
    } else {
      return str += repeatStringNumTimes(str, num - 1); // WITHOUT USING THE REPEAT METHOD
    }
  }
  
  repeatStringNumTimes("abc", 3);

  // TRUNCATE A STRING
  function truncateString(str, num) {
    return str.length > num ? str.slice(0,num) + "..." : str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

  // FINDERS KEEPERS
  function findElement(arr, func) {
    for (let i in arr) {
      if (func(arr[i])) {
        return arr[i];
      }
    }
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);

  // BOO WHO
  function booWho(bool) {
    return typeof bool == "boolean" ? true : false;
  }
  
  booWho(null);

// TITLE CASE SENTENCE
function titleCase(str) {
    const arr = str.split(" ");
    arr.map((w, i) => arr[i] = w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
    return arr.join(" ");
  }
  
  titleCase("I'm a little tea pot");