// Set volume to 50%
const audio = document.querySelector("audio");
audio.volume = 0.5;

$(document).ready(function(){
    
	if ($("#menu").offset().top > 60) {
		$("#menu").addClass("change-background");
		$(".nav-item a").addClass("letter-white");

	} else {
		$("#menu").removeClass("change-background");
		$(".nav-item a").removeClass("letter-white");
	}

	$(".toggle").css("margin-left","15px");
});

$("#navbarIronman ul li a").on("click",function(){
	$("#sound-effect").get(0).play();
})

$("#ironman-button").on("click",function(){
	$("#sound-effect").get(0).play();
});

$("#sound-control").on("click",function(){
	var checked = $('#sound-button').prop('checked');
	if (checked){
		$("#sound-effect").prop("muted",true);
		$(this).prop("title","Activar Sonido");
	} else{
		$("#sound-effect").prop("muted",false);
		$(this).prop("title","Desactivar Sonido");
	}
});

$(window).scroll(function(){
	if ($("#menu").offset().top > 60) {
		$("#menu").addClass("change-background");
		$(".nav-item a").addClass("letter-white");
	} else {
		$("#menu").removeClass("change-background");
		$(".nav-item a").removeClass("letter-white");
	}
});