console.log("say hello")

//their are the three keywords to declare variables in our java script
//they are:- 1.var
//           2.let
//           3.const


//1.var
//    it can be redeclare and updated 
// exampel of redeclare

var Place1="tirupathi";
console.log(Place1);

var Place1="bangalore";
console.log(Place1);

// exampel of updated

var Place2="chennai";
console.log(Place2);

    Place2="hyderabad";
console.log(Place2);    


//2.let
//     it can be updated but cannot be redeclare
// exampel of redeclare
let Name1="nikhilsai";
console.log(Name1);

// let Name_1="sai";
// console.log(Name_1);

//exampel of updated

let Name2="kalisetty";
console.log(Name2);

   Name2="sai";
console.log(Name2);

//3.const
// it cannot be updated or redclare
//  exampel of redeclare

const City1="tirupathi";
console.log(City1);

// const City1="chennai";
// console.log(City1);           cannot be redeclare

//exampel of updated

const CityName2="chennai";
console.log(CityName2);

//      CityName2="bangalore";
// console.log(CityName2);        cannot be updated




function b(){
    console.log('called b!');
}
var a;
b();

console.log(a);
a='hello world';       //undefined

// global function (not inside a function)

function sai(){
    var a = "hello world";
    console.log(a);
    function nikhil(){
        var b = "hello";
    }
}
sai();

// hosting

var nikhilsai = "tirupathi";
function b (){
    console.log('called b');
}
b();

console.log(nikhilsai);


c();
console.log(n);

var n = 'nikhil sai';

function c() {
    console.log('called c');

}


// variables setup

var kalisetty;
console.log(kalisetty);  //undefined


var k ;
console.log(k);

if (k === undefined) {
    console.log('k is undefined !');
}

else {
    console.log('k is defined');
}


function raja() {
       console.log('called raja');
}
raja();

console.log(hari);  // undefined

var hari = 'good afternoon';
console.log(hari);     // good afternoon


// invocation running a function 


function s() {

}
function i() {            // execution context
    s();
}
i();                     // global execution context



function h() {
    var myvar;            
    console.log(myvar);   // undefined
}
function hello() {
    var myvar=2;
    console.log(myvar);      // 2
    h();
}

var myvar = 1;
console.log(myvar);          // 1
hello();
console.log(myvar);          // 1

// execution context : code execution

function hi() {
    console.log('called hi');      // called hi
}
hi();

console.log(newdata);              // undefined

var newdata = 'javascript';
console.log(newdata);             // javascript


// objectives and functions

// functions
// object
var nikhilsai = {
    firstname:'kalisetty',
    lastname:'nikhil sai',
    address:{
            street:'reddy and reddy colony',
            city:'tirupathi',
            state:'ap'
    }
};
console.log(nikhilsai);

// objectives

var person = new Object ();


// data types

// operators
// operators can take two parameters and retrun one result
// example 

var o = 3+5;
console.log(o);

// retrun ex

function addn(a,b) {
    return a+b;
};
var result = addn(3,7);
console.log(result);


function add(){
    return {
        firstname:"kalisetty",
        lastname:"nikhilsai",
        email:"kalisettynikhilsai",
        number:9398199709,
        address:{
             street:"reddy and reddy colony",
             city:"tirupathi",
             state:"andra pradesh",
        },
    };
    // var of = 8-9;
    // console.log(of);   // after retrun cann't exicute any value
};
var result = add();
console.log(result);

// var result = add(studentdetails,address);
// console.log(result);

function adds(a,b){
    return a+b;
};
var result = adds("nikhil","sai");
console.log(result);

// operater precedence and associativity

var i = 5+6*10;
console.log(i);

var l = "sai"+"nikhil";
console.log(l);

var k = 5<1;
console.log(k);

var a = 20;
var b = 30;
var c = 40;
console.log(a+b-c);

// precedence  = right to left
var a = 5, b = 10, c = 15;
a = b = c;
console.log(a);
console.log(b);
console.log(c);

var a = (6+8) *5 ;
console.log(a);

console.log(3 > 2 > 1);      // false
console.log(10 < 5 < 3);     // true

// coercion
// converting a value from one type to another
// example

var a = 20+30;
console.log(a);        //number

var b = 'reddy' + 'prasad';
console.log(b);          // string

var a = 5 + "6";
console.log(a);       // coercion

var c = 6, b = '5';
console.log(c+b);

var reddy = 10 + "20";
console.log(reddy);
console.log(typeof(reddy));      //string


// comparison operators

console.log(3<4<6);      //true

console.log(false > 5);   //false

console.log(0 < 1);   // true


var prasanth = 3==3;
console.log(prasanth);   // true

var prasad = 3, prasad = 3;
console.log(prasad == prasad);   //true

var sai = 5 == '6';
console.log(sai);        //false
console.log(typeof(sai));    //boolean

var m = "" == false;
console.log(m);            //true

var n= null == 0;
console.log(n)            // false

// better


var c = 5 === 5;
console.log(c);      // true

var x = '5' === 5;
console.log(x);       //false

















