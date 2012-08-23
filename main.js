var calculateBMI = function() {
	
	var height = $("#height_slider").val();
	var weight = $("#weight_slider").val();
	
	var bmi = height/100;
	bmi = bmi*bmi;
	bmi = weight / bmi;
	
	document.getElementById("your_bmi").innerHTML = bmi;
};

var calculateHR = function() {
	var gender = $("input[name='radio_gender']:checked").val();
	var age_slider = $("#age_slider").val();
	var maxHR = 150;
	
	if (gender == "women") {
		maxHR = 230 - age_slider;
	} else {
		maxHR = 220 - age_slider;
	}
	
	document.getElementById("your_heartrate").innerHTML = maxHR;
	
	var hrZone1 = 
	
	document.getElementById("lt_zone1_min").innerHTML = Math.round((maxHR*50)/100);
	document.getElementById("lt_zone1_max").innerHTML = Math.round((maxHR*60)/100);
	
	document.getElementById("lt_zone2_min").innerHTML = Math.round((maxHR*60)/100);
	document.getElementById("lt_zone2_max").innerHTML = Math.round((maxHR*70)/100);
	
	document.getElementById("lt_zone3_min").innerHTML = Math.round((maxHR*70)/100);
	document.getElementById("lt_zone3_max").innerHTML = Math.round((maxHR*85)/100);
	
	document.getElementById("lt_zone4_min").innerHTML = Math.round((maxHR*85)/100);
	document.getElementById("lt_zone4_max").innerHTML = Math.round((maxHR*95)/100);
}