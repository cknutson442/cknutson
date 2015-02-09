function backColor {
	document.body.style.background = 'red';
}

function titleAlert {
	alert(document.title);
}

function emailVal {
	var address = "cknutson@smu.edu";
	var regx = new RegExp("^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$");
	if(address.match(regx) != null)
        	alert(address + " is a valid email");
	else      
        	alert(address + " is not a valid email");
}
