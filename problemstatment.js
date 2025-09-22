let arr = [2, -1, 10, -3, 11, -20, -50, 100]

function findnegative(arr) {
let count = 0
for (var i = 0; i < arr.length; i++) {
if (arr[i] < 0) {
count++
}
}
return count

}
const result = findnegative(arr)
console.log(result)


================

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function largest(arr) {
let larger = -1
for (let i = 0; i < arr.length; i++) {
if (arr[i] > larger) {
larger = arr[i]
}
}
return larger


}
const result = largest(arr)
console.log(result)
