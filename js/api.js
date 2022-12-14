
async function fetchTeamRecord() {
   await fetch('https://api.sportsdata.io/v3/nfl/scores/json/Standings/2022?key=6f9e2dbbd2364930824754d2dcb5228f')

.then((response) => {
    return response.json()
 })
 .then((data) => {
    console.log(data)
 })};



async function fetchTeamData(){
 await fetch('https://api.sportsdata.io/v3/nfl/scores/json/Players/DAL?key=6f9e2dbbd2364930824754d2dcb5228f')
.then((response) => {
   if(!response.ok) {
      throw Error('ERROR')
   }
    return response.json()
 })
 .then((data) => {
    console.log(data)
    let tableData = '';
    data.map((values) => {
      tableData += `<tr>
      <td><img src = '${values.PhotoUrl}'/></td>
      <td>${values.Name}</td>
      <td>${values.Number}</td>
      <td>${values.Position}</td>
      <td class='small-screen-hide'>${values.College}</td>
    </tr>`
    })
    document.getElementById('tableBody').innerHTML = tableData
 })
 .catch(error => {
   console.log(error);
 });
};

fetchTeamRecord();
fetchTeamData();

