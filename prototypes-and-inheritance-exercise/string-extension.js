// ⦁	2. String Extension
// Extend the built-in String object with additional functionality. Implement the following functions:
// ⦁	ensureStart(str) – if the current string doesn't start with the str parameter, return a new string in which str parameter appended to the beginning of the current string, otherwise returns the original string
// ⦁	ensureEnd(str) – if the current string doesn't end with str parameter, return a new string in which str parameter appended to the end of the current string, otherwise returns the original string
// ⦁	isEmpty() - return true if the string is empty and false otherwise
// ⦁	truncate(n) – returns the string truncated to n characters by removing words and appends an ellipsis (three periods) to the end. If a string is less than n characters long, return the same string. If it is longer, split the string where a space occurs and append an ellipsis to it so that the total length is less than or equal to n. If no space occurs anywhere in the string, return n - 3 characters and an ellipsis. If n is less than 4, return n amount of periods.
// ⦁	format(string, …params) - static method to replace placeholders with parameters. A placeholder is a number surrounded by curly braces. If parameter index cannot be found for a certain placeholder, do not modify it. Note static methods are attached to the String object instead of its prototype. See the examples for more info.
// Note strings are immutable, so your functions will return new strings as a result.
// Input / Output
// Your main code should be structured as an IIFE without input or output - it should modify the existing String prototype instead.
// Input and output of the extension functions should be as described above.

(() => {

    String.prototype.ensureStart = function (str) {
        return !this.startsWith(str) ? str + this : this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        return !this.endsWith(str) ? this + str : this.toString();
    }

    String.prototype.isEmpty = function () {
        return !this.toString();
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }

        if (this.length <= n) {
            return this.toString();
        }

        if (this.includes(' ')) {
            let words = this.split(' ');
            let res = [];
            for (let word of words) {
                if (res.join(' ').length + word.length + 3 <= n) {
                    res.push(word);
                } else {
                    break;
                }
            }
            return res.join(' ') + '...';
        }
    }

    String.format = function (str, ...params) {
        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i}}`, params[i]);
        }
        return str;
    }

})()

let str = 'hello my string';
let emptyStr = '';

// str = str.ensureStart('my');
// console.log(str);
// str = str.ensureStart('hello ');
// console.log(str);

// str = str.ensureEnd('this');
// console.log(str);
// str = str.ensureEnd(' nasko');
// console.log(str);

str = str.isEmpty();
console.log(str);

// emptyStr = emptyStr.isEmpty();
// console.log(emptyStr);

// str = str.truncate(16);
// console.log(str);

// str = str.truncate(14);
// console.log(str);

// str = str.truncate(8);
// console.log(str);

// str = str.truncate(4);
// console.log(str);

// str = str.truncate(2);
// console.log(str);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str);

str = String.format('jumps {0} {1}',
    'dog');
console.log(str);
