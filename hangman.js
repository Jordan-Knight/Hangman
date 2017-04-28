var wordbank = ["item1", "item2", "item3", "item4", "item5"];
var alpha = "qwertyuiopasdfghjklzxcvbnm";
var counter = 10;
var letterbank = [];
var word = "";
var wordArray = [];
var hyphenArray = [];



var hangman = {

	chooseWord : 
		function (){
			word = wordbank[Math.floor(Math.random()*wordbank.length)];
			console.log(word);
			
		},
	

	letterArray : 

		function (){
			
			for (i = 0; i < word.length; i++){

				wordArray.push(word.charAt(i));
			}

			console.log(wordArray);
		},
	

	hyphens : 
		function (){
			
			for (i = 0; i < wordArray.length; i++){
				hyphenArray.push("_");
			}
			console.log(hyphenArray);
		},

	populate : 

		function (){
			document.getElementById("letters").innerHTML = hyphenArray;
			document.getElementById("guess-counter").innerHTML = counter;

		},

	

	guesser : 

		function (){
			document.onkeyup = function(event){

				console.log(event.key);
				for (i = 0; i < wordArray.length; i++){

					if (event.key === wordArray[i]){
						
						hyphenArray[i] = wordArray[i];
						document.getElementById("letters").innerHTML = hyphenArray;
						return wordArray;
					}

				}
				if (event.key != wordArray[i] && alpha.indexOf(event.key) > -1){
					counter--;
					letterbank.push(event.key);
					document.getElementById("guess-counter").innerHTML = counter;
					document.getElementById("letter-bank").innerHTML = letterbank;
				}
				else {

			        alert("You gotta pick a letter bud.  You hit the " + event.key + " key.")
			    }
			}
		},

	gameover : {

	},

	setup : 

		function(){
			hangman.chooseWord();
			hangman.letterArray();
			hangman.hyphens();
			hangman.populate();
			hangman.guesser();
			

		},


}







