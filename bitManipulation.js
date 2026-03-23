var hasAllCodes = function (s, k) {
    let set = new Set();

    for (let i = 0; i <= s.length - k; i++) {
        let sub = s.substring(i, i + k);
        set.add(sub);
    }

    return set.size === (1 << k);
};


// Check if Number is Even
function isEven(n) {
    return (n & 1) == 0
}

// Test Cases
// console.log(isEven(6));  // true
// console.log(isEven(7));  // false


/******************** 2 ********************/
// Check if Number is Odd
function isOdd(n) {
    return (n & 1) == 1
}

// Test Cases
// console.log(isOdd(7));   // true
// console.log(isOdd(10));  // false


/******************** 3 ********************/
// Check if Number is Power of Two
function isPowerOfTwo(n) {

}

// Test Cases
// console.log(isPowerOfTwo(16)); // true
// console.log(isPowerOfTwo(18)); // false


/******************** 4 ********************/
// Count Set Bits (Brian Kernighan)
function countSetBits(n) {
    // return number of set bits
}

// Test Cases
// console.log(countSetBits(11)); // 3
// console.log(countSetBits(8));  // 1


/******************** 5 ********************/
// Find Single Number (others appear twice)
function singleNumber(arr) {
    // return the element that appears once
}

// Test Cases
// console.log(singleNumber([2,2,1]));     // 1
// console.log(singleNumber([4,1,2,1,2])); // 4


/******************** 6 ********************/
// Check if Kth Bit is Set
function isKthBitSet(n, k) {
    // return true if kth bit is set
}

// Test Cases
// console.log(isKthBitSet(5, 0)); // true
// console.log(isKthBitSet(5, 1)); // false


/******************** 7 ********************/
// Set Kth Bit
function setKthBit(n, k) {
    // return number after setting kth bit
}

// Test Cases
// console.log(setKthBit(5,1)); // 7
// console.log(setKthBit(8,0)); // 9


/******************** 8 ********************/
// Clear Kth Bit
function clearKthBit(n, k) {
    // return number after clearing kth bit
}

// Test Cases
// console.log(clearKthBit(5,0)); // 4
// console.log(clearKthBit(7,1)); // 5


/******************** 9 ********************/
// Toggle Kth Bit
function toggleKthBit(n, k) {
    // return number after toggling kth bit
}

// Test Cases
// console.log(toggleKthBit(5,0)); // 4
// console.log(toggleKthBit(4,2)); // 0


/******************** 10 ********************/
// Remove Rightmost Set Bit
function removeRightmostSetBit(n) {
    // return number after removing rightmost set bit
}

// Test Cases
// console.log(removeRightmostSetBit(12)); // 8
// console.log(removeRightmostSetBit(10)); // 8


/******************** 11 ********************/
// Find Missing Number (0 to n)
function findMissingNumber(arr) {
    // return missing number
}

// Test Cases
// console.log(findMissingNumber([0,1,3])); // 2
// console.log(findMissingNumber([3,0,1])); // 2


/******************** 12 ********************/
// Find Two Non-Repeating Numbers
function findTwoSingles(arr) {
    // return two numbers that appear once
}

// Test Cases
// console.log(findTwoSingles([1,2,1,3,2,5])); // [3,5]


/******************** 13 ********************/
// Reverse Bits of 32-bit Integer
function reverseBits(n) {
    // return reversed 32-bit integer
}

// Test Cases
// console.log(reverseBits(5));  // 2684354560


/******************** 14 ********************/
// Check if Number is Power of Four
function isPowerOfFour(n) {
    // return true if n is power of 4
}

// Test Cases
// console.log(isPowerOfFour(16)); // true
// console.log(isPowerOfFour(8));  // false


/******************** 15 ********************/
// Count Bits from 0 to n
function countBits(n) {
    // return array of bit counts from 0 to n
}

// Test Cases
// console.log(countBits(5)); // [0,1,1,2,1,2]


/******************** 16 ********************/
// Generate All Subsets Using Bitmasking
function subsets(arr) {
    // return all subsets
}

// Test Cases
// console.log(subsets([1,2]));
// Expected: [[],[1],[2],[1,2]]


/******************** 17 ********************/
// Divide Two Integers Without Using /
function divide(dividend, divisor) {
    // return quotient using bit manipulation
}

// Test Cases
// console.log(divide(10,3));  // 3
// console.log(divide(7,-3));  // -2


/******************** 18 ********************/
// Check if Number Has Alternating Bits
function hasAlternatingBits(n) {
    // return true if bits alternate
}

// Test Cases
// console.log(hasAlternatingBits(5)); // true
// console.log(hasAlternatingBits(7)); // false


/******************** 19 ********************/
// Find Rightmost Set Bit Position (1-based)
function rightmostSetBitPosition(n) {
    // return position
}

// Test Cases
// console.log(rightmostSetBitPosition(18)); // 2
// console.log(rightmostSetBitPosition(8));  // 4


/******************** 20 ********************/
// XOR of All Numbers from 1 to n
function xorUptoN(n) {
    // return xor from 1 to n
}

// Test Cases
// console.log(xorUptoN(5)); // 1
// console.log(xorUptoN(4)); // 4





var divide = function (dividend, divisor) {
    if (divisor === 0) throw new Error("Division by zero");

    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }

    let negative = (dividend < 0) ^ (divisor < 0);

    let dvd = Math.abs(dividend);
    let dvs = Math.abs(divisor);

    let quotient = 0;

    for (let i = 31; i >= 0; i--) {
        if ((dvd >>> i) >= dvs) {
            quotient += (1 << i);
            dvd -= (dvs << i);
        }
    }

    return negative ? -quotient : quotient;
};


console.log(divide(10, 2));
