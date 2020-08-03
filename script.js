let instagram = false;
function insta() {
	if (!(instagram)) {
		instagram=true
		document.getElementById('li').style.height = "300px";
	} else if (instagram) {
		instagram=false
		document.getElementById('li').style.height = "20px";
	}
}