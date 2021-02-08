function verificarRespuestas(){

	var total = 6;
	var puntos = 0;
	
	var myForm = document.forms["quizForm"];
	var respuestas = ["a", "a", "b", "a", "b", "b"];
	// Validation
	for(var i = 1; i <= total; i++){
		if(myForm["p" + i].value === null || myForm["p" + i].value === " "){
			alert("Por favor responda a la pregunta " + i);
			return false;
		}else{
			if(myForm["p" + i].value === respuestas[i - 1]){
				++puntos;
			}
		}
	}
	
	var resultado = document.getElementById('resultado');
	resultado.innerHTML = '<h3>Obtuviste <span>'+ puntos +'</span> de <span> '+ total +' puntos </span></h3>';
	
	return false;
}


$(document).ready(function(){
    $(window).scroll(function(){
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
	
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});