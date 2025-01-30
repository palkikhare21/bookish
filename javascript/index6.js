let form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(form[0].value,"hehehe");
    console.log(form[1].value,"hehehe");
    console.log(form[2].value,"hehehe");
    console.log(form[3].value,"hehehe");
    let data={
        firstname:form[0].value,
        lastname:form[1].value,
        email:form[2].value,
        password:form[3].value

    }
    localStorage.setItem('user',JSON.stringify(data))
    let userData = localStorage.getItem('user')

    console.log(userData,"useresss");
    
    console.log(JSON.parse(userData),"useresss");
    



    
})








// localStorage.setItem('user','gm')