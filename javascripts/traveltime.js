
//travel time to moutain  TODO: allow submition of travel time and give time that they will arive
function arrivaltime(){
	var time = new Date();

	time.setHours(time.getHours()+2);

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
			

	//document.travel.arrival.value= time.toTimeString();
	document.travel.arrival.value= out;

}
