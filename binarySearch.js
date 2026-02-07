//1.
// Code:

function search(arr, t) {

    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (t === arr[m]) return m;
        else if (t > arr[m]) l = m + 1;
        else r = m - 1;
    }

    return -1;

}


// console.log(search([1, 3, 5, 7, 9], 5));

// Description:
// Search for a target in a sorted array. Return index if found, else -1.

// Examples:
// Input: nums = [1,3,5,7,9], target = 5
// Output: 2

// Input: nums = [1,3,5,7,9], target = 2
// Output: -1

// Input: nums = [], target = 10
// Output: -1
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 2.

// Code:

function searchInsert(arr, t) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (t == arr[m]) return m;
        else if (t > arr[m]) l = m + 1;
        else r = m - 1
    }

    return l
}


// console.log(searchInsert([1, 3, 4, 6], 7));


// Description:
// Return index where target should be inserted to maintain sorted order.

// Examples:
// Input: [1,3,5,6], target = 5 → Output: 2
// Input: [1,3,5,6], target = 2 → Output: 1
// Input: [1,3,5,6], target = 7 → Output: 4
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 3.

// Code:

function firstOccurrence(nums, target) { }


// Description:
// Return index of first occurrence of target.

// Examples:
// [1,2,2,2,3], target=2 → 1
// [1,1,1], target=1 → 0
// [1,2,3], target=4 → -1
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 4.

// Code:

function lastOccurrence(nums, target) { }


// Description:
// Return index of last occurrence of target.

// Examples:
// [1,2,2,2,3], target=2 → 3
// [2,2,2], target=2 → 2
// [1,2,3], target=0 → -1
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 5.

// Code:

function countOccurrences(nums, target) { }


// Description:
// Count number of times target appears.

// Examples:
// [2,2,2,3,4], target=2 → 3
// [1,1,1], target=1 → 3
// [1,2,3], target=5 → 0
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 6.

// Code:

function exists(nums, target) { }


// Description:
// Return true if target exists, otherwise false.

// Examples:
// [1,4,7,9], target=7 → true
// [1,4,7,9], target=5 → false
// [], target=1 → false
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 7.

// Code:

function lowerBound(nums, target) { }


// Description:
// Return smallest element ≥ target.

// Examples:
// [1,3,5,7], target=4 → 5
// [1,3,5,7], target=7 → 7
// [1,3,5,7], target=8 → -1
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 8.

// Code:

function upperBound(nums, target) { }


// Description:
// Return largest element ≤ target.

// Examples:
// [1,3,5,7], target=6 → 5
// [1,3,5,7], target=1 → 1
// [1,3,5,7], target=0 → -1
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 9.

// Code:

function searchDesc(nums, target) { }


// Description:
// Binary search in descending sorted array.

// Examples:
// [9,7,5,3,1], target=5 → 2
// [9,7,5,3,1], target=9 → 0
// [9,7,5,3,1], target=4 → -1
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 10.

// Code:

function floorValue(nums, target) { }


// Description:
// Return greatest value ≤ target.

// Examples:
// [1,2,4,6], target=5 → 4
// [1,2,4,6], target=1 → 1
// [1,2,4,6], target=0 → -1
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 11.

// Code:

function ceilValue(nums, target) { }


// Description:
// Return smallest value ≥ target.

// Examples:
// [1,2,4,6], target=5 → 6
// [1,2,4,6], target=2 → 2
// [1,2,4,6], target=7 → -1
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 12.

// Code:

function isPerfectSquare(num) { }


// Description:
// Check if number is a perfect square.

// Examples:
// 16 → true
// 14 → false
// 1 → true
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 13.

// Code:

function sqrt(num) { }


// Description:
// Return integer square root.

// Examples:
// 8 → 2
// 16 → 4
// 1 → 1
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 14.

// Code:

function guessNumber(n) { }


// Description:
// Guess number using binary search.

// Examples:
// n=10, pick=6 → 6
// n=1, pick=1 → 1
// n=100, pick=42 → 42
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 15.

