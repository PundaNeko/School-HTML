let haveRifle = false;

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed.');
    var clickbaitText = document.querySelector('.clickbait-text');
    if (clickbaitText) {
        clickbaitText.classList.add('blinking');
    } else {
        console.error('Element with class .clickbait-text not found.');
    }
});
document.querySelector('.select-box').addEventListener('change', function () {
    var selectedValue = this.value;
    var $english = document.querySelector('.panda-intro-english');
    var $binary = document.querySelector('.panda-intro-binary');
    var $hexadecimal = document.querySelector('.panda-intro-hexadecimal');
    var $japanese = document.querySelector('.panda-intro-japanese');
    
    // Hide all elements
    $english.classList.add('hidden');
    $binary.classList.add('hidden');
    $hexadecimal.classList.add('hidden');
    $japanese.classList.add('hidden');

    // Show only the one that matches the selected value
    if (selectedValue === 'english') {
        $english.classList.remove('hidden');
    } else if (selectedValue === 'binary') {
        $binary.classList.remove('hidden');
    } else if (selectedValue === 'hexadecimal') {
        $hexadecimal.classList.remove('hidden');
    } else if (selectedValue === 'japanese') {
        $japanese.classList.remove('hidden');
    }
});
document.querySelector('.clickable-rifle').addEventListener('click', function() {
    var $rifle = document.querySelector('.clickable-rifle');
    $rifle.classList.add('hidden');
    document.body.classList.add('crosshair');
    haveRifle = true;
    console.log(haveRifle);
});
document.querySelector('.clickbait-text').addEventListener('click', function() {
    var $rifle = document.querySelector('.clickbait-text');
    $rifle.classList.remove('blinking');
});