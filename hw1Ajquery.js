"use strict";

$(document).ready( () => {
    $("#start_animation").click(() => {
 // runs when the "start animation" button is click is ready
 
 $("#top h1").animate( { fontSize: "650%", opacity: 1 }, 5000 )
 //$("#top h1").animate( { fontSize: "650%", opacity: 1, left: "+=300"}, 5000 )
 //.animate( {fontSize: "175%", left: "-=180" }, 5000 );  
 .animate( {fontSize: "120%" }, 5000 );
 $("#top h1").css("color","red");

}); // end click
 //$("#top h1").css("color","yellow");
}); // end ready 

