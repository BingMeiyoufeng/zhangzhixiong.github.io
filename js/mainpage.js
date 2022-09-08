function HideOrShowFont(obj) {//修改点击后top目录字体
			for(var i = 1; i <= 13; i++){
				var objitem = 'main'+i;
				if (objitem == obj) {
					document.getElementById(objitem).style.background = "black"; 
					document.getElementById(objitem).style.color = "white"; 
				}
				else{
					document.getElementById(objitem).style.background = "white"; 
					document.getElementById(objitem).style.color = "gray";
				}
			}
}  