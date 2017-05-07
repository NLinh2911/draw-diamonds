# DRAWING MULTIPLE DIAMONDS SIDE BY SIDE IN TERMINAL

## Run file drawManyDiamonds.js
* The functions take 2 arguments: N is number of diamonds while H is number of each diamond's rows
* DrawManyDiamond prints separated diamonds. There are total N*H columns

**drawManyDiamond(3, 7)** 

   *      *      *  
  * *    * *    * * 
 *   *  *   *  *   *
*     **     **     *
 *   *  *   *  *   *
  * *    * *    * *  
   *      *      * 

* DrawManyDiamond2 prints blended diamonds. There are total N*H - 2 columns

**drawManyDiamond2(3, 7)** 

   *     *     *   
  * *   * *   * *  
 *   * *   * *   * 
*     *     *     *
 *   * *   * *   * 
  * *   * *   * *  
   *     *     *  

## Logic: take N = 3 and H = 7 and drawManyDiamond2(3, 7) for example
* The function prints each row from left to right. 
* So we loop through 6 rows (row index or i goes from i = 0 to i = 6):
```js
    // loop through each row of the diamond
    for (let i = 0; i < H; i++) {
```
* We consider logic conditions for the upper half of the diamond (if H is 7, then upper part is the first h = (H + 1)/2 = 4 rows) and the lower half separately
* In each row, we go through all 3*7 - 2 = 19 columns (column index or j goes from 0 to 18): 
```js
    // with each row, loop through each column of the upper part
    if (i < h) {
        for (j = 0; j < N*H - 2; j++) {
```
* For the upper part of the diamonds, "*" is drawn in 
1. The first row (i = 0) where j of the first diamond = 3 and j of next diamonds = 9, 15 . 
2. The second row (i = 1) where j of the first diamond = 2, 4 and j of next diamonds = 8, 10, 14, 16 
3. The third row (i = 2) where j of the first diamond = 1, 5 and j of next diamonds = 7, 11, 13, 17
4. The fourth row (i = 3) where j of the first diamond = 0 and j of next diamonds =  6, 12

=> We can see that for column index of next diamonds,  j % 6 = the column index j of the first diamond => so we can generalize j where "*" is drawn

```js
    let width = H - 1 // H = 7 -> width = 6
    let j2 = j % width;
    if ((j2 === h - 1 + i) || (j2 === h - 1 - i)) {
        res += "*";
    } else {
        res += " ";
    }
```

* Similarly, we do the same with the lower part of the diamonds

```js
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
```