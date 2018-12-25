function showDescription(descript){
	$("#description").html("Description: " + descript);
}

function hideDescription(){
	$("#description").html("");
}

function validate(){

	var txtZip = $("#phone").val();
	var zip = new String(txtZip);
	if(pn.length != 5 || isNaN(pn)){
		alert("Zipcode is not valid or not in a valid format");
		return false;
	}
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
