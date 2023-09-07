// console.log("say hello")

// //their are the three keywords to declare variables in our java script
// //they are:- 1.var
// //           2.let
// //           3.const


// //1.var
// //    it can be redeclare and updated 
// // exampel of redeclare

// var Place1="tirupathi";
// console.log(Place1);

// var Place1="bangalore";
// console.log(Place1);

// // exampel of updated

// var Place2="chennai";
// console.log(Place2);

//     Place2="hyderabad";
// console.log(Place2);    


// //2.let
// //     it can be updated but cannot be redeclare
// // exampel of redeclare
// let Name1="nikhilsai";
// console.log(Name1);

// // let Name_1="sai";
// // console.log(Name_1);

// //exampel of updated

// let Name2="kalisetty";
// console.log(Name2);

//    Name2="sai";
// console.log(Name2);

// //3.const
// // it cannot be updated or redclare
// //  exampel of redeclare

// const City1="tirupathi";
// console.log(City1);

// // const City1="chennai";
// // console.log(City1);           cannot be redeclare

// //exampel of updated

// const CityName2="chennai";
// console.log(CityName2);

// //      CityName2="bangalore";
// // console.log(CityName2);        cannot be updated




// function b(){
//     console.log('called b!');
// }
// var a;
// b();

// console.log(a);
// a='hello world';       //undefined

// // global function (not inside a function)

// function sai(){
//     var a = "hello world";
//     console.log(a);
//     function nikhil(){
//         var b = "hello";
//     }
// }
// sai();

// // hosting

// var nikhilsai = "tirupathi";
// function b (){
//     console.log('called b');
// }
// b();

// console.log(nikhilsai);


// c();
// console.log(n);

// var n = 'nikhil sai';

// function c() {
//     console.log('called c');

// }


// // variables setup

// var kalisetty;
// console.log(kalisetty);  //undefined


// var k ;
// console.log(k);

// if (k === undefined) {
//     console.log('k is undefined !');
// }

// else {
//     console.log('k is defined');
// }


// function raja() {
//        console.log('called raja');
// }
// raja();

// console.log(hari);  // undefined

// var hari = 'good afternoon';
// console.log(hari);     // good afternoon


// // invocation running a function 


// function s() {

// }
// function i() {            // execution context
//     s();
// }
// i();                     // global execution context



// function h() {
//     var myvar;            
//     console.log(myvar);   // undefined
// }
// function hello() {
//     var myvar=2;
//     console.log(myvar);      // 2
//     h();
// }

// var myvar = 1;
// console.log(myvar);          // 1
// hello();
// console.log(myvar);          // 1

// // execution context : code execution

// function hi() {
//     console.log('called hi');      // called hi
// }
// hi();

// console.log(newdata);              // undefined

// var newdata = 'javascript';
// console.log(newdata);             // javascript


// // objectives and functions

// // functions
// // object
// var nikhilsai = {
//     firstname:'kalisetty',
//     lastname:'nikhil sai',
//     address:{
//             street:'reddy and reddy colony',
//             city:'tirupathi',
//             state:'ap'
//     }
// };
// console.log(nikhilsai);

// // objectives

// var person = new Object ();


// // data types

// // operators
// // operators can take two parameters and retrun one result
// // example 

// var o = 3+5;
// console.log(o);

// // retrun ex

// function addn(a,b) {
//     return a+b;
// };
// var result = addn(3,7);
// console.log(result);


// function add(){
//     return {
//         firstname:"kalisetty",
//         lastname:"nikhilsai",
//         email:"kalisettynikhilsai",
//         number:9398199709,
//         address:{
//              street:"reddy and reddy colony",
//              city:"tirupathi",
//              state:"andra pradesh",
//         },
//     };
//     // var of = 8-9;
//     // console.log(of);   // after retrun cann't exicute any value
// };
// var result = add();
// console.log(result);

// // var result = add(studentdetails,address);
// // console.log(result);

// function adds(a,b){
//     return a+b;
// };
// var result = adds("nikhil","sai");
// console.log(result);

// // operater precedence and associativity

// var i = 5+6*10;
// console.log(i);

// var l = "sai"+"nikhil";
// console.log(l);

// var k = 5<1;
// console.log(k);

// var a = 20;
// var b = 30;
// var c = 40;
// console.log(a+b-c);

// // precedence  = right to left
// var a = 5, b = 10, c = 15;
// a = b = c;
// console.log(a);
// console.log(b);
// console.log(c);

// var a = (6+8) *5 ;
// console.log(a);

// console.log(3 > 2 > 1);      // false
// console.log(10 < 5 < 3);     // true

// // coercion
// // converting a value from one type to another
// // example

// var a = 20+30;
// console.log(a);        //number

// var b = 'reddy' + 'prasad';
// console.log(b);          // string

// var a = 5 + "6";
// console.log(a);       // coercion

// var c = 6, b = '5';
// console.log(c+b);

// var reddy = 10 + "20";
// console.log(reddy);
// console.log(typeof(reddy));      //string


