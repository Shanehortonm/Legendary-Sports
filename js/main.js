/*
==========================
Hamburger Function
==========================
*/

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    })

    hamburger.classList.toggle('toggle');
});


/*
==========================
Quote Function
==========================
*/

const quoteArray = ["Today, you have 100% of your life left.",
                    "A winner never stops trying.",
                    "A coach is someone who tells you what you don't want to hear, who has you see what you don't want to see, so you can be who you have always known you could be",
                    "The quality of a man’s life is in direct proportion to his commitment to excellence.",
                    "Leadership is a matter of having people look at you and gain confidence, seeing how you react. If you’re in control, they’re in control"];


// function changeQuote() {
//     if
// }





// document.getElementById('tomQuote').innerHTML = quoteArray;
