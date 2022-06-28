for (var n=1; n<100; n++){
    if  (n % 3==0 && n % 5==0){
        console.log("fizzBuzz")}
    else if (n % 5==0){
        console.log("Buzz")}
    else if (n % 3==0){
        console.log("Fizz") }
    else{
        console.log(n)
    }    
  
    }

    // number2  
    var sum =0
for (var i=0; i<1000; i++){
    if (i%3==0 && i%5==0){
        sum+=i;
    }
} 
console.log(sum); 

// numb 3
 
for(var x=0;x<21; x++){
    if(x%2==0){
    console.log(x,  "is even")}
    else{
        console.log(x,  "is odd")
    }        
    
}
// numb 4
const  num = [-2, 4,-5, 6,0]
let biggest_num=num[0]
for (var m=0; m<num.length;m++){
    if(num[m]>biggest_num){
        biggest_num=num[m]
       
    } }
console.log(biggest_num)

// numb 5
function largest(y,z){
if (y>z){
return y
}
else{
return z
}
}
console.log(largest(10,40))

// numb 6
function leapyear(year){
if(year%4 && year%100 && year%400){
return year + " is a leap year"
}
else{
return year +  " is not a leap year"
}
}
console.log(leapyear(2000))

// 1. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
// 2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
// 3. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// 4. Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]
// 5. Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
// 6. Write a JavaScript program to find leap years from 2000 to 2022