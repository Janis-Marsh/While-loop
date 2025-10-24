/* Question 2: Calculate Sum of Even Numbers
Use a while loop to calculate and print the sum of all even numbers from 2 to
30. Expected Output: The sum should be 240 */
let even = 2;
let sum = 0;
while(even <= 30){
    sum = sum + even
    even = even + 2
}  console.log(sum)