/* Question 4: Multiplication Table of 8
Create a while loop that prints the multiplication table of 8 from 8 × 1 to 8 × 12.
Expected Output: 8 x 1 = 8, 8 x 2 = 16, 8 x 3 = 24, ... and so
on */

let num = 1
let result = ""
while (num <= 12) {
    result = 8 * num
    console.log("8 x " + num + " = " + result)
    num++
}