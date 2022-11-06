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







// const pastArray = [
//     {
//         "playerName" : "Troy Aikman",
//         "number" : "8",
//         "position" : "QB",
//         "yearInducted" : "2000"
//     },
//     {
//         "playerName" : "Troy Aikman",
//         "number" : "8",
//         "position" : "QB",
//         "yearInducted" : "2000"
//     },
//     {
//         "playerName" : "Troy Aikman",
//         "number" : "8",
//         "position" : "QB",
//         "yearInducted" : "2000"
//     },
//     {
//         "playerName" : "Troy Aikman",
//         "number" : "8",
//         "position" : "QB",
//         "yearInducted" : "2000"
//     },
//     {
//         "playerName" : "Troy Aikman",
//         "number" : "8",
//         "position" : "QB",
//         "yearInducted" : "2000"
//     }
// ]


// function buildTable(data) {
//     let table = document.getElementById('pastTable')
//     for (let i = 0; i < data.length; i++) {
//         let row = `<tr>
//                     <td>${data[i].playerName}</td>
//                     <td>${data[i].number}</td>
//                     <td>${data[i].position}</td>
//                     <td>${data[i].yearInducted}</td>
//                     </tr>`

//         table.innerHTML += row
//     }
// };


// buildTable(pastArray);
