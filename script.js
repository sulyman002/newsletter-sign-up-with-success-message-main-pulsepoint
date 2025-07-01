//get all element needed
const submt = document.querySelector('.submit'); //submit button
const inputBox = document.querySelector('.inputBox'); //input box
const errorContent = document.querySelector('.errorContent');

let isError = false;

submt.addEventListener('click', () =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(inputBox.value.trim())){
        errorContent.classList.remove('hidden');
        isError = true;
    }


});
