function flip(element) {
    currentText.classList.add('hidden');
    setTimeout(() => {
        if (element.innerHTML == "Hello World!!") {
            element.innerHTML = 'Goodbye World TwT';
        }
        else{
            element.innerHTML= "Hello World!!";
        }
        currentText.classList.remove('hidden');
    }, 500); // Match the duration in the CSS transition property
}
function changeText(element) {
    // Get the current text element
    const currentText = element;
    // Set the text to fade out
    // Wait for the fade-out transition to finish
}
function disappear() {
    alert("Guess I'm dead");
}