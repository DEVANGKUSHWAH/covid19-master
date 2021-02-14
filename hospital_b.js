
const api_url_hospital2 = "https://api.rootnet.in/covid19-in/hospitals/medical-colleges"; 


async function get_hospital2(url) { 

    const response = await fetch(url); 

    var data = await response.json();
    console.log("hospital 2") 
    console.log(data); 

    show_hospital2(data); 
} 

get_hospital2(api_url_hospital2); 

function show_hospital2(api_data) { 
    
    let tab2 = 
        `<tr class="w3-dark-grey"> 
        <th>State Name</th> 
        <th>Institute Name</th>
        <th>City</th>
        <th>Type</th>
        <th>Admission Capacity</th>
        <th>Hospital Beds</th>
        </tr>`; 


    for(var r of api_data.data.medicalColleges) { 
        tab2 += `<tr> 
                <td>${r.state} </td> 
                <td>${r.name}</td>
                <td>${r.city}</td>
                <td>${r.ownership}</td>
                <td>${r.admissionCapacity}</td>
                <td>${r.hospitalBeds}</td> 		 
            </tr>`; 
    }
    document.getElementById("hospital_medical").innerHTML = tab2; 

} 

function medicalCollegesFilter(){
    var input, filter, table, tr, td, i;
    input = document.getElementById("medicalInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("hospital_medical");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        var can_show = false;
        for(c=0; c<6; c++){
            td = tr[i].getElementsByTagName("td")[c];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    can_show = true;
                }
                // if (txtValue.toUpperCase().indexOf(filter) > -1) {
                //     tr[i].style.display = "";
                // } else {
                //     tr[i].style.display = "none";
                // }
            }
        }
        if(can_show){
            tr[i].style.display = "";
        }else{
            tr[i].style.display = "none";
        }
    }
}