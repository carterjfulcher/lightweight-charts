export function clamp(value, minVal, maxVal) {
    return Math.min(Math.max(value, minVal), maxVal);
}
export function isBaseDecimal(value) {
    if (value < 0) {
        return false;
    }
    for (let current = value; current > 1; current /= 10) {
        if ((current % 10) !== 0) {
            return false;
        }
    }
    return true;
}
export function greaterOrEqual(x1, x2, epsilon) {
    return (x2 - x1) <= epsilon;
}
export function equal(x1, x2, epsilon) {
    return Math.abs(x1 - x2) < epsilon;
}
// We can't use Math.min(...arr) because that would only support arrays shorter than 65536 items.
export function min(arr) {
    if (arr.length < 1) {
        throw Error('array is empty');
    }
    let minVal = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
    }
    return minVal;
}
export function ceiledEven(x) {
    const ceiled = Math.ceil(x);
    return (ceiled % 2 !== 0) ? ceiled - 1 : ceiled;
}
export function ceiledOdd(x) {
    const ceiled = Math.ceil(x);
    return (ceiled % 2 === 0) ? ceiled - 1 : ceiled;
}
