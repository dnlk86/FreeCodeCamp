// Cash Register
function checkCashRegister(price, cash, cid) {
    // status: OPEN -> ancora soldi in cassa -> return change
    // status: CLOSED -> cassa vuota -> return cid
    // status: INSUFFICIENT_FUNDS -> resto insufficiente -> return []
    const values = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100],
    ];
    const cidTotal =
        Math.round(cid.reduce((acc, v) => acc + v[1], 0) * 100) / 100;
    const rCid = cid.map((v) => [].concat(...v));
    let remainder = cash - price;

    if (remainder > cidTotal) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
        let change = [];
        let currToPay = 0;
        for (let i = values.length - 1; i >= 0; i--) {
            if (values[i][1] <= remainder) {
                currToPay = values[i][1] * Math.floor(remainder / values[i][1]);
                if (currToPay <= rCid[i][1]) {
                    change.push([values[i][0], currToPay]);
                    remainder -= currToPay;
                    rCid[i][1] -= currToPay;
                } else {
                    change.push([values[i][0], rCid[i][1]]);
                    remainder -= rCid[i][1];
                    rCid[i][1] = 0;
                }
                remainder = Math.round(remainder * 100) / 100;
            }
        }
        if (remainder === 0) {
            if ((rCid.reduce((acc, v) => acc + v[1], 0) * 100) / 100 === 0) {
                return { status: "CLOSED", change: cid };
            } else {
                return { status: "OPEN", change: change };
            }
        } else {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        }
    }
}

console.log(
    checkCashRegister(19.5, 20, [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
    ])
);
