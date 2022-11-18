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
    {"quote" : "Today, you have 100% of your life left."},
                    
    {"quote" : "A winner never stops trying."},
                    
    {"quote" : "A coach is someone who tells you what you don't want to hear, who has you see what you don't want to see, so you can be who you have always known you could be"},
                    
    {"quote" : "The quality of a man’s life is in direct proportion to his commitment to excellence."},
                    
    {"quote" : "Leadership is a matter of having people look at you and gain confidence, seeing how you react. If you’re in control, they’re in control"}
];


function changeQuote() {
    const item = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('tomQuote').innerHTML = item.quote;
};

/*
==========================
Panel Function
==========================
*/

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open')
};

function toggleActive(e) {
    if (e.propertyName.includes('flex'))
    this.classList.toggle('open-active')
};

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


/*
==========================
Mute Function
==========================
*/

function toggleMute() {
    const video = document.getElementById("heroVideo");
    
    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true;
    }
    
    }
