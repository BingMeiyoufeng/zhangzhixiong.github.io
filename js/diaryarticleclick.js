function essaynameclick(clickid){//将点击后的文字颜色加黑，其他文字变浅
	var classelement=document.getElementsByClassName("articletitle");
	for (var i in classelement){
		classelement[i].style.color="#B1B1B1";// #B1B1B1
		document.getElementById(clickid).style.color="black";
	}
}
