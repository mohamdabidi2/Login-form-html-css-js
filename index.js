const signUpButton=document.getElementById('signUp')
const signInButton=document.getElementById('signIn')
const Container=document.getElementById('container')
signUpButton.addEventListener('click',()=>{
    Container.classList.add("right-panel-active")
})
signInButton.addEventListener('click',()=>{
    Container.classList.remove("right-panel-active")
})