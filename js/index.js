$(document).ready(function(){

	$("body").addClass("running");
	
	

	setTimeout(function () {
		$("body").removeClass("running");
		$("body").addClass("starting");

		setTimeout(function () {		
			$(".camera").addClass("cameraUp");			  					
		},0)
		setTimeout(function () {
			$.each( $(".wordRowOne>img"), function( key, value ) {
				setTimeout(function () {
					$(".wordRowOne>img")[key].classList.add("wordScale");			  					
				},key*200);
			});
		},1000);
		setTimeout(function () {
			$.each( $(".wordRowSecond>img"), function( key, value ) {
				setTimeout(function () {
					$(".wordRowSecond>img")[key].classList.add("wordScale");		  					
				},key*200);
			});
		},2000);
	}, 6000);
});