// // comparison operators

// console.log(3<4<6);      //true

// console.log(false > 5);   //false

// console.log(0 < 1);   // true


// var prasanth = 3==3;
// console.log(prasanth);   // true

// var prasad = 3, prasad = 3;
// console.log(prasad == prasad);   //true

// var sai = 5 == '6';
// console.log(sai);        //false
// console.log(typeof(sai));    //boolean

// var m = "" == false;
// console.log(m);            //true

// var n= null == 0;
// console.log(n)            // false

// // better


// var c = 5 === 5;
// console.log(c);      // true

// var x = '5' === 5;
// console.log(x);       //false


// javascript functions
// function
// arguments
// function and block scope
// immediately invoked function expression (iife)


// functions
// function greetings(name){
//     console.log('hello'+name)
// }
// greetings(' john');  

// function greeting(){
//     return 'hello world' + 
//     ',nikhil sai';
// }
// let sai = greeting();
// console.log(sai);
// console.log(greeting('retrun'));

// function greeter(){
//     return{
//         name:'nikhil sai',
//         surname:'kalisetty',
//         rollno:55,
//         college:'gate college'             // object
//     }
// }
// var message = greeter();
// console.log(message);

// function with  arguments

// function sum(num1,num2){
//     return num1+num2;
// }
// console.log(sum(5,8));        // 13

// function sum(num1,num2){
//     return num1-num2;             // 0
// }
// console.log(sum(5,5));


// function sum(collegename,code){
//     return collegename+code;
// }
// var result = sum('gate college',' 042')
// console.log(result);                     // gate college 042

// function nikhil(name){
//     console.log('kalisetty '+'nikhil ' + name)
// }
// let name = 'sai';
// nikhil(name);
// name = 'prasad';
// nikhil(name);

// function sai(number){
//     console.log(5 + 6 + number)
// }
// var number = 10;
// sai(number);  



// function prasad(number){
//     console.log(50 - 30 - number)
// }
// const number= 10;
// prasad(number);
 
// function printall(){
//     for(let i=0; i< arguments.length; i++){
//         console.log(arguments[i]);
//     }
// }
// printall(1,2,3,4,5);
// printall(100,200,300);


// function scope

// function nikhil(){
//     let message = 'sai';
//     console.log(message);          // sai
// }
// nikhil();
// console.log(message);           // message is not defined

// function nikhil(){
//     let message = 'sai';
//     let sayhi = function hi(){
//         console.log(message);
//     }
//     sayhi();
// }
// nikhil();

// function sai(){
//     let message = 'hi';
//     let sayhi = function hi(){
//         let message = 'hello';
//         // console.log(message);
//     };
//     sayhi();
//     console.log(message);
// }
// sai();

// examples

// function nikhil(){
//     let message = 'sai';
// }
// nikhil();
// console.log(message);     //not defined  because its invoking outside a function

// let message;
// function greeting(){
//     message = 'hello';
// }
// greeting();
// console.log(message);         // hello

// function greeting(){
//     let message = 'hi';
//     let sayhi = function hi(){
//         let message = 'sai';
//         console.log(message);
//     };
//     sayhi();
//     console.log(message);
// }
// greeting();

// block scope
 

// let message = 'hello';
// if(message == 'hello'){
//     let count = 100;
// }
// console.log(count);


// let message = 'hello';
// if(message == 'hello'){
//     let message = 'inside if block';
//     console.log(message);
// }
// console.log(message);


// let message = 'hello';
// if (message == 'hi'){
//     let message = 'inside if block';
//     console.log(message);
// }
// console.log(message);


// iife

// (function nikhil(){
//     var a = 'nikhill sai';
//     console.log(a);
// })
// ();


// al = [10,20,30];
// a2 = [10,20,30];
// console.log(al == a2);

// s1 = 'js';
// s2 = 'js';
// console.log(s1 == s2);


// function sum(a,b){
//     let sum = a+b;
//     // console.log(sums);
//     square(sum);
//     console.log('hello');
// }
// function diff(a,b){
//     let diff = a-b;
//     console.log(diff);
// }
// function square(num){
// console.log(num*num);
// }
// sum(4,6);
// diff(4,6);


// call  by value (primitive data types)

// var a = 6;
// var b;
// b = a;
// console.log(a);      // 6
// console.log(b);      // 6

// a = 8 ;
// console.log(a);     // 8
// console.log(b);     // 6


// a = 2;
// b = a;
// console.log(a);
// console.log(b);  

// b = a;
// a = 2;
// console.log(a);
// console.log(b);  


// var a = 3;
// var b;

// b = a;          
// a = 2;         
// console.log(a);       // 2
// console.log(b);       // 3


// // by reference (all objects (including functions))

// var c = {
//     village :'tirupathi',
//     state : 'andra pradesh'
// };
// var d ;

// d = c;

// console.log(c);       // tirupathi / andra pradesh
// console.log(d);       // tirupathi / andra pradesh

