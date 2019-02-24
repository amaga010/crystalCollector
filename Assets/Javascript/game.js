var randomNumber = Math.floor(Math.random() * 102 + 19);
    console.log (randomNumber)

var randomNumber2 = Math.floor(Math.random() * 12 + 1);
var randomNumber3 = Math.floor(Math.random() * 12 + 1);
var randomNumber4 = Math.floor(Math.random() * 12 + 1);
var randomNumber5 = Math.floor(Math.random() * 12 + 1);

var yourScore = 0  
var wins = 0
var losses = 0 

// I couldnt get the game to reset where it would
// generate a new number or new values for the crystals.
// I tried this:
    function restart() {
        if (yourScore > randomNumber || yourScore === randomNumber);
        yourScore = 0;
        var randomNumber = Math.floor(Math.random() * 102 + 19);
        var randomNumber2 = Math.floor(Math.random() * 12 + 1);
        var randomNumber3 = Math.floor(Math.random() * 12 + 1);
        var randomNumber4 = Math.floor(Math.random() * 12 + 1);
        var randomNumber5 = Math.floor(Math.random() * 12 + 1);
}


$('#image1').click(image1Function);   
    function  image1Function() {
        randomNumber2
        console.log(randomNumber2)
        var num = parseInt($(this).attr("randomNumber2"));
        yourScore += num
        $("#addedScore").html(yourScore)
        console.log(yourScore)
        if (yourScore > randomNumber) {
            losses ++;
            
            restart();
            $("#losses").html(losses);
            console.log(losses)
        }
        else if (yourScore === randomNumber) {
            wins ++;
           
            restart();
            $("#wins").html(wins)
            console.log(wins)
        }
    };

$('#image2').click(image2Function);
    function  image2Function() {
        randomNumber3
        console.log(randomNumber3)
        var num = parseInt($(this).attr("randomNumber3"));
        yourScore += num
        $("#addedScore").html(yourScore)
        console.log(yourScore)
        if (yourScore > randomNumber) {
            losses ++;
            
            restart();
            $("#losses").html(losses)
        console.log(losses)
        }
        else if (yourScore === randomNumber) {
            wins ++
           
            restart();
            $("#wins").html(wins)
            console.log(wins)
        }
    };

$('#image3').click(image3Function);
    function  image3Function() {
        randomNumber4
        console.log(randomNumber4)
        var num = parseInt($(this).attr("randomNumber4"));
        yourScore += num
        $("#addedScore").html(yourScore)
        console.log(yourScore)
        if (yourScore > randomNumber) {
            losses ++;
            
            restart();
            $("#losses").html(losses)
        console.log(losses)
        }
        else if (yourScore === randomNumber) {
            wins ++;
            
            restart();
            $("#wins").html(wins)
            console.log(wins)
        }
    };

$('#image4').click(image4Function);
    function  image4Function() {
        randomNumber4
        console.log(randomNumber5)
        var num = parseInt($(this).attr("randomNumber5"));
        yourScore += num
        $("#addedScore").html(yourScore)
        console.log(yourScore)
        if (yourScore > randomNumber) {
            losses ++;
            
            restart();
            $("#losses").html(losses)
            console.log(losses)
        }
        else if (yourScore === randomNumber) {
            wins ++;
            
            restart();
            $("#wins").html(wins);
            console.log(wins)
        }
    }