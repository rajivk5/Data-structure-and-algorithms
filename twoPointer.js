


var isSubsequence = function (s, t) {
    let i = 0;
    let j = 0;
    while (i < s.length && j < t.length) {
        if (t[i] === s[j]) {
            i++
        }
        j++
    }

    return i === s.length;
};


// let s = "axc", t = "ahbxgdc"
// console.log(isSubsequence(s, t))



var strStr = function (s, t) {


};

let s = "sad", t = "sadbutsad"

// console.log(strStr(s, t));


var maxArea = function (arr) {
    let i = 0;
    let j = arr.length - 1;
    let maxArea = 0;

    while (i !== j) {
        let area = Math.min(arr[i], arr[j]) * (j - i)
        maxArea = maxArea < area ? area : maxArea;
        arr[i] < arr[j] ? i++ : j--

    }

    return maxArea;

};

// console.log(maxArea([1, 1]));

var twoSum = function (arr, t) {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let sum = arr[i] + arr[j]
        if (sum > t) {
            j--
        } else if (sum < t) {
            i++
        } else {
            return [arr[i], arr[j]]
        }
    }
};

// let numbers = [-1, 0, 1, 2, -1, -4], target = 0

// console.log(twoSum(numbers,target));


var threeSum = function (arr) {

    arr.sort((a, b) => a - b)

    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(twoSum(arr.slice(i + 1, arr.length - 1), 0));


    }
};





// console.log(threeSum([-1, 0, 1, 2, -1, -4]));



var trap = function (arr) {

    let maxL = [];
    maxL[0] = arr[0]
    let maxR = [];
    maxR[arr.length - 1] = arr[arr.length - 1];

    for (let i = 1; i < arr.length; i++) {
        maxL[i] = Math.max(maxL[i - 1], arr[i]);
        maxR[arr.length - 1 - i] = Math.max(arr[arr.length - 1 - i], maxR[arr.length - i]);

    }

    let ans = 0;
    for (let k = 0; k < arr.length; k++) {
        ans += Math.max((Math.min(maxL[k], maxR[k])) - arr[k], 0)
    }

    return ans;
};

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

// console.log(trap(height));






var reverseString = function (s) {
    let i = 0;
    let j = s.length - 1
    while (i < j) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++; j--
    }

    return s
};


// console.log(reverseString(["h", "e", "l", "l", "o"]));



var rotateString = function (str, g) {
    str = str.split('')
    for (let i = 0; i < str.length; i++) {
        str[str.length - 1] = str.shift()
        if (str.join('') === g) return true

    }
    return false
};


let str = "abcde", goal = "abced"

// console.log(rotateString(str, goal));




var lengthOfLongestSubstring = function (s) {

    let map = {}
    let i = 0;
    let j = 1;
    let count = 1;

    while (j) {
      
    }
};


let st = "abcabcbb"

// console.log(lengthOfLongestSubstring(st));









var containsNearbyDuplicate = function (nums, k) {
    let set = new Set();
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        console.log(set,'left',l,'=',nums[l] ,'right',r,'=',nums[r]);
        
        if (r - l > k) {        
            set.delete(nums[l]);
            l++;
        }

        if (set.has(nums[r])) {
            return true;
        }

        set.add(nums[r]);
    }

    return false;
};


// console.log(containsNearbyDuplicate([2,0,1,1,0],1));







