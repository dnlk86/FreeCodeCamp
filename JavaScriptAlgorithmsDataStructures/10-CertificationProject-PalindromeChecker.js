// Palindrome Checker
function palindrome(str) {
    let res = str.replace(/[^\w]|[_]/gi, "").toLowerCase();
    for (let i = 0; i < res.length; i++) {
        if (res[i] !== res[res.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

palindrome("eye");
