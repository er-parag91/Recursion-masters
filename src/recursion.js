  // Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  if (n < 0) return null
  if (n <= 1) return 1
  return n * factorial(n - 1)
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  if (!array || !array.length) return 0;
  return array[0] + sum(array.slice(1))
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (typeof array == 'number') return array;
  if (!array || array.length == 0) return 0;
  
  return arraySum(array[0]) + arraySum(array.slice(1));
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n < 0) n = n * (-1);
  if (n == 2 || n == 0) return true;

  if (n > 2) return isEven(n - 2);
  else return false;
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n == 0) return 0;
  return n + (-1 * n / Math.abs(n)) + sumBelow(n + (-1 * n / Math.abs(n)));
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  if (x == y) return []
  if (x == ( x > y ? y + 1 : y -1)) return [];
  return [x + (x > y ? - 1 : 1)].concat(range(x + (x > y ? - 1 : 1), y))
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
const decimalMultiplication = (a, b) => {
  const decimalsForA = String(a).split('.')[1];
  const decimalsForB = String(b).split('.')[1];
  const totalDecimalsForAns = (decimalsForA ? decimalsForA.length : 0) + (decimalsForB ? decimalsForB.length : 0);
  return Number((a * b).toFixed(totalDecimalsForAns));
}

var exponent = function(base, exp) {
  if (exp == 0) return 1;
  if (exp == 1) return base;
  if (exp < 0) {
    return decimalMultiplication(1 / base, exponent(base, exp + 1));
  }
  return base * (base < 0 ? -1 : 1) * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n == 2 || n == 1) return true;

  if (n > 2) return powerOfTwo(n / 2);
  else return false;
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if (!string) return '';
  return reverse(string.slice(1)) + string[0]
};


// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase().replace(' ', '')
  if (!string || string.length == 1 || (string.length == 2 && string[0] == string[1])) return true;
  if (string[0] == string[string.length - 1]) {
    return palindrome(string.slice(1, string.length - 1))
  }
  return false
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y == 0 || x == 0) return 0;
  if (y > x) return x;
  return modulo(x-y, y)
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  if (x < 0 && y < 0) x = Number(String(x).replace('-', ''))
  if (x == 0 || y == 0) return 0;
  if (y == 1) return x;
  return x + multiply(x, y + (y < 0 ? 1 : -1))
};

// 13. Write a function that divides two numbers and returns quotient, without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
  if (x == 0 || y ==0) return 0;
  let sign = '+';
  let dividend = x, divisor = y;
  let quotient = 0, remainder = 0;

  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    sign = '-';
  }
  dividend = Number(String(dividend).replace('-', ''));
  divisor = Number(String(divisor).replace('-', ''));


  while (dividend > divisor) {
    remainder = dividend - divisor;
    dividend = remainder;
    quotient++;
  }
  if (sign == '-') {
    return quotient - quotient - quotient; 
  }
  return quotient;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x == 0) return y;
  if (y == 0) return x;
  const [large, small] = x > y ? [x, y]: [y, x];
  const remainder = large % small;
  if (remainder == 0) return small;
  return gcd(small, remainder)
};


// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if(str1 == '' && str2 == '') return true;
  if(str1 == '' || str2 == '') return false;
  
  return compareStr(str1.slice(1), str2.slice(1))
};


// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  if (!str) return []
  return [str[0]].concat(createArray(str.slice(1)))
};


// 17. Reverse the order of an array
var reverseArr = function (array) {
  if (array.length == 0 || array.length == 1) return array;
  return [array.pop()].concat(reverseArr(array))
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length == 0) return []
  return [value].concat(buildList(value, length - 1))
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length == 0) return 0;
  return (array.shift() === value ? 1 : 0) + countOccurrence(array, value)
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length == 0) return array;
  return [callback(array[0])].concat(rMap(array.slice(1), callback))
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  if (obj && typeof obj == 'object' && !Array.isArray(obj)) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
  
    if (values.length <= 1 && typeof values[0] != 'object') return keys[0] == key ? 1 : 0;
    const firstObj = obj[keys[0]];
    delete obj[keys[0]]

    return (keys[0] == key ? 1 : 0) + countKeysInObj(firstObj, key) + countKeysInObj(obj, key)
  }
  return 0;
};


// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  if (obj && typeof obj == 'object' && !Array.isArray(obj)) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
  
    if (values.length <= 1 && typeof values[0] != 'object') return values[0] == value ? 1 : 0;
    const firstObj = obj[keys[0]];
    delete obj[keys[0]]

    if (typeof values[0] != 'object') {
      return (values[0] == value ? 1 : 0) + countValuesInObj(obj, value)
    } else {
      return countValuesInObj(firstObj, value) + countValuesInObj(obj, value)
    }
  }
  return 0;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
