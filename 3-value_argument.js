#!/usr/bin/node

// Get the first argument passed by user (process.argv[2])
// If no argument is passed, process.argv[2] will be undefined
const firstArg = process.argv[2];

// Check if firstArg is undefined (no argument passed)
if (firstArg === undefined) {
  console.log("No argument");
} else {
  console.log(firstArg);
}
