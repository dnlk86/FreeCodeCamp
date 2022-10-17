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
