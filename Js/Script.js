var prev_id;
function validateForm()
{
if (document.forms["myForm"]["fname"].value==null || document.forms["myForm"]["fname"].value=="")
{
alert("Give Your Name");
return false;
}
if (document.forms["myForm"]["gender"].value==null || document.forms["myForm"]["gender"].value=="")
{
alert("Choose Your gender");
return false;
}
if (document.forms["myForm"]["email"].value==null || document.forms["myForm"]["email"].value=="")
{
alert("Email Is not Valid");
return false;
}
if (document.forms["myForm"]["game"].value==null || document.forms["myForm"]["game"].value=="")
{
alert("Choose Dogs or Cats");
return false;
}
return true;
}
function showLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		alert('Your browser does not support geolocation');
	}
}
			
function showPosition(position){
	alert("Latitude: "+ position.coords.latitude + " Longitude: " + position.coords.longitude);
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
	prev_id = ev.target.parentElement.id;
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
	var cur_element =  document.getElementById(data);
	var prev_element = document.getElementById(ev.target.id);
	
    ev.target.parentElement.appendChild(cur_element);
	document.getElementById(prev_id).appendChild(prev_element);
	
}