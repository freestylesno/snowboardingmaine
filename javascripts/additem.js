function addItem(name,price,about,quantityName,imgName){

document.write("<tr><td class = 'blue' colspan = '3'>" +name+ " </td>")
document.write("</tr><tr><td class = 'pad'>Price	<br>$"+price.toFixed(2)+"</td>")
document.write("<td><p>" + about + "</p>")
document.write("<img onmouseover='enlarge()' src = 'images/"+imgName+".jpg' width = '100px' height = '100px'>")
document.write("<br></td><td class = 'pad'>	Quantity")
document.write("<p style = 'display: block; margin-top: -10px;'>")
document.write("<select name = '"+quantityName+"' id = '"+quantityName+"' size = '1'>")
document.write("<option value = '1' selected = 'selected'>1</option>")
document.write("<option value = '2'>2</option>")
document.write("<option value = '3'>3</option>")
document.write("<option value = '4'>4</option>")
document.write("<option value = '5'>5</option>")
document.write("<option value = '6'>6</option>")
document.write("<option value = '7'>7</option>")
document.write("<option value = '8'>8</option>")
document.write("<option value = '9'>9</option>")
document.write("<option value = '10'>10</option>")
document.write("</select></p>")

document.write("<a href='JavaScript:changeQty(\""+quantityName+"\","+price+",\""+name+"\")'>Add to Cart</a>")
document.write("</td></tr><tr>");
}

	function changeQty(item,price,name) {
		switch(item) {
    case "quantitySundayriverSticker":
        var quantity = document.getElementById("quantitySundayriverSticker").value;
        break;
    case "quantitySugarloafSticker":
        var quantity = document.getElementById("quantitySugarloafSticker").value;
        break;
    case "quantitySaddlebackSticker":
        var quantity = document.getElementById("quantitySaddlebackSticker").value;
        break;
    case "quantityShawneSticker":
        var quantity = document.getElementById("quantityShawneSticker").value;
        break;
     
	}
	addToCart(name,quantity,price);
}

