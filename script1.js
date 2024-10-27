// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #

// Triangle pattern
let pattern = "";
const maxRows = 4;

// increasing part of the triangle
for (let i = 1; i <= maxRows; i++) {
    pattern += "#".repeat(i) + "\n";
  }

  
// decreasing part of the triangle
for (let i = maxRows - 1; i >= 1; i--) {
    pattern += "#".repeat(i) + "\n";
  }

console.log(pattern);