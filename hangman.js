var hangman = {

	wordbank : {

		item1 : "item1",
		item2 : "item2"

	},

	imagebank = {

	}

	chooseWord : {
		function (){
			var word = wordbank[Math.floor(Math.random()*wordbank.length)];

			return word;
		}
	},

	letterArray : {

		function (){
			var wordArray = [];
			for (i = 0; i < word.length; i++){

				wordArray.push(word.charAt(i));
			}

			return wordArray;
		}
	},

	guesser : {

		function (){

			var eventKey = document.onkeyup;
			var counter = 10;

			for (i = 0; i < wordArray.length; i++){

				if (eventKey === wordArray[i]){
					return wordArray[i];
				}

				else {
					counter--;
				}

			}
		}
	},



















}