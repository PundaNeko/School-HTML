let haveRifle = false;
let isJapanese = false;
let japaneseTextShow = false;


document.addEventListener('DOMContentLoaded', function () {
    var targetElement = document.querySelector(".modal-content");;
    var visibleTime = 3000;
    
    function handleVisibility() {
        console.log("The element has been visible for " + visibleTime + " milliseconds.");
        // Add your desired action here
        // targetElement.style.backgroundColor = 'white'; // Example action
    }

    var observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.5 // The element is considered visible when 50% of it is in view
    };

    var timeoutId;

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Start the timer when the element becomes visible
                timeoutId = setTimeout(handleVisibility, visibleTime);
            } else {
                // Clear the timer if the element is no longer visible
                clearTimeout(timeoutId);
            }
        });
    }, observerOptions);

    // Start observing the target element
    observer.observe(targetElement);
});
document.querySelector('.select-box').addEventListener('change', function () {
    var selectedValue = this.value;
    var englishElements = document.querySelectorAll('.en');
    var binElements = document.querySelectorAll('.bin');
    var hexElements = document.querySelectorAll('.hex');
    var japaneseElements = document.querySelectorAll('.jp');
    
    // Hide all elements
    englishElements.forEach(function(element) {
        element.classList.add('hidden');
    });
    // $binary.classList.add('hidden');
    hexElements.forEach(function(element) {
        element.classList.add('hidden');
    });
    japaneseElements.forEach(function(element) {
        element.classList.add('hidden');
    });

    // Show only the one that matches the selected value
    if (selectedValue === 'english') {
        englishElements.forEach(function(element) {
            element.classList.remove('hidden');
        });
    } else if (selectedValue === 'binary') {
        $binary.classList.remove('hidden');
    } else if (selectedValue === 'hexadecimal') {
        hexElements.forEach(function(element) {
            element.classList.remove('hidden');
        });
    } else if (selectedValue === 'japanese') {
        japaneseElements.forEach(function(element) {
            element.classList.remove('hidden');
        });
    }
});
document.querySelector('.clickable-rifle').addEventListener('click', function () {
    var $rifle = document.querySelector('.clickable-rifle');
    $rifle.classList.add('hidden');
    document.body.classList.add('crosshair');
    haveRifle = true;
    console.log(haveRifle);
});
document.querySelector('.clickbait-text').addEventListener('click', function () {
    var $rifle = document.querySelector('.clickbait-text');
    $rifle.classList.remove('blinking');
});
document.querySelector('.hidden-reveal-jp').addEventListener('click', function () {
    var $test = document.querySelector('.hidden-reveal-jp');
    var $text = document.querySelector('.hidden-text-jp');
    $text.classList.remove('hidden');
});
document.querySelector('.panda-image').addEventListener('click', function () {
    var $panda = document.querySelector('.panda-image');
    var $heart = document.querySelector('.heart-image');
    const rect = $panda.getBoundingClientRect();
    //position offset
    const offsetX = -75;
    const offsetY = -50;
    //#region Audio Handler and volumes
    var audio = new Audio('./Audio/se_cat01.wav')
    var audio2 = new Audio('./Audio/BearHurt1.mp3')
    var audio3 = new Audio('./Audio/BearHurt2.wav')
    var audio4 = new Audio('./Audio/BearGone.mp3')
    audio.volume = 0.3;
    audio2.volume = 0.5;
    audio3.volume = 0.6;
    audio4.volume = 0.5;
    //#endregion
    if (haveRifle === false) {
        $heart.style.left = (rect.right + offsetX) + 'px';
        $heart.style.top = (rect.top + offsetY) + 'px';
        audio.play();
        if ($heart.classList.contains('heart-show') === false) {
            $heart.classList.add('heart-show');
            setTimeout(() => {
                $heart.classList.remove('heart-show');
            }, 1500);
            console.log('Heart Spawned');
        }
        return;
    }
    if ($panda.classList.contains('phase2')) {
        $panda.classList.add('phase3');
        $panda.classList.remove('phase2');
        audio3.play();
    }
    else if ($panda.classList.contains('phase3')) {
        $panda.classList.add('hidden');
        $panda.classList.remove('phase3');
        audio4.play();
    }
    else {
        $panda.classList.add('phase2');
        audio2.play();
    }
});

function preventScroll(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
}

// Function to disable scrolling
function disableScroll() {
    // window.addEventListener('scroll', preventScroll, { passive: false });
    // window.addEventListener('wheel', preventScroll, { passive: false });
    // window.addEventListener('touchmove', preventScroll, { passive: false });
    // window.addEventListener('keydown', preventScroll, { passive: false });
}

function enableScroll() {
    window.removeEventListener('scroll', preventScroll);
    window.removeEventListener('wheel', preventScroll);
    window.removeEventListener('touchmove', preventScroll);
    window.removeEventListener('keydown', preventScroll);
}

// Disable scrolling on page load
window.addEventListener('load', disableScroll);

// Get the modal
var modal = document.getElementById("myModal");
var modalContent = document.querySelector(".modal-content")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get all elements with the class "clickbait-text"
var btns = document.querySelectorAll(".clickbait-text");

// Loop through each element and add the onclick event listener
btns.forEach(function(btn) {
    btn.onclick = function() {
        console.log("button pressed");
        modal.style.display = "block";
    }
});

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
    //     modal.style.display = "none";
    // }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalContent.style.backgroundColor = '#140a0a';
    }
}