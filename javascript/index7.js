let inp = document.querySelector('input')
let button = document.querySelectorAll('button')
for(let btn of button){
    btn.addEventListener('click',()=>{
        console.log('hehehe');

        let text= btn.innerText
        console.log(text,"kyayya");
        if(text==='C'){
            inp.value=''
        }
        else if(text==='='){
            inp.value=eval(inp.value)
        }
        else{
            inp.value+=text
        }
        
        
    })
}