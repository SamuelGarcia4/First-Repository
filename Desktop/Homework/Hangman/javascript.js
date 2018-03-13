    var array = ["jazz", "folk", "blues", "pop", "classical", "electronic dance music", "metal", "disco"];
    var randomWord = array[Math.floor(Math.random()*array.length)]
    var rightGuess = [];          
    var wrongGuess = [];      
    var lives = 7;
    var underscore = [];  
    console.log(randomWord);                      

    function generateUnderscore(){
        for(var i=0; i < randomWord.length; i++){
            underscore.push('_');
        }
        return underscore;
        }
        console.log(generateUnderscore());

        document.addEventListener('keypress', function(event) {
            var keyword = String.fromCharCode(event.keyCode);
            console.log(keyword);
            if(randomWord.indexOf(keyword) > -1) {
                rightGuess.push(keyword);
                underscore[randomWord.indexOf(keyword)] = keyword;
                if(underscore == randomWord) {
                    alert("You Win!");
                }
            }
            else{
                wrongGuess.push(keyword);
            }
            console.log(rightGuess);
            console.log(wrongGuess);

        });


    