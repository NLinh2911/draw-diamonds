/**
 * Created by Linh Ngo in 07/05/2017
 */
// ========================================
// Draw Multiple Diamonds Function
// ========================================
//const readlineSync = require('readline-sync');
/**
 * @param: N is number of diamonds
 * @param: H is the rows / height of one diamond
 */
const drawManyDiamond = (N, H) => {
    // initial validation of inputs
    if (N < 1 || H < 1 || H % 2 === 0) {
        return 'invalid inputs';
    }
    let res = "";
    let h = (H + 1) / 2; // H = 7 -> h = 4
    // loop through each row of the diamond
    for (let i = 0; i < H; i++) {
        // with each row, loop through each column of the upper part
        if (i < h) {
            for (j = 0; j < N*H; j++) {
                let j2 = j % H;
                if ((j2 === h - 1 + i) || (j2 === h - 1 - i)) {
                    res += "*";
                } else {
                    res += " ";
                }
            }
            res += '\n'
        } else {
            for (j = 0; j < N*H; j++) {
                let j2 = j % H;
                if ((j2 === h - 1 - (H - 1 - i)) || (j2 === h - 1 + (H - 1 - i))) {
                    res += "*";
                } else {
                    res += " ";
                }
            }
            res += '\n'
        }
    }
    return res;
}

console.log('drawManyDiamond:');
console.log(drawManyDiamond(3, 7));

// =========================================
const drawManyDiamond2 = (N, H) => {
    // initial validation of inputs
    if (N < 1 || H < 1 || H % 2 === 0) {
        return 'invalid inputs';
    }
    let res = "";
    let h = (H + 1) / 2; // H = 7 -> h = 4
    let width = H - 1;
    // loop through each row of the diamond
    for (let i = 0; i < H; i++) {
        // with each row, loop through each column of the upper part
        if (i < h) {
            for (j = 0; j < N*H - 2; j++) {
                let j2 = j % width;
                if ((j2 === h - 1 + i) || (j2 === h - 1 - i)) {
                    res += "*";
                } else {
                    res += " ";
                }
            }
            res += '\n'
        // for the lower part of diamonds
        } else {
            for (j = 0; j < N*H - 2; j++) {
                let j2 = j % width;
                if ((j2 === h - 1 - (H - 1 - i)) || (j2 === h - 1 + (H - 1 - i))) {
                    res += "*";
                } else {
                    res += " ";
                }
            }
            res += '\n'
        }
    }
    return res;
}

console.log('drawManyDiamond2:');
console.log(drawManyDiamond2(3, 9));