// Code:

function missingNumber(nums) { }


// Description:
// Find missing number in range [0,n].

// Examples:
// [3,0,1] → 2
// [0,1] → 2
// [9,6,4,2,3,5,7,0,1] → 8
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 16.

// Code:

function firstTrue(arr) { }


// Description:
// Return index of first true.

// Examples:
// [false,false,true] → 2
// [true,true] → 0
// [false,false] → -1
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 17.

// Code:

function firstOne(arr) { }


// Description:
// Return index of first 1.

// Examples:
// [0,0,1,1] → 2
// [1,1,1] → 0
// [0,0,0] → -1
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 18.

// Code:

function nextGreatestLetter(letters, target) { }


// Description:
// Return smallest letter greater than target.

// Examples:
// ['c','f','j'], 'd' → 'f'
// ['c','f','j'], 'j' → 'c'
// ['a','b'], 'a' → 'b'
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 19.

// Code:

function peakIndexInMountainArray(arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (arr[l] < arr[m]) {
            l = m;
        }
        if (arr[r] < arr[m]) {
            r = m;
        }
    }

    return l;
}


// console.log(peakIndexInMountainArray([1, 3, 5, 4, 2]));


// Description:
// Return index of peak in mountain array.

// Examples:
// [0,2,4,3,1] → 2
// [0,10,5,2] → 1
// [1,3,5,4,2] → 2
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 20.

// Code:

function findMin(nums) { }


// Description:
// Return minimum element.

// Examples:
// [1,2,3] → 1
// [5] → 5
// [-3,-1,0] → -3
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 21.

// Code:

function searchInfinite(arr, target) { }


// Description:
// Search target in infinite sorted array.

// Examples:
// [1,2,3,4,5], 4 → 3
// [1,3,5,7], 8 → -1
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 22.

// Code:

function kthSmallest(nums, k) { }


// Description:
// Return kth smallest element.

// Examples:
// [1,3,5], k=2 → 3
// [2,4,6,8], k=1 → 2
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 23.

// Code:

function isSorted(nums) { }


// Description:
// Check if array is sorted.

// Examples:
// [1,2,3] → true
// [3,2,1] → false
// [] → true
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 24.

// Code:

function nearest(nums, target) { }


// Description:
// Return value closest to target.

// Examples:
// [1,4,6,8], 5 → 4
// [1,4,6,8], 7 → 6
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 25.

// Code:

function countNegatives(grid) { }


// Description:
// Count negative numbers in sorted matrix.

// Examples:
// [[4,3,-1],[3,-1,-2]] → 3
// [[3,2],[1,0]] → 0

// 🟡 MEDIUM (26–50)

// (26–40 you already have — 41 below exactly matches your request)
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





// 26.

// Code:

function searchRotated(nums, target) { }


// Description:
// Search for a target in a rotated sorted array with unique elements.
// Return index if found, otherwise return -1.
// Time complexity must be O(log n).

// Examples:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Input: nums = [1], target = 1
// Output: 0

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





// 27.

// Code:

function findMinRotated(nums) { }


// Description:
// Given a rotated sorted array with unique values, return the minimum element.

// Examples:
// Input: [3,4,5,1,2]
// Output: 1

// Input: [4,5,6,7,0,1,2]
// Output: 0

// Input: [11,13,15,17]
// Output: 11

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





// 28.

// Code:

function searchRange(arr, t) {
    function findFirst() {
        let l = 0;
        let r = arr.length - 1;
        let ans = -1;
        while (l <= r) {
            let m = Math.floor((l + r) / 2)

            if (arr[m] >= t) {
                if (arr[m] === t) ans = m;
                r = m - 1
            } else {
                l = m + 1
            }
        }
        return ans;
    }

    function findSecond() {
        let l = 0;
        let r = arr.length - 1;
        let ans = -1;
        while (l <= r) {
            let m = Math.floor((l + r) / 2)

            if (arr[m] <= t) {
                if (arr[m] === t) ans = m;
                l = m + 1
            } else {
                r = m - 1
            }
        }
        return ans;
    }
    return [findFirst(), findSecond()]
}

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
// Description:
// Return the first and last index of the target in a sorted array.
// If target does not exist, return [-1, -1].

