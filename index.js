
const url= "https://api.rootnet.in/covid19-in/contacts"; 

async function get(url) { 
	
	
	const response = await fetch(url); 
	
	var data = await response.json(); 
	console.log(data); 
	show_url(data); 
} 

get(url); 



function show_url(api_data) { 
    let tab = 
		`<tr class="w3-dark-grey"> 
		<th>Location</th> 
		<th>Number</th> 
		</tr>`; 
	
	
	for(var r of api_data.data.contacts.regional) { 
		tab += `<tr> 
	            <td>${r.loc} </td> 
	            <td>${r.number}</td> 			 
			</tr>`;
}

	document.getElementById("number").innerHTML = tab; 
} 
