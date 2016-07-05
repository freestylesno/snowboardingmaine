var banner =  new Array(
	"images/snowboardingB1.png",
	"images/snowboardingB2.png",
	"images/snowboardingB3.png");
var i = 0;
//cycle though banner one image at a time repeatidly. with 3 second wait.
function changePictures(){
	if (i == banner.length){
		i = 0
	}

	document.Banner.src =  banner[i];
	i++;
	//set time out befor rerunning to 3 seconds... not really sure 100% what this is doing :/
	setTimeout("changePictures()",3000);
	}
	
function imageLink(){
			var url = "";
			switch(i){	
				case 1:
					url = "http://www.sugarloaf.com/";
					break;
				case 2:
					url = "https://www.sundayriver.com";
					break;
				case 3: 
					url = "http://www.saddlebackmaine.com/";
					break;
				}
				window.location = url;
		}


