//$(document).ready(function () {
	// var myNavDisplay = document.getElementById("myNav");
	//myNavDisplay.style.display = "none";

	var myNavDisplay = document.querySelector(".overlay");

	if(myNavDisplay) {
		myNavDisplay.addEventListener("click", function() {
			console.log("hello");
			myNavDisplay.style.display = "block";
		// if(myNavDisplay.style.display = "none"){
		// 	myNavDisplay.style.display = "block";
		// }
	});
	}

	// function openNav() {

	//     //var myNavDisplay = document.getElementById("myNav");
	//     var myNavDisplay = document.querySelector(".overlay");

	//     //myNavDisplay.style.display = "block";

	//     if (myNavDisplay.style.display = "none") {
	//     	myNavDisplay.style.display = "block";
	//     } else if (myNavDisplay.style.display = "block") {
	//     	myNavDisplay.style.display = "none";
	//     }

	// }

	function closeNav() {
	    document.getElementById("myNav").style.display = "none";
	}

	// function changeImage() {

	//         if (document.getElementById("icon").src == "../images/icons/menu.png") 
	//         {
	//             document.getElementById("icon").src = "../images/icons/x.png";
	//         }
	//         else 
	//         {
	//             document.getElementById("icon").src = "../images/icons/menu.png";
	//         }
	//     }
//});