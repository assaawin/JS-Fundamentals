#!/usr/bin/node

// Get the first argument
const firstArg = process.argv[2];

// Convert to integer using parseInt
const number = parseInt(firstArg);

// Check if the conversion resulted in a valid number
if (isNaN(number)) {
  console.log("Not a number");
} else {
  console.log("My number:", number);
}
