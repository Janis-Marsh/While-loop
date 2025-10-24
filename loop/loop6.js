/* Question 6: Sum of Odd Numbers
Use a while loop to find and print the sum of all odd numbers from 1 to 25.
Expected Output: The sum should be 169*/

let odd = 1;
let sum = 0;
while(odd <= 25){
    sum = sum + odd
    odd = odd + 2
}  console.log(sum)