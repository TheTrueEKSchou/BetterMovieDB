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
	
    function fizzbuzz(){
		for(let i = 1; i <= 100; i++){
			if(i%3 === 0 && i%5 === 0){
				console.log("FizzBuzz");
			}else if(i%3 === 0){
				console.log("Fizz");
			}else if(i%5 === 0){
				console.log("Buzz");
			}else{
				console.log(i);
			}
		}
	}
	
	fizzbuzz();
	
	/*let calculator = {
		sum(){
			return this.a + this.b;
		},

		sub(){
			return this.a - this.b;
		},

		mul(){
			return this.a * this.b;
		},
		
		div(){
			return this.a / this.b;
		},
		
		pow(){
			return Math.pow(this.a,this.b);
		},

		read(){
			this.a = +prompt("Input a number for A");
			this.b = +prompt("Input a number for B");
		}
	};

	calculator.read();
	alert( calculator.a+" + "+calculator.b+" = "+calculator.sum() );
	alert( calculator.a+" - "+calculator.b+" = "+calculator.sub() );
	alert( calculator.a+" * "+calculator.b+" = "+calculator.mul() );
	alert( calculator.a+" / "+calculator.b+" = "+calculator.div() );
	alert( calculator.a+"^"+calculator.b+" = "+calculator.pow() );*/
	
	class Calculator{
		constructor(){
			this.a = +prompt("Input a number for A.");
			this.b = +prompt("Input a number for B.");
		}
		
		sum(){
			return this.a + this.b;
		}
		
		sub(){
			return this.a - this.b;
		}

		mul(){
			return this.a * this.b;
		}
		
		div(){
			return this.a / this.b;
		}
		
		pow(){
			return Math.pow(this.a,this.b);
		}
	}
	
	let calculator = new Calculator();
	alert( calculator.a+" + "+calculator.b+" = "+calculator.sum() );
	alert( calculator.a+" - "+calculator.b+" = "+calculator.sub() );
	alert( calculator.a+" * "+calculator.b+" = "+calculator.mul() );
	alert( calculator.a+" / "+calculator.b+" = "+calculator.div() );
	alert( calculator.a+"^"+calculator.b+" = "+calculator.pow() );
});