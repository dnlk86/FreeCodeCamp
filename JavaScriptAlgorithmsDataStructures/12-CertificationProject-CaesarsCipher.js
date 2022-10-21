// Caesars Cipher
function rot13(str) {
    const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (/[\W]|[\s]/.test(str[i])) {
            res += str[i];
        } else {
            res +=
                a.indexOf(str[i]) < 13
                    ? a[a.length - (13 - a.indexOf(str[i]))]
                    : a[a.indexOf(str[i]) - 13];
        }
    }
    return res;
}

rot13("SERR PBQR PNZC"); //FREE CODE CAMP
