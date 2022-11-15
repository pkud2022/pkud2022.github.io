//ver2.0

/*function roll(){
	var computerPick = Math.floor(Math.random() * 3)+1;
	
	if( computerPick = 1){
		computerPick = "rock";
	}
	else if( computerPick = 2){
		computerPick = "paper";
	}
	else if( computerPick = 3){
		computerPick = "scissors";
	}
	else{
		alert("roll() function error");
	}
}*/

function check(){
	//var age=parseInt(document.getElementById("formAge").value);
	var pick = document.getElementById("pick").value;
	var computerPick = Math.floor(Math.random() * 3)+1;	
		
//	if( computerPick = 1){
//	var	computerPick = "rock";
//	}
//	else if( computerPick = 2){
//	var	computerPick = "paper";
//	}
//	else if( computerPick = 3){
//	var	computerPick = "scissors";
//	}
//	else{
//		alert("roll() function error");
//	}
	
	
	if(pick=="rock"){
		if(computerPick=="1"){
			document.getElementById("game").innerHTML="Your choice was "+pick+". The computer chose rock. That's a draw.";
		}
		else if(computerPick=="2"){
			document.getElementById("game").innerHTML="Your choice was "+pick+". The computer chose paper. You lose.";
		}
		else if(computerPick=="3"){
			document.getElementById("game").innerHTML="Your choice was "+pick+". The computer chose scissors. You win.";
		}
		hide();
	}
	else if (pick=="paper"){
		if(computerPick=="1"){
			document.getElementById("game").innerHTML="Your choice was "+pick+". The computer chose rock. You win.";
		}
		else if(computerPick=="2"){
			document.getElementById("game").innerHTML="Your choice was "+pick+". The computer chose paper. That's a draw.";
		}
		else if(computerPick=="3"){
			document.getElementById("game").innerHTML="Your choice was "+pick+". The computer chose scissors. You lose.";
		}
		hide();
	}
	else if (pick=="scissors"){
		if(computerPick=="1"){
			document.getElementById("game").innerHTML="Your choice was "+pick+". The computer chose rock. You lose.";
		}
		else if(computerPick=="2"){
			document.getElementById("game").innerHTML="Your choice was "+pick+". The computer chose paper. You win.";
		}
		else if(computerPick=="3"){
			document.getElementById("game").innerHTML="Your choice was "+pick+". The computer chose scissors. That's a draw";
		}
		hide();
	}
	else{
		alert("Invalid input, try again");
	}
}
/*		
		{
			document.getElementById("ageCheck").innerHTML="Welcome, "+name;
		}
		hide();
	}
	else if(age<18){
		document.getElementById("ageCheck").innerHTML="Sorry "+name+", not tonight!";	
		hide();
	}
	else {
		alert("Invalid input, try again");
	}*/
	


function hide(){
document.getElementById("button").style.visibility="hidden";
}