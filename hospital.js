
const api_url_hospital = 
"https://api.rootnet.in/covid19-in/hospitals/beds"; 


async function getapi_hospital(url) { 
    const response = await fetch(url); 

    var data = await response.json(); 
    console.log(data); 
    show_hospital(data); 
} 

getapi_hospital(api_url_hospital); 


function show_hospital(api_data) { 
let tab = 
    `<tr class="w3-dark-grey"> 
    <th>State</th> 
    <th>Rural Hospitals</th>
    <th>Rural Beds</th>
    <th>Urban Hospitals</th>
    <th>Urban Beds</th>
    <th>Total Hospitals</th>
    <th>Total Beds</th> 
    </tr>`; 


for(var r of api_data.data.regional) { 
    tab += `<tr> 
            <td>${r.state} </td> 
            <td>${r.ruralHospitals}</td>
            <td>${r.ruralBeds}</td>
            <td>${r.urbanHospitals}</td>
            <td>${r.urbanBeds}</td>
            <td>${r.totalHospitals}</td>
            <td>${r.totalBeds}</td>  	 
        </tr>`; 
}
document.getElementById("hospital").innerHTML = tab; 
} 
