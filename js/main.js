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

const quotes = [
    {"quote1" : "Today, you have 100% of your life left."},
                    
    {"quote2" : "A winner never stops trying."},
                    
    {"quote3" : "A coach is someone who tells you what you don't want to hear, who has you see what you don't want to see, so you can be who you have always known you could be"},
                    
    {"quote4" : "The quality of a man’s life is in direct proportion to his commitment to excellence."},
                    
    {"quote5" : "Leadership is a matter of having people look at you and gain confidence, seeing how you react. If you’re in control, they’re in control"}
];

const item = quotes[Math.floor(Math.random() * quotes.length)];

function changeQuote() {
    document.getElementById('tomQuote').innerHTML = item.quote1;
};

document.getElementById('change-Quote').onclick = function(){
    changeQuote()
};


