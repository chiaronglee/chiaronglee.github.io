"use strict";

$(document).ready( () => {
    $("#start_animation").click(() => {
 // runs when the "start animation" button is click 
 
 $("#top h1").animate( { fontSize: "450%", opacity: 1 }, 5000 )
 .animate( {fontSize: "120%" }, 5000 );
 $("#top h1").css("color","red");

 }); // end click
}); // end ready 

