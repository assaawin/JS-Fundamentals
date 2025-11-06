#!/usr/bin/node

// Get the first argument and convert to integer
const size = parseInt(process.argv[2]);

// Check if the conversion resulted in a valid positive number
if (isNaN(size)) {
  console.log("Missing size");
} else if (size > 0) {
  // Use nested loops to print the square
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      row += "X";
    }
    console.log(row);
  }
}
