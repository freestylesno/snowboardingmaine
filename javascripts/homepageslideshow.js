
				var slidePics = new Array(
					"images/snowboardingS1.png",
					"images/snowboardingS2.png",
					"images/snowboardingS3.png",
					"images/snowboardingS4.png"
					);
				var i = 0;
			

				function movePrevious(){
					if(document.slideshow && i > 0){
						i--;
						document.display.src = slidePics[i];
					}
					else{
							last();
					}

				}
				function moveNext() {
					if(document.slideshow && i < slidePics.length-1){
						i++;
						document.display.src = slidePics[i];
					}
					else{
							first();
					}
			

				}
				function last () {
					i = slidePics.length-1;
					document.display.src = slidePics[i];
				}
				function first(){
					//reset counter to 0 & set image
					i = 0;
					document.display.src = slidePics[i];
				}
