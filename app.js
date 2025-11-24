// for(var i =1; i<=4; i++){
//     console.log("i",i);

//     for (var j=1; j<=3;j++){
//         console.log("j",j);
//     for (var k=1;k<=3;k++){
//         console.log("K",k);
//     }
//     }
// }

// for(var i =1; i<=4; i++){
//     for (var j=1; j<=3;j++){
//     for (var k=1;k<=3;k++){
//         console.log(i*j*k);
//     }
//     }
// }
//Qustion #1
// var FirstName = ["Muhammad","Syed","Ahmed"];
// var lastName = ["Ahmed","Ali","Mustafa"];

// for(var i=0;i<FirstName.length;i++){
//     for(var j=0;j<lastName.length;j++){
//         var fullName = FirstName[i]+ " " + lastName[j];
//         console.log(fullName);
//     }
// }

//Assignment
//Q#1

// var naMe = "Hello World"

// for(var i=1;i<=5;i++){
//     console.log(naMe , i);
// }
// //Q#2

// for(var i=1;i<=10;i++){
//     console.log(i);
// }
// //Q#3

// var nUmber1 = +prompt("Enter a Number to Print its multiplication table");
// var nUmber2 = +prompt("Prevent this page for creating additional dialogs");

// for(var i=1;i<=nUmber2;i++){
//     console.log(nUmber1+" x "+ i +" = "+ nUmber1*i);
// }

// //Q#4

// var Mobile = ["Nokia","Samsung","Apple","Sony","Hvawer"]

// for(var j=0;j<Mobile.length;j++){
//     console.log(Mobile[j]);
// }

//Q#5

// var Fruits = ["Apple","Banana","Mango","Orange","Strawberry"]

// for(var k=0;k<Fruits.length;k++){
//     console.log(Fruits[k]);
// }
// for(var k=0;k<Fruits.length;k++){
//     console.log("Element at index "+ k + " is " + Fruits[k]);
// }

//Q#6

// var Inpurt = +prompt("Enter any Value");
// var arr = [];

// console.log("Enter any Value ", Inpurt);

// for(var l = 0;l<Inpurt;l++){
//         var FIelds = prompt("Enter number of index"+ l);
//         arr.push(FIelds);
// }
// for(var m=0;m<arr.length;m++){
//     console.log("Item",arr[m]);
// }

//Q#7
// console.log("Counting");
// for(var n=1;n<=20;n++){
//     console.log(n);
// }
// console.log("Reverse Counting");
// for(var o=10;o>=1;o--){
//     console.log(o);
// }
// console.log("EVEN");
// for(var o=0;o<=20;o++){
//     if(o%2==0){
//         console.log(o);
//     }
// }
// console.log("ODD");
// for(var o=0;o<=20;o++){
//     if(o%2!==0){
//         console.log(o);
//     }
// }
// console.log("Series");
// for(var o=1;o<=20;o++){
//     if(o%2==0){
//         console.log(o+"K");
//     }
// }

//Q#8

// var cAke = ["cake","apple pie","cookie","chips","patties"];
// var input = prompt("Welcome to ABC Bakery! What do you want to order?")
// var found = false;

// for(var p=0;p<cAke.length;p++){
//     if(cAke[p]== input){
//         found = true;
//         break;
//     }
// }
// if(found){
//     console.log(input + " is available at index " + p + " in our bakery.");
// }
// else{
//     console.log("We are sorry! " + input + " is not available in our bakery.");
// }

//Q#9

// var numbers = [24, 53, 78, 91, 12];

// var largest = numbers[0];

// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }
// console.log("Array items: " + numbers);
// console.log("The largest number is: " + largest);

//Q#10

// var numbers = [24, 53, 78, 91, 12];

// var Smallest = numbers[0];

// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] < Smallest) {
//         Smallest = numbers[i];
//     }
// }
// console.log("Array items: " + numbers);
// console.log("The Smallest number is: " + Smallest);

//Q#11

// var numbers = [24, 53, 78, 91, 12];

// var largest = numbers[0]
// var Smallest = numbers[0];

// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] < Smallest) {
//         Smallest = numbers[i];
//     }
//     else if(numbers[i] > largest){
//         largest = numbers[i];
//     }

// }
// console.log("Array items: " + numbers);
// console.log("The Smallest number is: " + Smallest);
// console.log("The largest number is: " + largest);

//Q#12

// console.log("Multiples of 5 (1 to 100):");

// for (var i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }
// }

//Q#13

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// console.log("Student"+" "+ "Score");

// for (var i = 0; i < students.length; i++) {
//     console.log(students[i]+ "     " + scores[i]);
// }

//Q#14

// var score = [12, 45, 3, 22, 34, 50];
// var input5 = +prompt("Please Enter  desired stop value. which are [12, 45, 3, 22, 34, 50]");
// var found = false;
// for(var i = 0; i <= score.length;i++){
//     console.log(score[i]);
//     if(score[i] == input5){    
//     found = true;
//     break;
//     }
// }
// if(!found){
//         console.log("Connot Find the Value");
// }

//Q#15

// var numberA = [[1,2,3],[4,5,6],[7,8,9]];
// for(var i=0;i < numberA.length;i++){
//     console.log(numberA[i]);
// }

//Q#16

// var input6 = +prompt("Enter the Number this decreasing by 0.5");
// for(var o=input6;o<=input6;o--){
//     console.log(o);
// }

//Q#18

// var product = 1;
// for(var o=1;o<=7;o++){
//     if(o%2!==0){
//         console.log(o);
//         product = o*product;
//     }
// }
// console.log("The Product of Odd integer from 1 to 7 is",product);