// c.village ='reddy and reddy colony'    // mutate

// console.log(c);      // reddy and reddy colony / andra pradeh
// console.log(d);      // reddy and reddy colony / andra pradeh

// // by reference ( even as parameters )


// function changec{
    
// }



// var c = {
//     greeting:'hello',
//     greetings:'hi'
// }
// var d;
// d = c;
// c.greeting = 'sai';

// console.log(c);
// console.log(d);



// regular function 1

// function sum(){
//     console.log('hello');
// };
// sum();

// function sum1(){
//     return 'hello world';
// }
// let message = sum1();
// console.log(message);

// // arrow function 1

// let greeting = () => {
//     return 'hello world';
// };
// let message1 = greeting();
// console.log(message1);

// // 

// let greetings = () => 'hello world';
// let message2 = greetings();
// console.log(message2);

// regular function 2

// var greeting = function (name){
//     return 'nikhil ' + name ;
// };
// var message = greeting('sai');
// console.log(message);

// arrow function 2

// var greetings = village => 'hello' + village;
// var message = greetings(':tirupathi');
// console.log(message);

// arrow functions to add numbers

// function sum(num1,num2){
//     return num1 + num2 ;
// }
// let output = sum(6 , 8);
// console.log(output);

// let sum = (num1 , num2) => {
//     return num1 + num2 ;
// }
// let output = sum(5 , 8);
// console.log(output);

// let sum1 = (num3 , num4) => num3 + num4 ;
// let output1 = sum(6 , 10);
// console.log(output1);

// closures

// let greeting = (function(){
//     let message = 'hello';
//     let getmessage = function(){
//         return 'message';
//     };
// })();
// console.log(greeting.message);

// let greeting = (function(){
//     let message = 'hello';
//     let getmessage = function(){
//         return message;
//     };
//     return {
//         getmessage : getmessage,
//     };
// })();  




// json and object literals
// data sending to internet
// var objectliteral ={
//     firstname:"nikhilsai",
//     isAProgrammer:true
// };
// console.log(objectliteral);

// {/* <object>
//     <firstname>nikhilsai</firstname>
//     <isAProgrammer>true</isAProgrammer>
// </object> */}
// {
//     "firstname":"nikhilsai",
//     "isAProgrammer":true
// }
// javascript object notation

// convert object to json 

// var objectliteral ={
//     firstname:"nikhilsai",
//     isAProgrammer:true
// };
// console.log(json.stringify(objectliteral));
// {
//     "firstname" : "nikhilsai",
//     "isAProgrammer" : true
// }

// var objectliteral ={
//     firstname:"nikhilsai",
//     isAProgrammer:true
// };
// console.log(JSON.stringify(objectliteral));

// '{ "firstname":"nikhilsai","isAProgrammer":true }'

// var objectliteral ={
//     firstname:"nikhilsai",
//     isAProgrammer:true
// };
// console.log(JSON.stringify(objectliteral));

// var jsonvalue = JSON.parse('{ "firstname":"nikhilsai","isAProgrammer":true }');
// console.log(jsonvalue);

//closures

// let greeting = (function(){
//     let message = "hello";
//     let getmessage = function(){
//         return message;
//     }
// })();
// console.log(greeting.message);

// let greeting = (function(){
//     let message = "hello";
//     let getmessage = function(){
//         return message;
//     };
//     return{
//         getmessage:getmessage,
//     };
// })();
// console.log(greeting.getmessage);

// examples of clousers


// function buildfunctions(){

//     var arr=[];

//     for (var i = 0; i < 3; i++){
//         arr.push(
//             function(){
//                 console.log(i);      // execution context
//             }
//         )
//     }
//     return arr;
// }
// var fs = buildfunctions();           // global execution context

// fs[0]();
// fs[1]();
// fs[2]();


// function buildfunctions2(){

//     var arr=[];

//     for (var i = 0; i < 3; i++){
//         let j = i;
//         arr.push(
//             function(){
//                 console.log(j);      
//             }
//         )
//     }
//     return arr;
// }
// var fs2 = buildfunctions2();           

// fs2[0]();
// fs2[1]();
// fs2[2]();


// function buildfunction3(){
//     var arr=[];

//     for( i = 0; i < 3; i++){
//          arr.push(
//             (function(j){
//               return function(){
//                 console.log(j);
//               }
//             }(i))
//          )
//     }
//     return arr;
// }
// var fs3 = buildfunction3();

// behaviour of this keyword

function sum(){
    console.log(this);
}
sum.username="nikhilsai";
console.log(sum.username);

var sayhi = function(){
    console.log(this);
}
console.log(sayhi());                 //window



var c={
    firstname:"object c",
    log:function(){
        console.log(this);
        this.name="updated";
    }
}
c.log();

// array

var a =[1,2,3,"nikhilsai",true,a={
    firstname:"nikhi",
    lastname:"sai",
    rollno:35,
    village:"tirupathi"
},
function nikhil(){
    console.log("mail")
}
];
console.log(a[6]());





