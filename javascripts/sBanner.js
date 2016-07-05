var sBanner =  new Array(
	"images/banner1.png",
	"images/banner2.png",
	"images/banner3.png");
var i = 0;
//cycle though banner one image at a time repeatidly. with 3 second wait.
function displayBanner(){
	v = getCookie("visits")
	if(v != null && v != ""){
		//TODO get vistits and mod 1-3
		v = v % 3;
		v++;
		addCookie("visits",v);
	}
	else{
		//TODO create cookie and set to 0
		v = 1
		addCookie("visits",v);
	}
	
	img = v-1;
	document.sBanner.src = sBanner[img];
	}

