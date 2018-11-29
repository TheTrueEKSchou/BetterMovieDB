$(document).ready(function(){
	"use strict";
	
	var request = new XMLHttpRequest();
    request.open("GET", "movies.json", false);
    request.send(null);
    var obj = JSON.parse(request.responseText);
	
	for (var key in obj) {
    	if (obj.hasOwnProperty(key)) {
			$(".card").eq(0).clone().appendTo(".all .cards").find(".title").text(obj[key].title).next().text("Year: "+obj[key].year).next().text("Genre: "+obj[key].genre).parent().parent().find("img").attr({src: "img/"+obj[key].img, alt: obj[key].title});
    	}
	}
	
	$(".card").eq(0).remove();
	
	$(".link").click(function(){
		if($(this).val() === "all"){
			$(this).parent().parent().appendTo(".favorite .cards");
			$(this).text("Remove from Favorite").val("favorite");
		}else{
			$(this).parent().parent().appendTo(".all .cards");
			$(this).text("Add to Favorite").val("all");
		}
	});
});