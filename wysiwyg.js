// Create an array of objects that represents famous people (see structure below).
// Create a text input in your DOM.
// Beneath that, create a container, block element in your DOM.
// Create a DOM element for each of the objects inside the container.
//  Style your person elements however you like.
// For every even numbered element, have a light yellow background.
// For every odd numbered element, have a light blue background.
// Each element's DOM structure should be as shown below.
// When you click on one of the person elements, a dotted border should appear around it.
// When you click on one of the person elements, the text input should immediately gain 
// focus so that you can start typing.
// When there is a highlighted person element, and you begin typing in the input box,
//  the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field,
//  then the content of the input field should immediately be blank.

//*********************************//JSON\\**********************************************
// potentially attempting to use JSON import on the assignment
// var xmlhttp = new XMLHttpRequest(),
// 	json;

// xmlhttp.onreadystatechange = function() {
// 	if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
// 		json = JSON.parse(xmlhttp.responseText);
// 		console.log(json);
// 	}
// };

// xmlhttp.open('GET','people.json', true);
// xmlhttp.send();
// ***********************************************************************************

console.log("hello");

//A variable that contains an array of objects of the people to be displayed in the DOM
var people = [
  	{
  		title: "France",
  		name: "Napoleon Bonaparte",
  		bio: "Emporer of France for a while",
  		image: "images/napoleon.jpg",
  		lifespan: {
    		birth: 1769,
    		death: 1821
  		}
  	},
	{
		title: "United States",
		name: "George Washington",
		bio: "First President of the United States",
		image: "images/washington.jpg",
		lifespan: {
			birth: 1732,
			death: 1799
		}
	},
	{ 
		title: "India",
		name: "Gandhi",
		bio: "civil rights activist",
		image: "images/gandhi.jpg",
		lifespan: {
			birth: 1869,
			death: 1948
		}
	}
];
console.log(people)

//Variables to correlate with what is in the DOM
var input = document.getElementById("input");
var output = document.getElementById("output");
var card = document.getElementsByClassName("card");
var selectedCard;
//Counter has to be a global variable(I think) too many functions depend on the count (I think)
var counter = 0;




function intoDOM(){
	//for loop that puts the build cards into the DOM
	for (;counter < people.length; counter++) {
		// console.log(people[counter].name)
		// console.log(people[counter])
		console.log(counter)
		buildCard(people);
	}
	selected();
}

//function that builds cards from the array of objects called People
function buildCard(person) {
	output.innerHTML += `<div id="${counter+1}" class="card">
	<h2><u>${person[counter].name}</u></h2>
	<person><h3>${people[counter].bio}</h3><br>
	<img class="images" src="${people[counter].image}"</article>
	<footer><b>${people[counter].lifespan.birth}-${people[counter].lifespan.death}</b></footer>
	</div>`
}

//calling the function to put things into the DOM
intoDOM(buildCard,people); 	


//function that changes the border of the selected div and adds focus to input
function selected() {
	for (var i = 0; i < people.length; i++) {
		console.log("events and stuff");
		var napoleon = document.getElementById("1");
		var washington = document.getElementById("2");
		var gandhi = document.getElementById("3");
		napoleon.addEventListener("click",function() {
			napoleon.style.border = '5px dotted red';
			input.focus()
			
		})
		washington.addEventListener("click",function() {
			washington.style.border = '5px dotted red';
			input.focus()
			
		})
		gandhi.addEventListener("click",function() {
			gandhi.style.border = '5px dotted red';
			input.focus()
			
			
		})
	}
}

//function that will unselect the appropraite div
function unselected() {
	for (let i = 0; i < people.length; i++)
}

function edits(input,card) {
	var editedBio = 
	editedBio.innerHTML = input.value;
}

//a keyup function
function enterKey(keypress){
		if (keypress.which === 13) {
			input.value = "";
		}
	}
	document.addEventListener("keypress", enterKey);
