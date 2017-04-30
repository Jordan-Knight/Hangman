var wordbank = ["tyrannosaurus", "triceratops", "velociraptor", "stegosaurus", "dilophosaurus"];
var alpha = "qwertyuiopasdfghjklzxcvbnm";
var counter = 10;
var letterbank = [];
var input = "";
var word = "";
var hyphens = "";
var victory = 0;
var wins = 0;

document.onkeyup = function(event){

    user = event.key;

    if (alpha.indexOf(user) > -1) {
        hangman.userInput(user);
    } 

    else {
        alert("You gotta pick a letter bud. You pressed the " + user + " key.")
    }
}


var hangman = {

	chooseWord : 
		function (){
			word = wordbank[Math.floor(Math.random()*wordbank.length)];
			console.log(word);
			victory = word.length;
			
		},

	hyphens : 
		function (){
			
			for (i = 0; i < word.length; i++){
				hyphens = hyphens + "#";
			}
			console.log(hyphens);
		},

	populate : 

		function (){
			document.getElementById("letters").innerHTML = hyphens;
			document.getElementById("guess-counter").innerHTML = counter;
			document.getElementById("win-counter").innerHTML = wins;

		},


    userInput: 

	    function(key){
	        if (input.indexOf(key) < 0) {

	            if (word.indexOf(key) > -1) {
	                this.guesser(key);

	            } else {
	                letterbank.push(key);
	                document.getElementById("letter-bank").innerHTML = letterbank;
	              	counter -= 1;
	            	document.getElementById("guess-counter").innerHTML = counter;
	            	if (counter === 0){
	            		this.lose();
	            	}

	            }

	            input = input + key;


	        } 

	    },

	printWord: 

		function(word){
	        var nodeText = "";

	        for (var i = 0; i < word.length; i++) {
	            nodeText = nodeText + word[i] + "\t";
	        }
	        var div = document.getElementById("letters");
	        div.innerText = nodeText;
	    },

	

	guesser : 

		function (key){
			var count = 0;
	        var pos = 0;

	        while (word.indexOf(key, count) > -1) {
	          var pos = word.indexOf(key, count)
	          hyphens = hyphens.substring(0, pos) + key + hyphens.substring(pos + 1);
	          console.log(hyphens);
	          count = pos + 1;
	          victory -= 1;
	         }

		    this.printWord(hyphens);

	        if (victory === 0) {

	        	this.win();
	        }
	            

		},

	setup : 

		function(){
			this.chooseWord();
			this.hyphens();
			this.populate();

		},

	win :
		function(){
			console.log("win")
			wins = wins += 1;
			document.getElementById("win-counter").innerHTML = wins;
			this.repop();

		},
	lose :
		function(){

		},
	repop: 
		function(){
			counter = 10;
			letterbank = [];
			input = "";
			word = "";
			hyphens = "";
			victory = 0;
			this.setup();
		},


}







