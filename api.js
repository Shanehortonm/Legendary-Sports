fetch('https://api.sportsdata.io/v3/nfl/scores/json/NewsByTeam/DAL?key=6f9e2dbbd2364930824754d2dcb5228f')

.then((response) => {
    return response.json()
 })
 .then((data) => {
    console.log(data)
 })

 fetch('https://api.sportsdata.io/v3/nfl/scores/json/Players/DAL?key=6f9e2dbbd2364930824754d2dcb5228f')

.then((response) => {
    return response.json()
 })
 .then((data) => {
    console.log(data)
 })