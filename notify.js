const api_url = 
	"https://api.rootnet.in/covid19-in/notifications"; 


async function getapi(url) { 
	
	
	const response = await fetch(url); 
	
	var data = await response.json(); 
	console.log(data); 
	if (response) { 
		//hideloader(); 
	} 
	show(data); 
} 

getapi(api_url); 


function hideloader() { 
	document.getElementById('loading').style.display = 'none'; 
} 

function show(api_data) { 
	let tab = 
        `<tr class="w3-dark-grey"> 
        <th>Date</th>
		<th>Notification Title</th> 
		<th>Link</th> 
		</tr>`; 
	
	
	for(var r of api_data.data.notifications) { 
        tab += `<tr> 
                <td>${r.title.substr(0,10)}</td>
	            <td>${r.title.substr(11,)}</td> 
	            <td><a href="${r.link}" target="_blank">${r.link}</a></td> 			 
            </tr>`; 
	} 
	
	document.getElementById("employees").innerHTML = tab; 
} 
