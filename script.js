//get all element needed
const submt = document.querySelector('.submit'); //submit button
const inputBox = document.querySelector('.inputBox'); //input box
const errorContent = document.querySelector('.errorContent');
const put = document.querySelector('.put');

let isError = false;

submt.addEventListener('click', (preventDefault) => {
    preventDefault.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(inputBox.value.trim())) {
        errorContent.classList.remove('hidden');
        inputBox.style.background = 'rgba(255, 98, 87, 0.27)'
        isError = true;
    }



});
