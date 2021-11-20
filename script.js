// function same(arr1, arr2) {
//   counter = 0;
//   if (arr1.length == arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       for (let j = 0; j < arr1.length; j++) {
//         if (arr1[i] * arr1[i] == arr2[j]) {
//           counter++;
//           if (counter == arr1.length) {
//             return true;
//           }
//         }
//       }
//     }
//   }
//   return false;
// }
// array1 = [1, 10, 2, 11];
// array2 = [1, 121, 100, 4];
// console.log(same(array1, array2));

// ==============================

// function validAnagram(str1, str2) {
//   if (str1.length != str2.length) {
//     return false;
//   }
//   let counter = 1;
//   let counters = 1;
//   let validAnagram1 = {};
//   let validAnagram2 = {};
//   for (const element of str1.toLowerCase()) {
//     if (element in validAnagram1) {
//       validAnagram1[element + counter] = element;
//       counter++;
//     }
//     validAnagram1[element] = element;
//   }
//   for (const elements of str2.toLowerCase()) {
//     if (elements in validAnagram2) {
//       validAnagram2[elements + counters] = elements;
//       counters++;
//     }
//     validAnagram2[elements] = elements;
//   }
//   for (const key in validAnagram1) {
//     if (!(key in validAnagram2)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(validAnagram("rat", "cat"));

// ==============================

// function sumZero(zeroArr) {
//   let left = 0;
//   let right = zeroArr.length - 1;
//   for (const key in zeroArr) {
//     if (
//       zeroArr[left] + zeroArr[right] == 0 &&
//       zeroArr[left] != zeroArr[right]
//     ) {
//       return `[${zeroArr[left]}],[${zeroArr[right]}]`;
//     }
//     if (zeroArr[left] + zeroArr[right] >= 0) {
//       right--;
//     }
//     if (zeroArr[left] + zeroArr[right] <= 0) {
//       left++;
//     }
//   }
// }
// console.log(sumZero([0]));
// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, 0, 1, 3]));

// ==============================

// function countUnqueValues(arr) {
//   let right = 1;
//   let left = 0;
//   let counter = 0;
//   for (const key in arr) {
//     if (arr[left] != arr[right]) {
//       counter++;
//       right++;
//       left++;
//     }
//     if (arr[left] == arr[right]) {
//       right++;
//       left++;
//     }
//   }
//   return counter;
// }
// console.log(countUnqueValues([1, 2, 3, 3, 10]));
// console.log(countUnqueValues([1, 1, 1, 1, 1, 2]));
// console.log(countUnqueValues([1, 2, 3, 4, 7, 7, 12, 12, 13]));
// console.log(countUnqueValues([]));
// console.log(countUnqueValues([-2, -1, -1, 0, 1]));

// ==============================

function maxSubarraySum(arr, sum) {}
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); //13
console.log(maxSubarraySum([], 4)); //null
