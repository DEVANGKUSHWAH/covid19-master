const api_url = 
	"https://api.rootnet.in/covid19-in/stats/history"; 


async function getapi(url) { 
	
	
	const response = await fetch(url); 
	
	var data = await response.json(); 
	console.log(data); 
	if (response) { 
		hideloader(); 
	} 
	show(data); 
} 

getapi(api_url); 


function hideloader() { 
	document.getElementById('loading').style.display = 'none'; 
} 

function show(api_data) { 
	let tab = 
        `<tr> 
        <th>Date</th>
		</tr>`; 
	
	
	for(var r of api_data.data.) { 
        tab += `<tr> 
                <td>${r.loc}</td>			 
            </tr>`; 
	} 
	
	document.getElementById("employees").innerHTML = tab; 
} 
