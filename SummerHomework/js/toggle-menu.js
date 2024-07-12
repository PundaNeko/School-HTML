function scriptLoaded() {
    console.log('Script loaded successfully.');
}
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