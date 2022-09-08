var transform='';
var essayurl='';
var essayname='';
function name(){
	transform=decodeURI(location.search);
	essayurl=transform.slice(transform.indexOf("?")+1);
	document.getElementById("essay-page").src = essayurl;
	
	essayname=transform.slice(transform.indexOf('/')+1,transform.indexOf('.'));//获取文件名，文件名即id名
	document.getElementById(essayname).style.color = "black";	// 修改文章目录颜色
	
	filefoldername=transform.slice(transform.indexOf("?")+1,transform.indexOf('/'));//获取文章所属文件夹
	var filefolderid='';
	if(filefoldername=='readingnote'){
		filefolderid='a1';
	}
	else if(filefoldername=='personalessay'){
		filefolderid='a2';
	}
	else if(filefoldername=='personaldiary'){
		filefolderid='a3';
	}
	window.parent.HideOrShowFont(filefolderid);//调用父页面函数修改目录样式
}
window.οnlοad=name();
