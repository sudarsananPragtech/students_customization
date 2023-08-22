
function new_func() {

//     console.log('hello world.....!!!');
//     var line = 'hello world.....!!!'
//     console.log(typeof (line));
//     var a = 47;
//     console.log(typeof (a));
//     var b = 629.5;
//     console.log(typeof (b));
//     var x = 25;
//     var z = 0;
//     result = x / z;
//     console.log(result);

//     var x = 'hello';
//     var y = 100;
//     result = x * y;
//     console.log(result);
//     var a = 10;
//     var b = 9;
//     console.log(a == b)

//     var r;
//     console.log(r)

//     var m = null;
//     console.log(m)

//     var int = '1234'
//     console.log(typeof(int))
//     var str = Number(int)
//     console.log(typeof(str))

//     bigNum = BigInt("123422222222222222222222222222222222222");
//     console.log(bigNum);
      

//     var student = {firstName: 'john', class: 7};
//     console.log(typeof(student))


// var str = false;
// console.log(typeof(str))

// var num = 4;
// result = str === num;
// console.log(result)

// var a = 0
// console.log(typeof(a))
// var a = "5"
// var b = "2.5"
// int = Number(a)
// float = parseFloat(b)
// result = int* float
// console.log(result)

// var num = 1
// bool = Boolean(num)
// console.log(bool)

// if ("sudu") {
//     console.log("This is a truthy value.");
// }

// if (10) {
//     console.log("This is a truthy value.");
//   }

// const obj = { name: "sudu" };
//    if (obj) {
//      console.log("This is a truthy value.");
//    }

// const Array = [];
//    if (Array) {
//      console.log("This is a truthy value.");
//    }

// const Array = [1,2,3];
//    if (Array) {
//      console.log("This is a truthy value.");
//    }

// if ("") {
//   } else {
//     console.log("This is a falsy value.");
//   }

// if (NaN) {
//   } else {
//     console.log("This is a falsy value.");
//   }

// if (null) {
//   } else {
//     console.log("This is a falsy value.");
//   }

// if (0) {
//   } else {
//     console.log("This is a falsy value.");
//   }

// let myVariable;
//    if (myVariable) {
//    } else {
//      console.log("This is a falsy value.");
//    }

// function check(name) {
//     name = name || "Sudu"
//     return name

// }
// console.log(check('Anandhu'))
// console.log(check())

// function isTruthy(value) {
//     return value ? true : false;
// }
// console.log(isTruthy(0));
// console.log(isTruthy(42));

// let count = 0;
// while (count <10) {
//     console.log("This will be printed.");
//     count++;
// }

// const String = "12.3";
// const Int = parseInt(String);
// const Float = parseFloat(String);
// console.log(Int);  
// console.log(Float); 

// const String = "42";
// const Value = parseInt(String);
// console.log(Value);

// const String = "1A";
// const Value = parseInt(String, 16);
// console.log(Value);

// const String = "abc123";
// const Value = parseInt(String);
// console.log(Value);

// const String = "3.14";
// const Value = parseFloat(String);
// console.log(Value);

// const String = "A12";
// const Value = parseInt(String);
// console.log(Value);

// const string = "   12345   ";
// const Value = parseInt(string);
// console.log(Value);

// const String = "abc123";
// const Value = Number(String);
// console.log(Value);

// const String = "abc";
// const Value = Number(String);
// console.log(Value);

// var num = 123.4567
// two_deci = num.toFixed(2)
// console.log(two_deci)

// function isfalse(value){
//     return !value
// }
// console.log(isfalse(0))

// const Number = 2.5e6;
// const string = Number.toString();
// console.log(string);

// const num1 = 0.5; 
// const num2 = 1.5; 
// console.log(num1.toFixed(0)); 
// console.log(num2.toFixed(0));

// const number = 2;
// const stringTrail = number.toFixed(4);
// console.log(stringTrail)

// const number = 12345.6789;
// const formatted = number.toLocaleString('fr-FR'); 
// console.log(formatted);

// const currencyValue = 1234567.89;
// const currencyFormatter = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD'
// });
// const formattedCurrency = currencyFormatter.format(currencyValue);
// console.log(formattedCurrency);

// var str = "12"
// var num = 8
// result = str+num
// // console.log(result)

// var str = "42"
// num = Number(str)
// console.log(num)

// var num = 3.14159
// str = String(num)
// console.log(str)

// function check(name) {
//     name = name || false
//     return name
// }
// console.log(check(true))
// console.log(check())

// function convertToString(number) {
//     return number.toString();
//   }
//   const integerNumber = 123;
//   const floatingNumber = 3.14159;
//   const integerString = convertToString(integerNumber);
//   const floatingString = convertToString(floatingNumber);
//   console.log(integerString); 
//   console.log(floatingString);

// const fruits = ["apple", "banana", "cherry"];
// const String = fruits.join(', ');
// console.log(String);

// const fruitString = "apple,banana,cherry";
// const fruitArray = fruitString.split(',');
// console.log(fruitArray);

// function convertBool( value) {
//     return value ? 1 : 0
// }
// console.log(convertBool(true))
// console.log(convertBool(false))


// var num = 234;
// var str = "123";
// console.log(isNaN(num))
// console.log(isNaN(str))

// const value1 = 42; 
// const value2 = "Hello"; 
// console.log(isNaN(value1));
// console.log(isNaN(value2)); 

// const num = 42;
// const str = "Hello";
// const result = num + str;
// console.log(result);

// function compareValues(value1, value2) {
    
//     if (value1 === undefined || value2 === undefined) {
//         return 'undefined'
//     }
//     else if (isNaN(value1) || isNaN(value2)) {
//         return 'Not a number';
//     }
//     else if (value1 === null || value2 === null){
//         return 'NUll value'
//     }
//     if (value1 === value2) {
//         return 'Equels';
//     }
//     else {
//         return 'Not Equal';
//     }
    
// }
// var a;
// console.log(compareValues(1,2));
// console.log(compareValues(a,2));
// console.log(compareValues("a",2));
// console.log(compareValues());
// console.log(compareValues(2,2));

// function SameDay(date1, date2) {
//     if (date1.getFullYear() === date2.getFullYear()  && date1.getMonth() === date2.getMonth() &&
//     date1.getDate() === date2.getDate() ){
//         return "Both date is same"
//     }
//     else {
//         return "Both are not same date"
//     }
    
//   }
//   const date1 = new Date(2023, 7, 11); 
//   const date2 = new Date(2023, 7, 11); 
//   const date3 = new Date(2023, 7, 12); 
  
//   console.log(SameDay(date1, date2));
//   console.log(SameDay(date1, date3)); 
  
// function equelArray(arr1, arr2) {
//     if (arr1.length != arr2.length) {
//         return "Arrays are not same"
//     }
//     else if (arr1.sort().join(',') === arr2.sort().join(',')){
//         return "Both arrays are same"
//     }
//     else {
//         return "Both Arrays are different"
//     }
// }
// array1 = [1,2,3]
// array2 = [1,3,2]
// array3 = [3,4,5]
// console.log(equelArray(array1, array2))
// console.log(equelArray(array2, array3))

// const userInput = prompt("Please enter username:");
// const userPass = prompt("Plese enter a Password")

// var users = { uname : 'user', pass : 'pass'}

// if ((userInput === users.uname) && (userPass === users.pass)) {
//   console.log("Welcome");
// } else {
//   console.log("User name or pass are not same");
// }

// let a = ["1"]
// console.log(Array.isArray(a))
// let b = "1"
// console.log(Array.isArray(b))
  

// let x = [1, 2, 3, 4];
// console.log("Original array:")
// console.log(x)
// let y = x.copyWithin()
// console.log("Clone of the said array:")
// console.log(y)

// let x = [1, 2, 3, 4];
// console.log("Original array:")
// console.log(x)
// let y = [...x]
// console.log("Clone of the said array:")
// console.log(y)

// function cloneArray(arr) {
//     let y = arr.slice();
//     return y
//   }

  
// const originalArray = [1, 2, 3, 4, 5];
// console.log(originalArray); 
// const clonedArray = cloneArray(originalArray);
// console.log(clonedArray); 
  

// let arr = [4,6,2,11,32,9,7,3]
// sorted = arr.slice().sort((a, b) => a - b);
// console.log(sorted)

// function moveArrayElement(arr, fromIndex, toIndex) {
//     const element = arr.splice(fromIndex);
//     console.log(element)
//     arr.splice(toIndex, 0, element);
//     return arr;
//   }
//   var arr1 = [10, 20, 30, 40, 50];
//   moveArrayElement(arr1, 2, 4);
//   console.log(arr1);


// var array = ['a',1,3,3,2,'a',1,'c',4,'a','c',1,3,3,'r',5]
// var count = 0;
// var loop = 1;
// var freequent;
// for (var i =0; i<array.length; i++){
//     for (j=i; j<array.length; j++){
//         if (array[i] == array[j]) 
//             count++;
//         if (loop<count) {
//             loop = count;
//             freequent = array[i]
//     }
//     }
//     count=0
// }
// console.log("Most freequent data is '" + freequent+"' it repeats '" +loop +"' times ) ") ;


// function arraymove(arr, fromIndex, toIndex) {
//     var element = arr[fromIndex];
//     arr.splice(fromIndex, 1);
//     arr.splice(toIndex,0 , element);
// }

// var arr1 = [10, 20, 30, 40, 50, 60];
// arraymove(arr1, 1, 3);
// console.log(arr1);


// function tempratureCheck(celcius, fahrenheit){
//     cel = ((fahrenheit-32)/9)*5
//     fhar = ((celcius*9)/5)+32
//     console.log(cel)
//     console.log(fhar)
// }
// tempratureCheck(60,45)

// const url = window.location.href;
// console.log("The url is : ${url}");

// const currentURL = window.location.href;
// console.log("The current website URL is:",currentURL);

// function multiple(number) {
//     return (number % 3 === 0 ) || (number %7 === 0 )
// }
// console.log(multiple(11))

// function vowels(word) {
//     let count = 0
//     vowelWords = 'aAeEiIoOuU'
//     for (let i = 0; i<word.length; i++) {
//         if (vowelWords.includes(word[i])){
//             count++
//         }
//     }
//     return count
// }
// console.log(vowels("hello"))


// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//       }
    
//       calculateArea() {
//         return this.width * this.height;
//       }
    
//       calculatePerimeter() {
//         return 2 * (this.width + this.height);
//       }
// }
// console.log(new Rectangle(2, 4).calculateArea());
// console.log(new Rectangle(2, 4).calculatePerimeter());

// class PragmaticFresher {
//     constructor(name, qualification) {
//       this.name = name;
//       this.qualification = qualification;
//       this.departments = [];
//     }
  
//     addDepartment(department) {
//       this.departments.push(department);
//     }
  
//     removeDepartment(department) {
//       const index = this.departments.indexOf(department);
//       if (index !== -1) {
//         this.departments.splice(index, 1);
//       }
//     }
  
//     displayDepartments() {
//       console.log(`Departments for ${this.name}:`);
//       for (const department of this.departments) {
//         console.log(department);
//       }
//     }
//   }
  
//   // Creating an instance of the PragmaticFresher class
//   const fresher = new PragmaticFresher("John Doe", "Computer Science");
  
//   // Adding and removing departments
//   fresher.addDepartment("Software Development");
//   fresher.addDepartment("Quality Assurance");
//   fresher.addDepartment("Technical Support");
//   fresher.removeDepartment("Quality Assurance");
  
//   // Displaying all departments
//   fresher.displayDepartments();
  
// function addition(num1, num2) {
//   sum  = num1+num2
//   return sum
// }
// console.log(addition(20,10))

// function addition(num) {
//   if (num %2 ===0) {
//     console.log("The number is an Even number")
//   }
//   else console.log("The number is an odd number")
// }
// addition(21)


// function reverse(string) {
//   let newString = ''
//   for (let i=string.length-1; i>=0; i--) {
//     newString += string[i]
//   }
//   return newString
// }
// console.log(reverse('hello hi'))

// function maximum(arr) {
//   var largest = 0;
//   for (let i=0; i<arr.length; i++) {
//       if (arr[i] > largest){
//         largest = arr[i]
//       }
//   }
//   console.log(largest)
    
// }
// array = [99,2,63,33,4]
// console.log("11111111",array[1])
// maximum(array)

// function findMaxValue(numbers) {
//   let max = numbers[0];
//    for (let i = 1; i < numbers.length; i++) {
//      if (numbers[i] > max) {
//        max = numbers[i];
//      }
//    }
//    return max;
//  }
 
//  const numbersArray = [101, 5, 20, 8, 15,100];
//  const maxValue = findMaxValue(numbersArray);
//  console.log(`The maximum value is: ${maxValue}`);


// function evenfilter(arr) {
//   var evenarray = new Array();
//   for (let i=0; i<arr.length; i++) {
//       if (arr[i] %2 == 0){
//         evenarray.push(arr[i])
//       }
//   }
//   console.log(evenarray)
    
// }
// array = [99,2,63,32,4,67,44,56,51]
// evenfilter(array)


// function evenfilter(arr) {
//   var evenArray = arr.filter(function(even) {
//     if (even%2 ===0){
//     return true
//     }
//   })
//   return evenArray
    
// }
// array = [99,2,63,32,4,67,44,56,51]
// console.log(evenfilter(array))


// function leapyear(year)
// {
// return (year % 100 === 0) ? ( year % 400 === 0) : (year % 4 === 0);
// }
// console. log(leapyear(2016));
// console. log(leapyear(2017));
// console. log(leapyear(2018));
// console. log(leapyear(2020));


// function categorize(age){
//   if (age>0 && age<12) {
//     console.log("You are a Child...!")
//   }
//   else if (age >12 && age<=19) {
//     console.log("You are a Teen Ager...!")
//   }
//   else if (age >20 && age<=59) {
//     console.log("You are an Adult...!")
//   }
//   else if (age>59) {
//     console.log("You are a senior sitizen...!")
//   }
//   else console.log("Age cound not be Zero......")
// }
// categorize(90)


// const read_permission = 4;
// const write_permission = 2;
// const execute_permission = 1;

// function hasPermission(permissions, permissionToCheck) {
//   return (permissions & permissionToCheck) === permissionToCheck;
// }

// const userPermissions = read_permission | write_permission;

// console.log("User has read permission:", hasPermission(userPermissions, read_permission));
// console.log("User has write permission:", hasPermission(userPermissions, write_permission));
// console.log("User has execute permission:", hasPermission(userPermissions, execute_permission));

// console.log((6&4)===4)
// console.log((6&2)===2)
// console.log((6&1)===1)
// const letter = 3 | 5 
// OR STATEMENTS
// 4 0000 0100
// 2 0000 0010
// Result
// 6 0000 0110
// AND STATEMENTS
// 6 0000 0110
// 4 0000 0100
// 3 0000 0011
// 2 0000 0010
// 1 0000 0001
// Result
// 4 0000 0100
// 2 0000 0010
// 0 0000 0000


// let num = 1
// do {
//     console.log("Number is :"+ num);
//     num++;
// }
// while (num<=5);

// let num = 1
// while (num<=5) {
//     console.log("Number is :"+ num);
//     num++;
// }

// const add = (num1,num2) => {
//     sum = num1 + num2
//     return sum
// }
// console.log(add(10,22))

// DATE 18/08/2023

// 1
// function printNumber(num) {
//     if (num <=10) {
//         console.log(num)
//         num++
//         printNumber(num)
//     }
// }
// printNumber(1)

// 2
// function printNumber(num) {
//     if (num >0) {
//         console.log(num)
//         num--
//         printNumber(num)
//     }
//     else console.log('Finished')
// }
// printNumber(10)

// 3
// function printNumber(num) {
//     if (num ===5) {
//         console.log(`The number ${num} is identified`)
//     } else if (num<6) {
//         console.log(`The number ${num} is not valid`)
//         num++
//         printNumber(num)
//     }
// }
// printNumber(1)

// 4
// function AddNumber(num1, num2) {
//     if (num1 <= 0) {
//         console.log("Number could not be '0' or less than '0' ")
//     }else if ( num2 <= 0) {
//         console.log("Number could not be '0' or less than '0' ")
//     }
//     else  {sum = num1 + num2
//     console.log(`The sum of the numbers is ${sum}`)
// }
// }
// AddNumber(0,36)

// 5
// function EvenNumber(num1) {
//     if (num1 %2 === 0) {
//         console.log("Number is even")
//     }
//     else console.log(`Number is odd`)
// }
// EvenNumber(33)

// 6
// function compareValues(value1, value2) {
//     if (value1 === undefined || value2 === undefined) {
//         return 'undefined'
//     }
//     else if (isNaN(value1) || isNaN(value2)) {
//         return 'Not a number';
//     }
//     else if (value1 === null || value2 === null){
//         return 'NUll value'
//     }
//     if (value1 === value2) {
//         return 'Equels';
//     }
//     else {
//         return 'Not Equal';
//     }
// }
// var a;
// console.log(compareValues(1,2));
// console.log(compareValues(a,2));
// console.log(compareValues("a",2));
// console.log(compareValues(null,9));
// console.log(compareValues(2,2));

// 7
// function isPrimeNumber(n) {
//     for (var i = 2; i < n; i++) { 
//       if(n % i === 0) return false; 
//         }
//     return n > 1; 
//   }
//   console.log(isPrimeNumber(1));
//   console.log(isPrimeNumber(2));
//   console.log(isPrimeNumber(9));
//   console.log(isPrimeNumber(11));
//   console.log(isPrimeNumber(131));

// 8
// function IsNumber(num) {
//     if (Number(num)===num) {
//         console.log("It is an integer")
//     }
//     else console.log("It is not an integer")
// }
// IsNumber(2)

// 9
// for ( var i = 1; i <= 100; i++ )
// {
//   if ( i%3 === 0 && i%5 === 0 )
//   {
//     console.log( i + " FizzBuzz" );
//   }
//   else if ( i%3 === 0 ) 
//   {
//     console.log(i+ " Fizz" );
//   }
//   else if ( i%5 === 0 ) 
//   {
//     console.log(i+ " Buzz" );
//   }
//   else
//   {
//     console.log(i);
//   }
// }

// 10
// function IsPassed() {
//     var students = [
//         {name : 'Sudarsanan', marks :95},
//         {name : 'Anandhu', marks : 90},
//         {name : 'Razeen', marks : 55},
//         {name : 'Sreekuttan', marks : 86},
//         {name : 'Athunya', marks : 20}
//     ]
//     for (let i = 0; i<students.length; i++) {
//         if (students[i].marks>=90) {
//             console.log(`Hello ${students[i].name} You got ${students[i].marks} and it is Excellent`)
//         }
//         else if (students[i].marks>=70 && students[i].marks<90 ) {
//             console.log(`Hello ${students[i].name} You got ${students[i].marks} and it is Good`)
//         }
//         else if (students[i].marks>=50 && students[i].marks<70) {
//             console.log(`Hello ${students[i].name} You got ${students[i].marks} and you can improve`)
//         }
//         else console.log(`Hello ${students[i].name} You got ${students[i].marks} and You are failed`)
//     }
// }
// IsPassed()

// SWITCH STATEMENTS

// 1
// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }
//   console.log(day)

// 2
// fruits = 'Apple'
// switch(fruits) {
//     case "Banana":
//     case 'Apple' :
//     case 'Orange' :
//         console.log('It is a fruit')
//       break;
//     case "Brinjal":
//         console.log("It is a vegetable")
//       break;
//   }

// 3
// let result;
// const operator = '/'
// const number1 = 15
// const number2 = 5
// switch(operator) {
//     case '+':
//         result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;
//     case '-':
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;
//     case '*':
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;
//     case '/':
//         result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;
//     default:
//         console.log('Invalid operator');
//         break;
// }

// 4
// var message = "hi";
// switch (message) {
//   case "hello": {
//     const message = "hello, welcome!";
//     console.log(message);
//     break;
//   }
//   case "hi": {
//     const message = "hi, how are you?";
//     console.log(message);
//     break;
//   }
//   default: {
//     console.log("invalid message received.");
//   }
// }

// 5
// const sides = 4
// switch (sides) {
//     case 3:{
//       console.log("This shape is a Triangle");
//       break;
//     }
//     case 4:{
//       console.log("This shape is a rectangle.");
//       break;
//     }
//     case 5:{
//       console.log("This shape is a Pentagon.");
//       break;
//     }
//   }

// EXCEPTION

// 1

// function ExceptionFunction() {
//   const x = 2
//   try {
//     decodeURI("%%%")

//     x.toUppercase()

//     if (x.toPrecision(500)){
//       throw err
//     }

//     if (x = y + 1){
//       throw err
//     }
//     if(x === "") throw "is empty";
//     if(x<18) throw "You are not eligible for License";
//     if(x >=18 && x< 60) throw "Yes you are eligible for Licence test";
//     if(x >=60) throw "Sorry You are age over";
//   }
//   catch(err) {
//     console.log("Error: " + err + ".")
//   }
//   finally {
//     console.log(x)
//   }
// }
// ExceptionFunction()


// function gradeValidation() {
//     let grade = 3
//     try {
//       if (grade === "") {
//         throw "Input is empty";
//       }

//       decodeURI("%%%")

//       grade.toUppercase()

//       if (grade.toPrecision(500)){
//         throw err
//       }

//       if (grade = y + 1){
//         throw err
//       }
//       if (grade[2]=== 0) {
//         throw 'Index out of range'
//       }
  
//       if (grade > 50) {
//         throw "You have passed the Xm";
//       }

//       if (grade < 50) {
//         throw "You have failed the Xm";
//       }
      
//     }
//     catch (error) {
//       console.log("Error:" + error);
//     }
//     finally{
//         console.log(grade)
//     }
// }
  
// gradeValidation()


// ////////////////22/08/2023///////////////////////////
////////////////////IMPLICIT////////////////////////////

// 1
// const mainObject = {
//   name : 'Sudarsanan',
//   lastName : 'P.R',
//   proffession : 'Software Developer',
//   place : 'Thrissur',
//   welcome : function() {
//     console.log(`Welcome ${this.name} ${this.lastName} from ${this.place} To Pragmetic Techsoft as a ${this.proffession}`)
//   }
// }
// mainObject.welcome()

// 2

// function greeting(obj) {
//   obj.Message = function() {
//     console.log(`${this.name} is ${this.age} years old!`);
//   }
// };

// const tom = {
//   name: 'Tom',
//   age: 7
// };

// const jerry = {
//   name: 'jerry',
//   age: 3
// };

// greeting(tom);
// greeting(jerry);

// tom.Message();
// jerry.Message();


// 3
// function greeting(obj) {
//   obj.Message = function() {
//     console.log(`Hi ${this.name} You are ${this.age} years old!`);
//   }
// };
// const details = {
//   name: 'Anandhu',
//   age: 27
//   };
// greeting(details);
// details.Message()

// 4
// const details = {
//   name: 'Anandhu',
//   age: 27,
//   greeting : function(obj) {
//     obj.Message = function() {
//       console.log(`Hi ${this.name} You are ${this.age} years old!`);
//     }
//   }
//   };
//   const param = {
//     name: 'Sudarsanan',
//   age: 27
//   }
// details.greeting(param);
// param.Message()

// 5
// const details = {
//   name: 'Anandhu',
//   age: 27,
//   greeting : function(obj) {
//     console.log(`Hi ${this.name} You are ${this.age} years old!`);
//     obj.Message = function() {
//       console.log(`Hi ${this.name} You are ${this.age} years old!`);
//     }
//   }
//   };
//   const param = {
//     name: 'Sudarsanan',
//   age: 27
//   }
// details.greeting(param);
// param.Message()

//////////////////////////////IMPLICIT//////////////////////////////////

// 1
// const getName = function() {
//   console.log(`hello ${this.name} from ${this.address}`);
// }
// let user = {
// name: 'Sangadan',
// address: 'Paralokam'  
// };

// getName.call(user);

// 2
// const getName = function() {
//   console.log(`hello ${this.name} from ${this.address}`);
// }
// let user = {
// name: 'Sangadan',
// address: 'Paralokam'  
// };
// getName.call(user);

// 3
// let getName = function(hobby1, hobby2) {
//   console.log(this.name +' from '+ this.place + ' likes ' + hobby1 + ' and ' + hobby2);
// }
// let user = {
// name: 'Sudarsanan',
// place: 'Thrissur'  
// };
// let hobbies = ['Swimming', 'Cricketing'];
// getName.call(user, hobbies[0], hobbies[1]);


// 4
// let getName = function(company) {
//   console.log(`${this.name} from ${this.address} works in a ${company.type} company named ${company.cname} in ${company.place}`);
// }
// let user = {
// name: 'Sudarsanan',
// address: 'Thrissur'  
// };
// let company = {
//   cname : 'Pragmetic techsoft',
//   place : 'Kochi',
//   type : 'Software'
// }
// getName.call(user, company);

// 5
// function Avengers(name, charactor) {
//   this.name = name;
//   this.charactor = charactor;
// }

// function MarvelAvengers(name, charactor, specification) {
//   Avengers.call(this, name, charactor);
//   Avengers.apply(this, [name, charactor]);
//   this.specification = specification;
// }

// var tony = new MarvelAvengers("TONY STARK", "IRON MAN", "Human With ARC Reactor and metal body");
// console.log(tony.name+' is ' + tony.charactor + ' and ' + tony.specification);


//////////////////////////DEFAULT BINDING////////////////////////////

// 1
// function getSpiderMan(){
//   console.log("Peter Parker is : ", this.ultraBall);
// }

// var ultraBall = "Spiderman";
// getSpiderMan();

// 2
// function getHUlk(){
// var hulk = "Hulk";

//   console.log("Bruce Banner is : ", this.hulk);
// }

// getHUlk();

// 3
// function getHUlk(){  
//     console.log("Bruce Banner is : ", this.hulk);
//   }
// var hulk = "Hulk";
// getHUlk();

// 4




};
new_func()

