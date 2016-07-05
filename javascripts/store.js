var totalPrice = 0;

	function addToCart(item,quantity,price){
		//get elements in tbody for "cart"
		var cart = document.getElementById("cartLineItems");
		//create table row
		var row = document.createElement("tr");
		//create an id attribute with a value of the item + _cartRow
		row.setAttribute("id", item + '_cartRow');
		//create a table data cell
		var td1 = document.createElement("td");
		td1.setAttribute("width", '60%');
		td1.appendChild(document.createTextNode(" " + item + " (" + price.toFixed(2) + ") "));
		//create link
		var href = document.createElement("a");
		href.setAttribute("href", "JavaScript:removeFromCart('" + item + "');");
		href.appendChild(document.createTextNode(' Remove Item '));
		//add the hyperlink to the td tag
		td1.appendChild(href);
		//add td to the row
		row.appendChild(td1);

		//create second table cell for quantity
		var td2 = document.createElement('td');
		td2.setAttribute('id',item + '_quantity');
		td2.setAttribute('style','text-align:right; padding-right: 5px');
		td2.setAttribute('width', item + '10%');
		td2.appendChild(document.createTextNode(quantity));
		row.appendChild(td2);
		cart.appendChild(row);
		//create table data for price and appended to cart
		var td3 = document.createElement('td');
		td3.setAttribute('id', item + '_price');
		td3.setAttribute('style', 'text-align:right; padding-right: 5px');
		td3.setAttribute('width', item + '20px');
		var priceTotal = (price*quantity);
		var fpriceTotal = priceTotal.toFixed(2);
		td3.appendChild(document.createTextNode(fpriceTotal));
		row.appendChild(td3);
		cart.appendChild(row);

		//set the cart total and updating current total with new item formatted to 2 decimals
		var total = document.getElementById("cartTotal");
		totalPrice = totalPrice+price*quantity;
		ftotalPrice = totalPrice.toFixed(2);

		var newtotal = document.createElement('td');
		newtotal.setAttribute('style', 'text-align:right; padding-right: 5px');
		newtotal.setAttribute('id','cartTotal');
		//appends a $ to the total
		newtotal.appendChild(document.createTextNode("$"));
		newtotal.appendChild(document.createTextNode(ftotalPrice + ' '));
		total.parentNode.replaceChild(newtotal,total);

		alert(item + " has been added to your cart.");

	}
	function removeFromCart(id){
		//get data from document
		var element = document.getElementById(id + '_cartRow');
		var total =  document.getElementById("cartTotal");
		var price = parseFloat(document.getElementById(id + "_price").innerHTML);
		//update data
		totalPrice -= price;
		ftotalPrice = totalPrice.toFixed(2);
		total.innerHTML = '$' + ftotalPrice + '';
		// actually remove item
		element.parentNode.removeChild(element);
	}
	function viewCart(){
		document.getElementById('cart').style.display = 'block';
	}
  			 
	function printOrder(){
		//variables for date from user
		var Name = "";
		var CustomerAcctNum = "";
		var PhoneNumber = "";
		var ShipToName = "";
		var ShipToStreet = "";
		var ShipToCity = "";
		var ShipToState = "";
		var ShipToZip = "";

		//prompt for info from user
		Name = prompt("Enter your name: ", "");
		CustomerAcctNum = prompt("Enter your customer Account Number: ", "");
		PhoneNumber = prompt("Enter your phone number: ", "");
		ShipToName = prompt("Enter the full name of the person to ship to: ", "");
		ShipToStreet = prompt("Enter Street to ship to: ", "");
		ShipToCity = prompt("Enter City to ship to: ", "");
		ShipToState = prompt("Enter State to ship to: ", "");
		ShipToZip = prompt("Enter Zip to ship to: ", "");
		var display_setting="toolbar = yes, location = no, directies=yes,menubar=yes,";
		display_setting+="scrollbar=yes,width=650, height=600, left=100, top=25";
		var content_value = document.getElementById("cart").innerHTML;

		var docprint=window.open("","",display_setting);
		docprint.document.open();
		docprint.document.write('<html><head><title>Shop England OrderForm</title>');
		docprint.document.write('Thank you for placing an order with BuyEngland.en');
		docprint.document.write('<style> input { display:none } #nonprint {display:none }</style>');
		docprint.document.write('</head><body onLoad="self.print()"><center>');
		docprint.document.write("<h1 style = 'text-align:center'>Buy England Order Form </h1><p style = 'text-align:center'>Thank you for Shopping at Buy England</p><p>"+ Name + "</p><p>" + CustomerAcctNum+"</p><p>" + PhoneNumber + "</p></center>");
		docprint.document.write("<p> Shipping information</p><p> Ship To: " + ShipToName + "</p><p>Ship To Street: " + ShipToStreet + "</p><p> Ship To City: " +ShipToCity + " </p> <p>Ship To State " + ShipToState + "</p><p>Ship to Zip: " + ShipToZip + "</p>");
		docprint.document.write(content_value);
		docprint.document.write('</body></html>');
		docprint.document.close();
		docprint.focus

	}