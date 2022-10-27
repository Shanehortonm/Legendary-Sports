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
})








const makeRequest = async () => {
    try {
        const personRequest = await fetch('http://localhost:8080/settings', { 
            method: 'GET', 
            mode: 'no-cors',
            
        });
        //const personResponse = await personRequest.json();
        //console.log('hello', personResponse) 
    } catch(e) {
        console.log('goodbye', e)
    }
}

makeRequest();
