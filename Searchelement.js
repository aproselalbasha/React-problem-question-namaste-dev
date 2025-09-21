// 🧩 Problem Statement: Search Element in an Array
// You are given an array of integers and a target value. Your task is to implement a function that searches for the target value within the array and returns its index if found. If the target value does not exist in the array, the function should return -1.

// 🔧 Requirements:
// Input: An array of integers arr[] and an integer val to search.

// Output: The index of val in the array if it exists; otherwise, -1.

// ✅ Constraints:
// The array contains distinct integers.

// The search should be performed using a linear scan (i.e., iterate through each element).

// Do not use built-in search methods like indexOf.

// 📦 Example:
// js
// Input: arr = [10, 20, 30, 40, 50], val = 40  
// Output: 3

// Input: arr = [10, 20, 30, 40, 50], val = 60  
// Output: -1

let arr = [10, 20, 30, 40, 50]

function searchelement(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }
    }
    return -1
}
const val = searchelement(arr, 20)
console.log(val)
