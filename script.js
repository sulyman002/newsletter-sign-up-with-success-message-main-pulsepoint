//get all element needed
const submt = document.querySelector('.submit'); //submit button
const inputBox = document.querySelector('.inputBox'); //input box
const errorContent = document.querySelector('.errorContent');//error
const container = document.querySelector('.container'); //container
const dismiss = document.querySelector('.dismiss'); //dismiss button
const dismissContent = document.querySelector('.dismissContent'); //dismiss content

let isError = false;

submt.addEventListener('click', (preventDefault) => {
    preventDefault.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(inputBox.value.trim())) {
        errorContent.classList.remove('hidden');
        inputBox.style.background = 'rgba(255, 98, 87, 0.27)'
        isError = true;
    }else{
        errorContent.classList.add('hidden');
        inputBox.style.background = 'rgba(36, 39, 66, 0.1)';
        isError = false;
        container.classList.add('hidden');
        container.classList.remove('md:flex');
        dismissContent.classList.remove('hidden');
    }
});

dismiss.addEventListener('click', () => {
    dismissContent.classList.add('hidden');
    container.classList.remove('hidden');
     container.classList.add('md:flex');
     location.reload();

});
