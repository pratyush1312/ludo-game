var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImages = randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImages);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImages2 = randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImages2);


if(randomNumber1 > randomNumber2)
{
	document.querySelector("h1").innerHTMl = "Player 1 Wins the game";
}

else if(randomNumber2 > randomNumber1)
{
	document.querySelector("h1").innerHTMl = "Player 2 wins the game";
}

else
{
	document.querySelector("h1").innerHTMl = "Draw";
}

