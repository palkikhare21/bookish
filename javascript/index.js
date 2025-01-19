// scope
//global

// var a=5
// console.log(window.a);

// {
//     everything inside this is a block
// }

//'string'==value is always true
// var a=56
// {
//     var a=11
//     console.log(a);
    
// }
// console.log(a);

// function sum(){
//     var a=5
//     console.log(a);
    
// }
// sum()
// console.log(a);

// const a=5;
// a=5
// a()
// console.log(a);

// let a;
// a=5
// console.log(a);

// var a=56
// {
//     var a=11
//     console.log(a);
    
// }
// console.log(a);

// sum ()
// console.log(a);
// function outer(a){
//     let a=5
//     function inner(){
//         console.log(a);
        
//     }
//     inner()
// }
// outer ()

// let a=5
// function sum(){
//     console.log();
    
// }


// CALL BIND AND APPLYYYYYYYYYYYYYY

let obj={
    firstName:"angle",
    lastName:"priya",
    fullName:function(city, age){
        console.log(this.firstName + " " + this.lastName +" " +city+" "+age);
        
    }
}

let user={
    firstName:"palki",
    lastName:"khare"
}
obj.fullName.apply(user,['bhopal',101])
//obj.fullName()





