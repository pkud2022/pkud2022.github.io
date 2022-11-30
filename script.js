let shoppingList=[];

function addItems(){
	let num1=prompt("Enter amount of shopping items to add to your list. Please use digits only.");
	for(i=0;i<num1;i++){
		shoppingList[i]=prompt("Please add "+num1+" items to your shopping list to get the shopping started.");
	}
	
	document.getElementById("main").innerHTML=shoppingList.toString();//this line prints the list in one line with commas
	listItems2();
}

function listItems(){
	document.getElementById("main").innerHTML=shoppingList.toString();
}
function addToEnd(){
	shoppingList.push(prompt("Enter item name"));
	listItems2();
}
function removeFromEnd(){
	shoppingList.pop();
	listItems2();
}
function addToStart(){
	shoppingList.unshift(prompt("Enter item name"));
	listItems2();
}
function removeFromStart(){
	shoppingList.shift();
	listItems2();
}
function listItems2(){
	
	//  document.getElementById("main").innerHTML=shoppingList.toString(); 	//this line prints the list in one line with commas

      let itemsList = document.getElementById("shoppingList");
      for (i = 0; i < shoppingList.length; ++i) {
         var ulItem = document.createElement('li');
         ulItem.innerText = shoppingList[i];
         itemsList.appendChild(ulItem);
	  }

}
function f5(){
    window.location.reload();
} 