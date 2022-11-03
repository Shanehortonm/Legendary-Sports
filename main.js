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

const pastArray = [
    {
        "playerName" : "John Doe",
        "number" : "1",
        "position" : "QB",
        "yearInducted" : "2000"
    },
    {
        "playerName" : "",
        "number" : "",
        "position" : "",
        "yearInducted" : ""
    },
    {
        "playerName" : "",
        "number" : "",
        "position" : "",
        "yearInducted" : ""
    },
    {
        "playerName" : "",
        "number" : "",
        "position" : "",
        "yearInducted" : ""
    },
]

buildTable(pastArray)

function buildTable(data) {
    let table = document.getElementById('pastTable')
    for (let i = 0; i < data.length; i++) {
        let row = `<tr>
                    <td>${data[i].playerName}</td>
                    <td>${data[i].number}</td>
                    <td>${data[i].position}</td>
                    <td>${data[i].yearInducted}</td>
                    </tr>`

        table.innerHTML += row
    }
}