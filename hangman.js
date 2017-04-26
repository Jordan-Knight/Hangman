var wordbank = ["item1", "item2", "item3", "item4", "item5"];
var alpha = "qwertyuiopasdfghjklzxcvbnm";
var counter = 15;
var letterbank = [];

document.onkeyup = function(event) {

	var keyEntered = event.key;

	if (alpha.indexOf(keyEntered) > -1) {

    } 

    else {

        alert("You gotta pick a letter bud.  You hit the " + keyEntered + " key.")
    }
}


var hangman = {

	chooseWord : 
		function (){
			var word = wordbank[Math.floor(Math.random()*wordbank.length)];
			console.log(word);
			return word;
		},
	

	letterArray : 

		function (){
			var wordArray = [];
			for (i = 0; i < word.length; i++){

				wordArray.push(word.charAt(i));
			}

			return wordArray;
		},
	

	hyphens : 
		function (){
			var hyphenArray = [];
			for (i = 0; i < wordArray.length; i++){
				hyphenArray.push("_");
			}
		},

	

	guesser : 

		function (){

			var eventKey = document.onkeyup;

			for (i = 0; i < wordArray.length; i++){

				if (eventKey === wordArray[i]){
					return wordArray[i];
				}

				else {
					counter--;
				}

			}
		},

	

}

console.log(wordbank);