// function form_validation() {
//     var name = document.getElementById('name').value;
//     var age = document.getElementById('age').value;
//     var dob = document.getElementById('dob').value;
//     var city = document.getElementById('city').value;
//     var state = document.getElementById('state').value;
//     const alpha = /^[A-Z a-z]+$/;
//     const number = /^[0-9]+$/;

//     if(name.length <1){
//         alert("Please enter your name.......!!!");
//         return false;
//     }
//     else if(!alpha.test(name)){
//         alert("Name Should contain Alphabets only.......!!!");
//         return false;
//     }
//     if(age.length <1){
//         alert("Please enter your Age.......!!!");
//         return false;
//     }else if(!number.test(age)){
//         alert("Age should be a number......!!!");
//         return false;
//     }
//     if(city.length <3){
//         alert("Please enter your city.....!!!");
//         return false;
//     }
//     if(state.length <3){
//         alert("Please enter your state..........!!!");
//         return false;
//     }

// }

// $(function () {
//     $("#sname").hide();
//     $("#sdob").hide();
//     $("#sage").hide();
//     $("#scity").hide();
//     $("#sstate").hide();
//     $("#name").focusout(function () { error_name() });
//     $("#dob").focusout(function () { error_dob() });
//     $("#age").focusout(function () { error_age() });
//     $("#city").focusout(function () { error_city() });
//     $("#state").focusout(function () { error_state() });
//     function error_name() {
//         var fname = $("#name").val();
//         const regnme = /^[A-Z a-z]+$/;
//         if (fname == "") {
//             $("#sname").html("ഇതിൽ ഒന്നും ഇല്ലാലോ.....");
//             $("#sname").css('color', '#ffffff');
//             $("#sname").show();
//             $("#name").css('border-color', '#FF0000');
//         }
//         else if (!regnme.test(fname)) {
//             $("#sname").html("പറ്റിച്ചാ നമ്മളെ?");
//             $("#sname").css('color', '#ffffff');
//             $("#sname").show();
//             $("#name").css('border-color', '#FF0000');
//         }

