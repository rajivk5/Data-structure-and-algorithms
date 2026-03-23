


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

// console.log(reverseBits(n));

// console.log(reverseBits(n));





var findErrorNums = function (arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            return [i + 1, i + 2]
        }
    }
};


// console.log(findErrorNums([1, 2, 2, 4]));



var smallerNumbersThanCurrent = function (arr) {
    let ans = [];
    for (let j = 0; j < arr.length; j++) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[j] > arr[i]) {
                count++
            }
        }
        ans.push(count);
        count = 0;
    }
    return ans;
};

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));//[4,0,1,1,3]



var findDisappearedNumbers = function (arr) {
    let ans = []
    let newArr = []
    for (let i = 1; i < arr.length + 1; i++) {
        newArr.push(i)
    }

    for (let j = 0; j < arr.length; j++) {
        if (!arr.includes(newArr[j])) {
            ans.push(j + 1)
        }
    }

    return ans;
};

// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));//[5,6]
// console.log("\n");

// console.log(findDisappearedNumbers([1, 1]));//[2]



var rotate = function (arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
        }
    }

    for (let i = 0; i < n; i++) {
        arr[i].reverse();
    }
    return arr
}
console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
//Output: [[7,4,1],[8,5,2],[9,6,3]]
