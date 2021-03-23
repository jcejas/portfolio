$(document).ready(function(){
    
	if ($("#menu").offset().top > 60) {
		$("#menu").addClass("change-background");
		$(".nav-item a").addClass("letter-white");

	} else {
		$("#menu").removeClass("change-background");
		$(".nav-item a").removeClass("letter-white");
	}
});

$("#navbarIronman ul li a").on("click",function(){
	$("#sound-effect").get(0).play();
})

$("#ironman-button").on("click",function(){
	$("#sound-effect").get(0).play();
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

function Proximamente(){
	
}