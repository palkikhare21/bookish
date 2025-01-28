// function fun1(){
//     console.log("helloooo");
    
// }

// let btn= document.querySelector('#one')

// btn.onclick=function(){
//     console.log('byeeee');
    
// }

// let btn1= document.querySelector('#two')
// let body= document.querySelector('body')
// btn.addEventListener('click',()=>{
    // console.log('jaooooo');
    // body.style.backgroundColor='red'
    // alert('HEYY')
    // h1.innerText='palki'
    
    
// })

// let inp= document.querySelector('input')
// let h2= document.querySelector('h2')

// inp.addEventListener('input',(e)=>{
//     console.log(e.target.value,"kyayya");
//     h2.innerText=e.target.value
    
// })

// btn.addEventListener('btn',(e)=>{
//     console.log(e.target.value,"yyyayya");
//     h2.innerText=e.target.value
  
    
// })
let btn = document.querySelector('button')
let body = document.querySelector('body')
// let count=0 
// btn.addEventListener('click',()=>{
//      console.log('jaooooo');
//      if(count%2==0){
//         body.style.backgroundColor='red';
//         count++
//      }
     
//     else{
//         body.style.backgroundColor='blue';
//         count++
//     }
    
    
//  })
let isBool=false
 btn.addEventListener('click',()=>{
    
    if(isBool){
        body.style.backgroundColor='pink'
        isBool=false
    }
    else{
        body.style.backgroundColor='blue'
        isBool=true
    }

})