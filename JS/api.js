const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b1a3efdd8amsh8a4e4eabb81dcbdp1ed5aejsnd444b0376eaf',
		'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
	}
};

fetch('https://forecast9.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));