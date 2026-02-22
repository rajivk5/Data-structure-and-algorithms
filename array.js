


var removeElement = function (nums, val) {

    let k = 0; // position to place next valid element

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

// console.log(removeElement([3,2,2,3], 3));







var getRow = function (rowIndex) {
    let row = [];
    let value = 1;

    for (let k = 0; k <= rowIndex; k++) {
        row.push(value);
        console.log(value);

        value = value * (rowIndex - k) / (k + 1);
    }

    return row;
};
// console.log(getRow(3));







var convertToTitle = function (columnTitle) {
    let result = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        let value = columnTitle.charCodeAt(i) - 64;
        result = result * 26 + value;
    }

    return result;

};

// console.log(convertToTitle('AB'));




// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...


// Example 1:

// Input: columnNumber = 1
// Output: "A"
// Example 2:

// Input: columnNumber = 28
// Output: "AB"
// Example 3:

// Input: columnNumber = 701
// Output: "ZY"


var reverseBits = function (n) {

    let result = 0;

    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n = n >>> 1;
    }

    return result >>> 0;
};

let n = 43261596

console.log(reverseBits(n));

// console.log(reverseBits(n));
