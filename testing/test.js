function flip(element) {
    const currentText = element;
    currentText.classList.add('hidden');
    setTimeout(() => {
        if(currentText.textContent == 'Hello World!!')
        {
            currentText.textContent = 'Text has been changed!';
        }
        else{
            currentText.textContent = 'Hello World!!';
        }
        currentText.classList.remove('hidden');
        void currentText.offsetWidth;
        currentText.classList.add('shake');
        setTimeout(()=>{
            currentText.classList.remove('shake');
            console.log("I'm doing my part");
        }, 500);
    }, 500);
}
function disappear() {
    alert("Guess I'm dead");
}