const fibNums = {}
var fibonacci = function(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n in fibNums) {
    return fibNums[n];
  } else {
    fibNums[n - 1] = fibonacci(n - 1)
    fibNums[n - 2] = fibonacci(n - 2)
    return fibNums[n - 1] + fibNums[n - 2];
  }
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
const nthFibNums = {}
var nthFibo = function(n) {
  if (n < 0) return null;
  if (n == 0) return 0;
  if (n == 1) return 1;

  if (n in nthFibNums) {
    return nthFibNums[n];
  } else {
    nthFibNums[n - 1] = nthFibo(n - 1)
    nthFibNums[n - 2] = nthFibo(n - 2)
    return nthFibNums[n - 1] + nthFibNums[n - 2];
  }
};

// 26. Given an array of words, return a new 7array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  if (input.length == 0) return [];
  return [input.shift().toUpperCase()].concat(capitalizeWords(input))
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(input) {
  if (input.length == 0) return [];
  const first = input.shift();
  return [first[0].toUpperCase()+first.slice(1)].concat(capitalizeFirst(input))
};
// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  if (obj && typeof obj == 'object' && !Array.isArray(obj)) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    if (keys.length <= 1 && typeof values[0] != 'object') return values[0] % 2 == 0 ? values[0] : 0;

    delete obj[keys[0]];
    if (typeof values[0] == 'object') {
      return nestedEvenSum(values[0]) + nestedEvenSum(obj)
    } else {
      return (values[0] % 2 == 0 ? values[0] : 0) + nestedEvenSum(obj)
    }
  }
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  if (!Array.isArray(arrays)) return [arrays];
  if (!arrays || arrays.length == 0) return [];
  return flatten(arrays[0]).concat(flatten(arrays.slice(1)))
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  if (!str) return obj;
  if (obj[str[0]]) obj[str[0]] += 1;
  else obj[str[0]] = 1;
  return letterTally(str.slice(1), obj)
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  if (list.length == 0) return []
  let lastElAt = 0;
  while (list[lastElAt] !== undefined && list[lastElAt] === list[lastElAt + 1]) {
    lastElAt++;
  }
  return [list[lastElAt]].concat(compress(list.slice(lastElAt+1)))
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length == 0) return [];
  return [[...array[0], aug]].concat(augmentElements(array.slice(1), aug))
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length == 0) return [];
  let lastElAt = 0;
  while(array[lastElAt] == 0 && array[lastElAt] == array[lastElAt + 1]) lastElAt++;

  return [array[lastElAt]].concat(minimizeZeroes(array.slice(lastElAt + 1)))
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, pos = 0) {
  if (pos > array.length - 1) return array;
  if ((pos == 0 && array[pos] < 0) || pos > 0) array[pos] = array[pos] * (-1);
  pos = pos + 1;
  return alternateSign(array, pos)
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
const intToText = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
}
var numToText = function(str) {
  if (!str) return '';
  const strToArr = str.split('');
  return `${strToArr[0] in intToText ? intToText[strToArr[0]] : strToArr[0] }${numToText(strToArr.slice(1).join(''))}`;
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'
var binarySearch = function(array, target, min = 0, max = array.length - 1) {
  if (min > max) return -1;

  let mid = Math.floor((min + max) / 2);
  if (array[mid] == target) return mid;

  if (target < array[mid]) max = mid - 1;
  if (target > array[mid]) min = mid + 1;
  return binarySearch(array, target, min, max)
};

const merge = (left, right) => {
  const result = [];
  let i = 0; j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }

  if (i !== left.length)result.push(...left.slice(i));
  if (j !== right.length)result.push(...right.slice(j));
  return result;
}
// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
};

// OR In-place mergesort
const inPlaceMerge = (array, left, right, mid) => {
  const result = [];
  let i = left, j = mid + 1, cursor = 0;
  
  while (i <= mid && j <= right) {
    if (array[i] <= array[j]) result[cursor++] = array[i++];
    else result[cursor++] = array[j++];
  }

  while (i <= mid) result[cursor++] = array[i++]
  while (j <= right) result[cursor++] = array[j++]

  for (let k = left; k <= right; k++) array[k] = result[k - left];

  return array
}

var mergeSortII = function(array, left = 0, right = array.length - 1) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    mergeSortII(array, left, mid);
    mergeSortII(array, mid+1, right);
    inPlaceMerge(array, left, right, mid)
    return array;
  }
};


//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
