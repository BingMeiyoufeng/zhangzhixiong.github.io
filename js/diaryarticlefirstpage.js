var transform='';
var essayurl='';
var essayname='';
function name(){
	transform=decodeURI(location.search);
	essayurl=transform.slice(transform.indexOf("?")+1);
	document.getElementById("essay-page").src = essayurl;
	
	essayname=transform.slice(transform.indexOf('/')+1,transform.indexOf('.'));
	// prompt(essayname,'');
	document.getElementById(essayname).style.color = "black";
}
window.οnlοad=name();
