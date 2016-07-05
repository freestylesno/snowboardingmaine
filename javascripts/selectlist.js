function displayImages(){
				var images =  new Array(
					"images/placeholder.png",
					"images/snowboardingSl1.png",
					"images/snowboardingSl2.png",
					"images/snowboardingSl3.png",
					"images/snowboardingSl4.png"
					
					)
			
				var desc =  new Array(
					"When you make a selection from the list, a complete description and the price will display in this window.",
					"There are several places to lodge on the moutain.  The Jorrdan Hotel and Grand Summit are the two hotels.  There is also The snowcap in and many condo options",
					"Tickets prices are $87 for adults $69 for teens and $56 for Juniors and seniors.",
					"SundayRiver while located in Newery sits right next to the town of bethel.",
					"The moutain is open Weekdays, 9 a.m. - 4 p.m."
					);
				//get selected and assign to image and description 
				var selected = document.Attractions.attractionList.selectedIndex;
				document.Attractions.attractionDescription.value = desc[selected];
				document.Attractions.attractionPicture.src = images[selected];
				
			}