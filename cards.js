// Create an HTML page that contains a text area and a button
// labeled Create.
// When the user enters in text into the text area and then clicks the
// create button, create a new card element in the DOM. You decide the
// height/width of the card.
// When the user clicks the Delete button, the containing card, and no
// other cards, should then be removed from the DOM. Not just made
// invisible, actually removed from the DOM.

var clickCreate = document.getElementById("create");
var outputCard = document.getElementById("card-container");

// event listener creates a card --enter
	// Added Enter event listener as afterthought. need to point both event listeners to the same function, not write the function twice.
document.addEventListener("keyup", function(event) {
	if (event.which === 13) {
		var newCard = document.getElementById("input-text");
		outputCard.innerHTML += "<div class='output-card'> <p>" + newCard.value + "</p> <input type='button' id='delete' value='Delete'> </div>";
		console.log(event);
		newCard.value = "";
		return newCard;
	}
});

// event listener creates a card --enter
clickCreate.addEventListener("click", function() {
	var newCard = document.getElementById("input-text");
	outputCard.innerHTML += "<div class='output-card' id='output-card'> <p>" + newCard.value + "</p> <input type='button' class='button1' id='delete' value='Delete'> </div>";
	console.log(outputCard);
	newCard.value = "";
	return newCard;
});

// event listener deletes card
outputCard.addEventListener("click", function(event) {
	if (event.target.id === "delete"){
		event.target.parentNode.remove();
		console.log(event);
		console.log(event.target.childNode);
	}
});
