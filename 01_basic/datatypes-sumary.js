//  Primitive 
//  7 types: String ,Number ,Boolean ,Null ,undefined, Symbol,BigInt 

// const srt=233;
// const num=3432.9;
// const bool=false;
// const temp=null;
// const id=Symbol('2354');
// const anotherid=summbol('2345');

// const bignum=3423423542345234n;


// Reference (Non primitive )
// Array, Object , Function
 
// let animals=['Cow','owl','buffalo'];
// let myobj={
//     name:'saurabh',
//     age:22,
// }

// const myfunction =function(){
//     console.log("hello Saurabh");
// }
// console.log(typeof num);


// ********************************* ++ *****************************

// Stack (Primitive), Heap (Non -Primitive )

let myYoutubename="Saurabh";
let anothername=myYoutubename;
anothername="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);



let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne;
userTwo.email='saurabh@124';


console.log(userOne);
console.log(userTwo);
