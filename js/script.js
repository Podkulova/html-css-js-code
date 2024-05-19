console.log("Hello World!"); // = sout

//const = 10; // final int = 10;

let myNumber = 20;
console.log(typeof myNumber);
console.log(myNumber);
myNumber = '20';
console.log(typeof myNumber);
console.log(myNumber);

// String concatenation
let result = 'firstPart'.concat('SecondPart'); // String result = "firstPart".concat("SecondPart");
console.log(result);

// Checking if a string includes another string
let includes = 'ThisIsSda'.includes('IsS'); // boolean includes = "ThisIsSda".contains("IsS");
console.log(includes);

// Finding the index of a substring
let index = 'LetsLookForAnOO'.indexOf('oo', 1); // int index = "LetsLookForAnOO".indexOf("oo", 1);
console.log(index);

// Converting a string to uppercase
let upperCase = 'i\'ll be big'.toUpperCase(); // String upperCase = "i'll be big".toUpperCase();
console.log(upperCase);

// Matching a regular expression
let match = 'hi5FromSDA'.match('[1-9]'); // ["5"]
console.log(match);

// Matching a regular expression (Java uses Pattern and Matcher classes)
// Pattern pattern = Pattern.compile("[1-9]");
// Matcher matcher = pattern.matcher("hi5FromSDA");
// if (matcher.find()) {
//     String match = matcher.group(); // "5"
// }

// Repeating a string
let repeated = 'we will '.repeat(3) + 'rock you'; // String repeated = "we will ".repeat(3) + "rock you";
console.log(repeated);

// Replacing occurrences of a character in a string
let replaced = 'L3ts r3place three'.replace('3', 'e'); // String replaced = "L3ts r3place three".replace('3', 'e');
console.log(replaced);

let sliced = 'This is quite a long sentence'.slice(10); // String sliced = "This is quite a long sentence".substring(10);
console.log(sliced);

// Splitting a string into an array
let words = 'Lets split this sentence to array of words'.split(' '); // String[] words = "Lets split this sentence to array of words".split(" ");
console.log(words);

// Trimming whitespaces from the beginning and end of a string
let trimmed = '  RemoveWhitespaces \t '.trim(); // String trimmed = "  RemoveWhitespaces \t ".trim();
console.log(trimmed);


Number.parseInt('4'); // int number = Integer.parseInt("4");

123.45678.toFixed(4); // .format("%.4f", 123.45678);

console.log(testVar);
var testVar = 5;

// console.log(testVar2);
// let testVar2 = 5;

console.log(5 === 5);
console.log(5 === "5");
console.log(5 === 6);

console.log(5 == 5);
console.log(5 == "5");
console.log(5 == 6);

let multiply = function (a, b) {
    return a * b;
}

console.log(multiply(5, 2));

let greet = function () {
    return "Hello!";
}

let sayHello = function (fn) {
    console.log("Hi");
    console.log(fn());
}

sayHello(greet);

let multiplyArrow = (a, b) => {
    return a * b;
}

console.log(multiplyArrow(5, 2));

// Adding elements to an array
// JavaScript:
const numbers3 = [1, 2, 3];
numbers3.push(4); // [1, 2, 3, 4]
// Java:
/*ArrayList<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3));
numbers.add(4); // [1, 2, 3, 4]*/

// Removing the last element from an array
// JavaScript:
const numbers4 = [1, 2, 3, 4];
numbers4.pop();
numbers4.pop(); // [1, 2]
// Java:
/*ArrayList<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
numbers.remove(numbers.size() - 1);
numbers.remove(numbers.size() - 1); // [1, 2]*/

// Removing the first element of an array
// JavaScript:
const numbers5 = [1, 2, 3, 4];
const firstElem = numbers5.shift(); // firstElem has value 1
// Java:
/*ArrayList<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
int firstElem = numbers.remove(0); // firstElem has value 1*/

// Adding elements to the beginning of an array
// JavaScript:
const numbers6 = [1, 2, 3, 4];
numbers6.unshift(5); // [5, 1, 2, 3, 4]
// Java:
/*ArrayList<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
numbers.add(0, 5); // [5, 1, 2, 3, 4]*/

// Joining array elements into a string
// JavaScript:
const output = numbers2.join(',');
// Java: (Using StringBuilder)
/*ArrayList<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
StringBuilder output = new StringBuilder();
for (int i = 0; i < numbers.size(); i++) {
    output.append(numbers.get(i));
    if (i < numbers.size() - 1) {
        output.append(",");
    }
}*/

// Reversing an array
// JavaScript:
const numbers = [1, 2, 3, 4];
const reversed = numbers.slice().reverse(); // [4, 3, 2, 1]
// Java:
/*ArrayList<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
Collections.reverse(numbers); // [4, 3, 2, 1]*/

// Sorting an array
// JavaScript:
const strings = ['hello', 'hi', 'veryLongOne', 'i'];
strings.sort((strA, strB) => strA.length - strB.length); // ["i","hi","hello","veryLongOne"]
// Java:
/*ArrayList<String> strings = new ArrayList<>(Arrays.asList("hello", "hi", "veryLongOne", "i"));
strings.sort(Comparator.comparing(String::length)); // ["i","hi","hello","veryLongOne"]*/

// Concatenating arrays
// JavaScript:
const concatenated = [1].concat([2, 3], [4, 5]); // [1, 2, 3, 4, 5]
// Java:
/*ArrayList<Integer> concatenated = new ArrayList<>(Arrays.asList(1));
concatenated.addAll(Arrays.asList(2, 3));
concatenated.addAll(Arrays.asList(4, 5)); // [1, 2, 3, 4, 5]*/

// Iterating over an array
// JavaScript:
['one', 'two', 'three', 'four'].forEach((element, index) => {
    console.log(`element on index ${index} is '${element}'`);
});
// Java:
/*ArrayList<String> elements = new ArrayList<>(Arrays.asList("one", "two", "three", "four"));
for (int i = 0; i < elements.size(); i++) {
    System.out.println("element on index " + i + " is '" + elements.get(i) + "'");
}*/

// Mapping an array
// JavaScript:
const mapped = ['one', 'two', 'three', 'four'].map(elem => elem.length); // [3, 3, 5, 4]
// Java:
/*ArrayList<String> elements = new ArrayList<>(Arrays.asList("one", "two", "three", "four"));
ArrayList<Integer> mapped = new ArrayList<>();
for (String elem : elements) {
    mapped.add(elem.length());
} // [3, 3, 5, 4]*/

// Checking if an element exists in an array
// JavaScript:
const includes = [1, 2, 3, 4].includes(3, 3); // false
// Java:
/*ArrayList<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
boolean includes = numbers.subList(3, numbers.size()).contains(3); // false*/

// Slicing an array
// JavaScript:
const sliced = [1, 2, 3, 4].slice(1, 2); // [2]
// Java:
/*ArrayList<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
List<Integer> sliced = numbers.subList(1, 2); // [2]*/

// Splicing an array
// JavaScript:
let numbers2 = [1, 2, 3, 4, 5];
const returnedValue = numbers2.splice(1, 3);
console.log(numbers2); // [1, 5]
console.log(returnedValue); // [2, 3, 4]
// Java: (Not exactly equivalent, Java's ArrayList doesn't have an exact splice equivalent)
/*ArrayList<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
List<Integer> returnedValue = numbers.subList(1, 4);
numbers.subList(1, 4).clear();
System.out.println(numbers); // [1, 5]
System.out.println(returnedValue); // [2, 3, 4]*/


