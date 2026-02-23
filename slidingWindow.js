




var minSlidingWindow = function (arr, k) {
    let result = [];
    let q = [];
    let i = j = 0;
    while (j < arr.length) {

        while (q.length && arr[j] < q[q.length - 1]) q.pop();
        q.push(arr[j])
        if (j >= k - 1) {
            result.push(q[0])
            arr[i] === q[0] && q.shift();
            i++;
        }

        j++
    }

    return result;
};


// console.log(minSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));



// 1.

// Code:

function maxSumSubarray(arr) {
    let newArr = []
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let subArray = [];
        let submax = 0;
        for (let j = i; j < arr.length; j++) {
            subArray.push(arr[j])
            submax += arr[j]
        }
        console.log(subArray, submax);

        max = Math.max(submax, max)
        newArr.push(subArray)


    }

    return max

}




// ---------------------------------------------------------------
function minSubArrayLen(target, arr) {
    let i = 0;
    let sum = 0;
    let minLen = Infinity;

    for (let j = 0; j < arr.length; j++) {

        sum += arr[j];

        while (sum >= target) {

            minLen = Math.min(minLen, j - i + 1);

            sum -= arr[i];
            i++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}


// console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]));








function minimumSumSubarray(arr, k) {

    let i = 0;
    let sum = 0;
    let min = Infinity;
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];

        if (j - i + 1 === k) {
            min = Math.min(min, sum)
            sum -= arr[i];
            i++;
        }

    }
    return min
}





function firstNegative(arr, k) {

    let i = 0;
    let result = [];
    let q = [];

    for (let j = 0; j < arr.length; j++) {

        // Add negative numbers only
        if (arr[j] < 0) {
            q.push(arr[j]);
        }

        // When window size becomes k
        if (j - i + 1 === k) {

            result.push(q.length ? q[0] : 0);

            // Remove outgoing negative
            if (arr[i] === q[0]) {
                q.shift();
            }

            i++;
        }
    }

    return result;
}
// console.log(firstNegative([1, -1, -3, 2, 5, -6, 7], 3));



function windowMaxElement(arr, k) {

    let result = [];
    let deque = [];

    for (let i = 0; i < arr.length; i++) {


        if (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }

        while (deque.length > 0 && arr[deque[deque.length - 1]] <= arr[i]) {
            deque.pop();
        }

        deque.push(i);

        if (i >= k - 1) {

            result.push(arr[deque[0]]);
        }
    }

    return result;
}

// console.log(windowMaxElement([1, 3, -1, -3, 5, 3, 2, 1, 6], 3));




var findMaxAverage = function (arr, k) {

    let i = 0;
    let sum = 0;
    let max = -Infinity;
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];

        if (j - i + 1 === k) {
            max = Math.max(max, sum)

            sum -= arr[i];
            i++;
        }

    }
    return max / k
};


// console.log(findMaxAverage([5], 1));




//------------------------------------------------------------

var maxVowels = function (arr, k) {
    let i = 0;
    let count = 0;
    let maxCount = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let j = 0; j < arr.length; j++) {
        if (vowels.has(arr[j])) count++

        if (j - i + 1 == k) {
            maxCount = Math.max(count, maxCount)

            if (vowels.has(arr[i])) count--
            i++
        }

    }

    return maxCount;
};


// console.log(maxVowels('aeiou', 2));

//------------------------------------------------------------











var numOfSubarrays = function (arr, k, threshold) {
    let i = 0;
    let sum = 0;
    let res = 0;
    let target = k * threshold
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];
        if (j - i + 1 === k) {
            if (sum >= target) {
                res++
            }
            sum -= arr[i];
            i++
        }

    }
    return res
};


// console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5));


//------------------------------------------------------------







var minSubArrayLen = function (target, arr) {
    let i = 0;
    let sum = 0;
    let minLen = Infinity;
    for (let j = 0; j < arr.length; j++) {

        sum += arr[j];

        while (sum >= target) {
            minLen = Math.min(minLen, j - i + 1);
            sum -= arr[i]
            i++
        }
    }

    return minLen === Infinity ? 0 : minLen;
};

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));






//-----------------------------------------------------------









var longestOnes = function (arr, k) {

    let i = 0;
    let zeroCount = 0;
    let maxLen = 0;

    for (let j = 0; j < arr.length; j++) {

        if (arr[j] === 0) {
            zeroCount++
        }

        while (zeroCount > k) {
            if (arr[i] === 0) {
                zeroCount--
            }
            i++
        }

        maxLen = Math.max(maxLen, j - i + 1)
    }

    return maxLen;
};


// console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));


//-----------------------------------------------------------------


var totalFruit = function (fruits) {
    let i = 0;
    let maxLen = 0;
    let map = new Map();

    for (let j = 0; j < fruits.length; j++) {

        map.set(fruits[j], (map.get(fruits[j]) || 0) + 1);

        while (map.size > 2) {
            map.set(fruits[i], map.get(fruits[i]) - 1);
            if (map.get(fruits[i]) === 0) {
                map.delete(fruits[i]);
            }
            i++;
        }
        maxLen = Math.max(maxLen, j - i + 1);
    }
    return maxLen;
};

// console.log(totalFruit([1, 2, 3, 2, 2]));



var lengthOfLongestSubstring = function (s) {

    let i = 0;
    let j = 0;
    let map = {}
    let maxWS = 0;
    for (j = 0; j < s.length; j++) {
        if (map[s[j]] !== undefined && map[s[j]] >= i) {
            i = map[s[j]] + 1;
        }
        map[s[j]] = j;
        maxWS = Math.max(maxWS, j - i + 1)
    }

    return maxWS;
};


// console.log(lengthOfLongestSubstring('abbaxyza'));


//--------------------------------------------------------------

var longestSubstring = function (s, k) {


};


// console.log(longestSubstring('aaabb', 3));





var divisorSubstrings = function (num, k) {
    let divisor = 10 ** k;
    let temp = num;
    let count = 0;

    while (temp >= 10 ** (k - 1)) {

        let sub = temp % divisor;

        if (sub !== 0 && num % sub === 0) {
            count++;
        }

        temp = Math.floor(temp / 10);
    }

    return count;
};

// console.log(divisorSubstrings(430043, 2));





var hasAllCodes = function (s, k) {
    let set = new Set();

    for (let i = 0; i <= s.length - k; i++) {
        let sub = s.substring(i, i + k);
        set.add(sub);
    }

    return set.size === (1 << k);
};

