var xmlHttp = null;

try {
	xmlHttp = new XMLHttpRequest();
} 
catch (e) {
	try {
		xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
	} 
	catch (e) {
      	xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
}

if(xmlHttp == null) {
    alert("Your browser does not support AJAX requests. :(");
}

function runRequest(page, values) {
    if(xmlHttp) {
        xmlHttp.open("GET", page, false);
        xmlHttp.send(values);
        var return_data = xmlHttp.responseText;
        return return_data;
    }
}
	
function runMacro(macroItem) {
    result = runRequest("/function " + macroItem + ";");
}