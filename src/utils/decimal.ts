import BigNumber from 'bignumber.js';

/**
 * 法币的：整数位无数字的最多保留5位小数，整数位有数字的，最多保留两位小数。数字货币保留8位
 * type : 1:法币;2:数字货币
 */
export function handelDecimal(type: number, num: any) {
    let decimal = 0;
    if (type === 1) {
        decimal = parseFloat(num) >= 1 ? 2 : 5
    } else {
        decimal = 8
    }
    return new BigNumber(num).toFormat(decimal, BigNumber.ROUND_DOWN);
}
