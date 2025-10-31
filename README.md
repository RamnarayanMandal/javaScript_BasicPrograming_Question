# JavaScript Basic Programming Questions

This repository contains a collection of fundamental JavaScript programs covering various programming concepts and algorithms. Each file demonstrates a specific programming problem solution.

## 📁 File Structure

### Number Operations

#### `ArmstrongNo.js`
Checks if a given number is an Armstrong number.
- **Description**: An Armstrong number is a number where the sum of its digits each raised to the power of the number of digits equals the number itself.
- **Example**: `153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153`
- **Features**:
  - Counts digits in the number
  - Calculates power of each digit
  - Compares sum with original number

#### `Fatorial.js`
Calculates the factorial of a given number.
- **Description**: Computes the product of all positive integers up to a given number.
- **Example**: `5! = 5 × 4 × 3 × 2 × 1 = 120`
- **Implementation**: Uses a for loop to multiply numbers iteratively

#### `primeNo.js`
Checks if a given number is a prime number.
- **Description**: Determines whether a number is only divisible by 1 and itself.
- **Implementation**: Checks divisibility from 2 up to the number

#### `strongNo.js`
Checks if a given number is a Strong number.
- **Description**: A Strong number is a number where the sum of factorials of its digits equals the number itself.
- **Example**: `145 = 1! + 4! + 5! = 1 + 24 + 120 = 145`
- **Features**:
  - Extracts each digit
  - Calculates factorial for each digit
  - Sums factorials and compares with original number

#### `OddAandEvenNo.js`
Checks if a number is even or odd.
- **Description**: Determines whether a number is divisible by 2 (even) or not (odd).
- **Implementation**: Uses modulo operator (`%`) to check remainder

### Number Reversing

#### `ReverseNumber.js`
Reverses a given number.
- **Description**: Reverses the digits of a number (e.g., 123 becomes 321).
- **Implementation**: Uses modulo and division operations to extract and reverse digits

### String Operations

#### `ReverseString.js`
Reverses a given string.
- **Description**: Reverses the characters in a string.
- **Implementation**: 
  - Using for loop (iterates from end to start)
  - Using while loop (alternative approach)

#### `palindromeString.js`
Checks if a string is a palindrome.
- **Description**: Determines if a string reads the same forwards and backwards.
- **Example**: "kayak" is a palindrome
- **Implementation**: Reverses string and compares with original

#### `Replace_space_Underscrores.js.js`
Replaces spaces with underscores and converts to lowercase.
- **Description**: Converts a string with spaces to snake_case format.
- **Example**: "Hello World This Is Js" → "hello_world_this_is_js"
- **Features**:
  - Splits string by spaces
  - Converts to lowercase
  - Joins with underscores

#### `Replace_underscores_capitalizeWords.js`
Replaces underscores with spaces and capitalizes each word.
- **Description**: Converts snake_case to Title Case.
- **Example**: "hello_world_this_is_js" → "Hello World This Is Js"
- **Features**:
  - Splits by underscores
  - Capitalizes first letter of each word
  - Joins with spaces

#### `count_word.js`
Counts occurrences of words and characters.
- **Description**: Multiple counting operations:
  1. Count repeated words in a string
  2. Count words in an array of strings
  3. Count occurrence of characters in a string
  4. Count occurrences by property in an array of objects
- **Examples**:
  - Word count: `"hello world hello"` → `{ 'hello': 2, 'world': 1 }`
  - Character count: `"hello"` → `{ 'h': 1, 'e': 1, 'l': 2, 'o': 1 }`

### Palindrome Operations

#### `palindrome.js`
Checks if a number is a palindrome.
- **Description**: Determines if a number reads the same forwards and backwards.
- **Example**: `121` is a palindrome number
- **Implementation**: Reverses the number and compares with original

### Array Operations

#### `count_repreat_no.js`
Counts repeated numbers in an array.
- **Description**: Counts how many times each number appears in an array.
- **Example**: `[5,5,5,5,8,8,9]` → `{ '5': 4, '8': 2, '9': 1 }`
- **Implementation**: Uses object to track occurrences

#### `Find_Missing_No_from_array.js`
Finds missing numbers from an array.
- **Description**: Identifies numbers missing from a sequence 1 to N.
- **Example**: Array `[1,2,3,5]` with count 10 → Missing: `[4,6,7,8,9,10]`
- **Features**:
  - Checks if each number from 1 to count exists in array
  - Returns array of missing numbers

### Series Generation

#### `febonacciSerires.js`
Generates Fibonacci series.
- **Description**: Generates the Fibonacci sequence where each number is the sum of the two preceding ones.
- **Sequence**: `0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...`
- **Implementation**: 
  - Using for loop
  - Using while loop

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your system

### Running the Programs

Each file can be run independently using Node.js:

```bash
node filename.js
```

### Example

```bash
node ArmstrongNo.js
# Output: 153 is Armstong No
```

## 📝 Notes

- All programs are standalone and can be executed independently
- Programs contain example input values that can be modified
- Some programs include comments explaining the logic
- Code follows basic JavaScript syntax and practices

## 🔧 Program Categories

1. **Number Theory**: Armstrong numbers, Prime numbers, Strong numbers, Factorials
2. **String Manipulation**: Reversing, Palindrome checking, Case conversion
3. **Array Operations**: Counting, Finding missing numbers
4. **Series Generation**: Fibonacci series
5. **Basic Operations**: Even/Odd checking, Number reversing

## 📚 Learning Objectives

These programs cover:
- Loops (for, while)
- Conditional statements (if/else)
- Array manipulation methods
- String manipulation methods
- Mathematical operations
- Object creation and manipulation
- Algorithm implementation

## 💡 Tips for Usage

- Modify the input variables at the top of each file to test with different values
- Use console.log outputs to understand the program flow
- Experiment with different input types to see edge cases
- Combine concepts from different files to solve more complex problems

## 📄 License

This repository contains basic programming examples for educational purposes.

