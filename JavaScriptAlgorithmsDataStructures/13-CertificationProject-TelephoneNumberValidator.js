// Telephone Number Validator
function telephoneCheck(str) {
    const a = /(^\d{3}-{1}\d{3}-{1}\d{4})/.test(str);
    const b = /(^\(\d{3}\)\d{3}-{1}\d{4})/.test(str);
    const c = /(^\(\d{3}\)\s{1}\d{3}-{1}\d{4})/.test(str);
    const d = /(^\d{3}\s\d{3}\s\d{4})/.test(str);
    const e = /(^\d{10}$)/.test(str);
    const f = /(^1\s{1}\d{3}\s{1}\d{3}\s{1}\d{4})/.test(str);
    const g = /(^1\s{1}\d{3}-{1}\d{3}-{1}\d{4})/.test(str);
    const h = /(^1\s{1}\(\d{3}\)\s{1}\d{3}-{1}\d{4})/.test(str);
    const i = /(^1\(\d{3}\)\d{3}-{1}\d{4})/.test(str);
    return a || b || c || d || e || f || g || h || i;
}

telephoneCheck("555-555-5555");
