#!/usr/bin/node

// Get the first argument and convert to integer
const x = parseInt(process.argv[2]);

// Check if the conversion resulted in a valid positive number
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  // Use a loop to print "C is fun" x times
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}
