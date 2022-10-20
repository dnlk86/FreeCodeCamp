// Sum All Numbers in a Range
function sumAll(arr) {
    arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = arr[0]; i < arr[1] + 1; i++) {
        sum += i;
    }
    return sum;
}

sumAll([1, 4]);

// Diff Two Arrays
function diffArray(arr1, arr2) {
    const newArr = [...arr1, ...arr2].filter(
        (v, i, arr) => arr.indexOf(v) === arr.lastIndexOf(v)
    );
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Seek and Destroy
function destroyer(arr) {
    let res = [...arr];
    for (let i = 1; i < arguments.length; i++) {
        res = res.filter((v) => v !== arguments[i]);
    }
    return res;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Wherefore art thou
function whatIsInAName(collection, source) {
    const arr = [];
    for (let i = 0; i < collection.length; i++) {
        let found = true;
        for (let j = 0; j < Object.entries(source).length; j++) {
            if (
                !collection[i].hasOwnProperty(Object.keys(source)[j]) ||
                collection[i][Object.keys(source)[j]] !==
                    Object.values(source)[j]
            ) {
                found = false;
            }
        }
        if (found) {
            arr.push(collection[i]);
        }
    }
    return arr;
}

whatIsInAName(
    [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
);

// Spinal Tap Case
function spinalCase(str) {
    let res = str;
    res = res.replace(/([A-Z])/g, " $1");
    res = res.replace(/(\W+|_)/g, " ");
    res = res.trim();
    res = res.replace(/\s+/g, "-").toLowerCase();
    return res;
}

spinalCase("This Is Spinal Tap");

// Pig Latin
function translatePigLatin(str) {
    console.log("original str: " + str);
    if (/^[aeiou]+/gi.test(str)) {
        str += "way";
    } else {
        str = str.replace(/^([^aeiou]+)(.*)/gi, "$2$1ay");
    }
    return str;
}

translatePigLatin("consonant");

// Search and Replace
function myReplace(str, before, after) {
    let res = "";
    let re = new RegExp(before, "g");
    after =
        (/^[A-Z]/.test(before)
            ? after[0].toUpperCase()
            : after[0].toLowerCase()) + after.slice(1);
    res = str.replace(re, after);
    return res;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// DNA Pairing
function pairElement(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "A":
                res.push(["A", "T"]);
                break;
            case "T":
                res.push(["T", "A"]);
                break;
            case "C":
                res.push(["C", "G"]);
                break;
            case "G":
                res.push(["G", "C"]);
                break;
        }
    }
    return res;
}

pairElement("GCG");

// Missing letters
function fearNotLetter(str) {
    const a = "abcdefghijklmnopqrstuvwxyz";
    const start = a.indexOf(str[0]);
    const end = a.indexOf(str[str.length - 1]);
    let res = a.slice(start, end + 1);
    for (let i = 0; i < str.length; i++) {
        res = res.replace(new RegExp(str[i], "g"), "");
    }
    return res === "" ? undefined : res;
}

fearNotLetter("abce");

// Sorted Union
function uniteUnique(arr) {
    let res = [];
    for (let i = 0; i < Object.entries(arguments).length; i++) {
        Object.values(arguments)[i].map((val) => {
            if (!res.includes(val)) {
                res.push(val);
            }
        });
    }
    return res;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Convert HTML Entities
function convertHTML(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "&":
                res += "&amp;";
                break;
            case "<":
                res += "&lt;";
                break;
            case ">":
                res += "&gt;";
                break;
            case "'":
                res += "&apos;";
                break;
            case '"':
                res += "&quot;";
                break;
            default:
                res += str[i];
        }
    }
    return res;
}

convertHTML("Dolce & Gabbana");

// Sum All Odd Fibonacci Numbers
function sumFibs(num) {
    let n = 1;
    let fib = [];
    while (n <= num) {
        if (n === 1) {
            fib.push(n, n);
            n += n;
        } else {
            fib.push(n);
            n += fib[fib.length - 2];
        }
    }
    return fib.filter((val) => val % 2 === 1).reduce((a, b) => a + b);
}

sumFibs(4);

// Sum All Primes
function sumPrimes(num) {
    let res = 0;
    for (let i = 0; i <= num; i++) {
        if (isPrime(i)) {
            res += i;
        }
    }
    return res;
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

sumPrimes(10);

// Smallest Common Multiple
function smallestCommons(arr) {
    let newArr = [];
    arr.sort((a, b) => a - b);
    for (let i = arr[0]; i <= arr[1]; i++) {
        newArr.push(i);
    }
    return newArr.reduce((a, b) => lcm(a, b));
}

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);

smallestCommons([1, 5]);

// Drop it
function dropElements(arr, func) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            res = arr.slice(i);
            return res;
        }
    }
    return [];
}

dropElements([1, 2, 3], function (n) {
    return n < 3;
});

// Steamroller
function steamrollArray(arr) {
    let res = arr.reduce(flt, []);
    return res;
}

const flt = (acc, v) =>
    v instanceof Array ? v.reduce(flt, acc) : acc.concat(v);

steamrollArray([1, [2], [3, [[4]]]]);

// Binary Agents
function binaryAgent(str) {
    let c = str.split(" ");
    return c.reduce(
        (res, bin) => res.concat(String.fromCharCode(parseInt(bin, 2))),
        ""
    );
}

binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