// Examples:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Input: nums = [], target = 0
// Output: [-1,-1]

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





// 29.

// Code:

function minEatingSpeed(piles, h) { }


// Description:
// Koko eats bananas at speed k bananas per hour.
// Each hour, she eats from only one pile.
// Return the minimum integer speed such that she can finish all bananas within h hours.

// Examples:
// Input: piles = [3,6,7,11], h = 8
// Output: 4

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





// 30.

// Code:

function shipWithinDays(weights, days) { }


// Description:
// Packages must be shipped in order.
// Return the minimum ship capacity so that all packages are shipped within given days.

// Examples:
// Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
// Output: 15

// Input: weights = [3,2,2,4,1,4], days = 3
// Output: 6

// Input: weights = [1,2,3,1,1], days = 4
// Output: 3

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





// 31.

// Code:

function minDays(bloomDay, m, k) { }


// Description:
// You need m bouquets.
// Each bouquet requires k adjacent flowers.
// Return the minimum days required or -1 if impossible.

// Examples:
// Input: bloomDay = [1,10,3,10,2], m = 3, k = 1
// Output: 3

// Input: bloomDay = [1,10,3,10,2], m = 3, k = 2
// Output: -1

// Input: bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3
// Output: 12

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





// 32.

// Code:

function maxMinDistance(stalls, cows) { }


// Description:
// Place cows in stalls such that the minimum distance between any two cows is maximized.

// Examples:
// Input: stalls = [1,2,4,8,9], cows = 3
// Output: 3

// Input: stalls = [10,1,2,7,5], cows = 3
// Output: 4

// Input: stalls = [1,2], cows = 2
// Output: 1

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





// 33.

// Code:

function allocateBooks(pages, students) { }


// Description:
// Books must be allocated contiguously.
// Minimize the maximum pages assigned to a student.
// Return -1 if allocation is not possible.

// Examples:
// Input: pages = [12,34,67,90], students = 2
// Output: 113

// Input: pages = [15,17,20], students = 2
// Output: 32

// Input: pages = [10,20], students = 3
// Output: -1

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





// 34.

// Code:

function paintersPartition(boards, k) { }


// Description:
// Each painter paints contiguous boards.
// Return minimum time required to paint all boards.

// Examples:
// Input: boards = [10,20,30,40], k = 2
// Output: 60

// Input: boards = [5,5,5,5], k = 2
// Output: 10

// Input: boards = [10], k = 1
// Output: 10

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





// 35.

// Code:

function minSpeed(dist, hour) { }


// Description:
// Each train except the last must round travel time up to the nearest hour.
// Return minimum speed to reach destination within hour, or -1 if impossible.

// Examples:
// Input: dist = [1,3,2], hour = 6
// Output: 1

// Input: dist = [1,3,2], hour = 2.7
// Output: 3

// Input: dist = [1,3,2], hour = 1.9
// Output: -1

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





// 36.

// Code:

function findPeak(nums) { }


// Description:
// A peak element is greater than its neighbors.
// Return index of any peak element.

// Examples:
// Input: [1,2,3,1]
// Output: 2

// Input: [1,2,1,3,5,6,4]
// Output: 1 or 5

// Input: [1]
// Output: 0

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





// 37.

// Code:

function searchMatrix(matrix, target) { }


// Description:
// Each row is sorted.
// First element of each row is greater than the last of the previous row.
// Return true if target exists.

// Examples:
// Input: matrix = [[1,3,5],[7,9,11]], target = 9
// Output: true

// Input: matrix = [[1,3,5],[7,9,11]], target = 4
// Output: false

// Input: matrix = [[1]], target = 1
// Output: true

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





// 38.

// Code:

function findMedian(nums1, nums2) { }