//         else {
//             $("#sname").html("ഇപ്പോം നന്നായിട്ടിണ്ട് ട്ടാ");
//             $("#sname").css('color', '#ffffff');
//             $("#sname").show();
//             $("#name").css('border-color', '#09eb09');
//         }
//     }
//     function error_dob() {
//         var fdob = $("#dob").val();
//         if (fdob == "") {
//             $("#sdob").html("ഇതിൽ ഒന്നും ഇല്ലാലോ.....");
//             $("#sdob").css('color', '#ffffff');
//             $("#sdob").show();
//             $("#dob").css('border-color', '#FF0000');
//         }
//         else {
//             $("#sdob").html("ഇപ്പോം നന്നായിട്ടിണ്ട് ട്ടാ");
//             $("#sdob").css('color', '#ffffff');
//             $("#sdob").show();
//             $("#dob").css('border-color', '#09eb09');
//         }
//     }
//     function error_age() {
//         var fage = $("#age").val();
//         const numbers = /^[0-9]+$/;
//         if (fage == "") {
//             $("#sage").html("ഇതിൽ ഒന്നും ഇല്ലാലോ.....");
//             $("#sage").css('color', '#ffffff');
//             $("#sage").show();
//             $("#age").css('border-color', '#FF0000');
//         }
//         else if (!numbers.test(fage)) {
//             $("#sage").html("പറ്റിച്ചാ നമ്മളെ?");
//             $("#sage").css('color', '#ffffff');
//             $("#sage").show();
//             $("#age").css('border-color', '#FF0000');
//         }
//         else {
//             $("#sage").html("ഇപ്പോം നന്നായിട്ടിണ്ട് ട്ടാ");
//             $("#sage").css('color', '#ffffff');
//             $("#sage").show();
//             $("#age").css('border-color', '#09eb09');
//         }
//     }
//     function error_city() {
//         var fcity = $("#city").val();
//         if (fcity == "") {
//             $("#scity").html("ഇതിൽ ഒന്നും ഇല്ലാലോ.....");
//             $("#scity").css('color', '#ffffff');
//             $("#scity").show();
//             $("#city").css('border-color', '#FF0000');
//         }
//         else {
//             $("#scity").html("ഇപ്പോം നന്നായിട്ടിണ്ട് ട്ടാ");
//             $("#scity").css('color', '#ffffff');
//             $("#scity").show();
//             $("#city").css('border-color', '#09eb09');
//         }
//     }
//     function error_state() {
//         var fstate = $("#state").val();
//         if (fstate == "") {
//             $("#sstate").html("ഇതിൽ ഒന്നും ഇല്ലാലോ.....");
//             $("#sstate").css('color', '#ffffff');
//             $("#sstate").show();
//             $("#state").css('border-color', '#FF0000');
//         }
//         else {
//             $("#sstate").html("ഇപ്പോം നന്നായിട്ടിണ്ട് ട്ടാ");
//             $("#sstate").css('color', '#ffffff');
//             $("#sstate").show();
//             $("#state").css('border-color', '#09eb09');
//         }
//     }
// })