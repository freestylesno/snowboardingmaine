//check for valid data
			function valivateForm(){
				//check fname
				
				if(document.Sform.Mname.value == ''){
					alert("You must enter the moutain name");
					//focus on fname
					document.Sform.Mname.focus();
					return false;
				}
				else if(document.Sform.Locname.value == ''){
					alert("You must enter the location of the moutain");
					//focus on fname
					document.Sform.Locname.focus();
					return false;
				}
				else if (document.Sform.Odate.value == ""){
					alert("You need to enter the opening date");
					document.Sform.Odate.focus();
					return false;
				}
				else if (document.Sform.desc.value == ""){
					alert("you must enter a question or comment")
					document.Sform.desc.focus();
					return false;
				}
				else if((document.Sform.jumps.checked == false) && 
						(document.Sform.rails.checked == false) &&
						(document.Sform.moguls.checked == false) &&
						(document.Sform.glades.checked == false) &&
						(document.Sform.chairlift.checked == false) &&
						(document.Sform.Tbar.checked == false)&&
						(document.Sform.nothing.checked == false)){
					alert("Please tell us something about the features.");
					return false;
				}
				else{
					return true;
				}
			
			}



