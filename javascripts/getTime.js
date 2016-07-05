function gettime(){
				var time = new Date();
				var h = time.getHours();
				//document.write(h);
				var m =  time.getMinutes();
				//document.write(m);
				var tod = "AM";
				if (h>12){
					h=h-12;
					tod = "PM";
					//this can be used to implement good morning good after noon etc.
				}
				var out = h + ":" + m + tod;
				document.tclock.time.value= out;
			
			}
