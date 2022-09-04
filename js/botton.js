function HideOrShowFont(obj) {
			for(var i = 1; i <= 20; i++){
				var objitem = 'a'+i;
				if (objitem == obj) {
					document.getElementById(objitem).style.background = "white"; 
					document.getElementById(objitem).style.color = "black"; 
				}
				else{
					document.getElementById(objitem).style.background = "#EEEEEE"; 
					document.getElementById(objitem).style.color = "gray";
				}
			}
			
			
			
			
}  