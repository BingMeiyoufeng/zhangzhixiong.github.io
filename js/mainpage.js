function HideOrShowFont(obj) {//修改点击后top目录字体
			for(var i = 1; i <= 30; i++){
				var objitem = 'main'+i;
				var colorlist="#6665E5";
				if (objitem == obj) {
					// document.getElementById(objitem).style.background = "black"; 
					// document.getElementById(objitem).style.color = "white"; 
					document.getElementById(objitem).style.borderBottom = "1px solid "+colorlist;
					document.getElementById(objitem).style.color = colorlist;
					document.getElementById(objitem).style.fontWeight = 550;
				}
				else{
					// document.getElementById(objitem).style.background = "white"; 
					// document.getElementById(objitem).style.color = "gray";
					document.getElementById(objitem).style.borderBottom = "0px solid #555555";
					document.getElementById(objitem).style.color = "#555555";
					document.getElementById(objitem).style.fontWeight = 400;
				}
			}
}  