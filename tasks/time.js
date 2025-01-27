const arr=['https://images.unsplash.com/photo-1736185597807-371cae1c7e4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://plus.unsplash.com/premium_photo-1671308539538-6f20891d5e3a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1737903071772-4d20348b4d81?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D'];
const imageEL= document.querySelector('img');    
// let

let num =0;
setInterval(function(){
    imageEL.setAttribute('src',arr[num]);
    num=(num+1) % arr.length;
    
},2000);

 