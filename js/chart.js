const years = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022',];
const wins = ['8', '8', '12', '4', '13', '9', '10', '8', '6', '12', '6'];
const losses = ['8', '8', '4', '12', '3', '7', '6', '8', '10', '5', '2',];
const barColors1 = ['#00338d'];
const barColors2 = ['#869397'];


new Chart("myChart", {
    type: "bar",
    data: {
        labels: years,
        datasets: [{
            label: 'Wins',
            backgroundColor: barColors1,
            data: wins
        },
        {
            label: 'Losses',
            backgroundColor: barColors2,
            data: losses
        }
    ]
    },
    options: {
    title: {
      display: true,
      text: "Over-all Record"
    }
    }
  });




//   const ctx = document.getElementById('myChart').getContext('2d');
// const myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr'],
//     datasets: [{
//       label: 'Month',
//       data: [10, 20, 50, 30]
//     }]
//   },
//   options: {
//         plugins: {
//             subtitle: {
//                 display: true,
//                 text: 'Title goes here ...',
//                 color: '#ff0000',
//                 font: {
//                 	size: 20
//                 }
//             }
//         }
//     }
// });