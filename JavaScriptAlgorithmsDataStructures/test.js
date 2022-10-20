function high(x) {
    let res = [];
    let words = x.split(" ");
    res = words.map((w) =>
        w.split("").reduce((acc, val) => acc + (val.charCodeAt() - 96), 0)
    );
    console.log(words.map((v, i) => ({ [v]: res[i] })));
    return words[res.indexOf(Math.max(...res))];
}

console.log(high("what time are we climbing up the volcano"));