// Description:
// Return the median of two sorted arrays in O(log(min(n,m))) time.

// Examples:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.5

// Input: nums1 = [0,0], nums2 = [0,0]
// Output: 0

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





// 39.

// Code:

function splitArray(nums, k) { }


// Description:
// Split array into k subarrays to minimize the largest subarray sum.

// Examples:
// Input: nums = [7,2,5,10,8], k = 2
// Output: 18

// Input: nums = [1,2,3,4,5], k = 2
// Output: 9

// Input: nums = [1,4,4], k = 3
// Output: 4

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





// 40.

// Code:

function minimumTime(time, totalTrips) { }


// Description:
// Each bus takes time[i] to complete one trip.
// Return minimum time needed to complete totalTrips trips.

// Examples:
// Input: time = [1,2,3], totalTrips = 5
// Output: 3

// Input: time = [2], totalTrips = 1
// Output: 2

// Input: time = [5,10,10], totalTrips = 9
// Output: 25



// 41.

// Code:

function searchRotatedWithDuplicates(nums, target) { }


// Description:
// Search target in rotated sorted array that may contain duplicates.

// Examples:
// [2,5,6,0,0,1,2], target=0 → true
// [2,5,6,0,0,1,2], target=3 → false
// [1,1,1,1], target=1 → true
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 42.

// Code:

function binarySearchFloat(low, high, precision, fn) { }


// Description:
// Binary search on floating-point numbers.

// Examples:
// sqrt(10) → 3.162
// cubeRoot(27) → 3
// sqrt(2) → 1.41
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 43.

// Code:

function findKthPositive(arr, k) { }


// Description:
// Find kth missing positive number.

// Examples:
// [2,3,4,7,11], k=5 → 9
// [1,2,3,4], k=2 → 6
// [5,6,7], k=1 → 1
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 44.

// Code:

function smallestDivisor(nums, threshold) { }


// Description:
// Find smallest divisor under threshold.

// Examples:
// [1,2,5,9], threshold=6 → 5
// [44,22,33,11,1], threshold=5 → 44
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 45.

// Code:

function maxDistance(position, m) { }


// Description:
// Maximize minimum distance between balls.

// Examples:
// [1,2,3,4,7], m=3 → 3
// [5,4,3,2,1], m=2 → 4
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 46.

// Code:

function matrixMedian(matrix) { }


// Description:
// Find median of row-wise sorted matrix.

// Examples:
// [[1,3,5],[2,6,9],[3,6,9]] → 5
// [[5]] → 5
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 47.

// Code:

function rightmostSmaller(nums, target) { }


// Description:
// Find rightmost element smaller than target.

// Examples:
// [1,2,4,4,5], target=4 → 2
// [5,6,7], target=4 → -1
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 48.

// Code:

function binarySearchPredicate(low, high, predicate) { }


// Description:
// Find first index where predicate is true.

// Examples:
// x² ≥ 20 → 5
// x ≥ 100 → 100
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 49.

// Code:

function binarySearchOnAnswer(low, high, can) { }


// Description:
// Binary search on answer space.

// Examples:
// [7,2,5,10,8], k=2 → 18
// [1,2,3,4,5], k=2 → 9
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--END--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




// 50.

// Code:

function optimizeWithBinarySearch(low, high, isValid) { }


// Description:
// Optimize min/max value using monotonic condition.

// Examples:
// cost=[10,20,30], budget=50 → 20
// efficiency=[3,6,7,11], limit=8 → 4



//51.

var singleNonDuplicate = function (arr) {

    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (arr[m] === arr[m - 1]) {
            if ((m + l + 1) % 2 === 1) {
                r = m - 2
            } else {
                l = m + 1
            }
        } else if (arr[m] === arr[m + 1]) {
            if ((m + 1) % 2 === 1) {
                l = m + 2
            }else{
                r = m - 1;
            }
        }else{
            return arr[m]
        }
    }
  
};



console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));

/* 
xample 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10
 */