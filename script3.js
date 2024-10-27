// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

// pattern
const size = 8;
let board = "";

for (let row = 0; row < size; row++) {
    let line = "";
    
    // Create alternating pattern for each row
    for (let col = 0; col < size; col++) {
      if ((row + col) % 2 === 0) {
        line += "#";
      } else {
        line += " ";
      }
    }
    
    /*
    Add the row to the board, 
    followed by a newline
    */
   
    board += line + "\n";
  }