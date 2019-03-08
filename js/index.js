$(function(){

	var mySlider = $(".main_product_slider_wrap2").bxSlider({
		mode:"horizontal",
		speed:500,
		pager:false,
		moveSlides:1,
		slideWidth:156,
		minSlides:3,
		maxSlides:3,
		slideMargin:7,
		auto:true,
		autoHover:true,
		controls:false,
		infiniteLoop:true,
	
	});
	$(".main_slider_button_prev").on("click",function(){
		mySlider.goToPrevSlide();  
		return false; 	
	});
	$(".main_slider_button_next").on("click",function(){
		 mySlider.goToNextSlide(); 
		 return false; 
    });

	/*메인 프로덕트 배경*/

	$(".main_product_slider01").click(function(){
		$(".main_product_bg_wrap").css({"background":"url(./img/main_product_01.png)", 'background-repeat' : 'no-repeat', 'background-position':'bottom left', 'background-size':'55%'});
		$("#main_cont_product").css("background-color","rgb(226, 96, 70)");

	});
	$(".main_product_slider02").click(function(){
		$(".main_product_bg_wrap").css({"background":"url(./img/main_product_02.png)", 'background-repeat' : 'no-repeat', 'background-position':'bottom left', 'background-size':'55%'});
		$("#main_cont_product").css("background-color","#15b5c1");

	});
	$(".main_product_slider03").click(function(){
		$(".main_product_bg_wrap").css({"background":"url(./img/main_product_03.png)", 'background-repeat' : 'no-repeat', 'background-position':'bottom left', 'background-size':'55%'});
		$("#main_cont_product").css("background-color","#847e71");

	});
	$(".main_product_slider04").click(function(){
		$(".main_product_bg_wrap").css({"background":"url(./img/main_product_04.png)", 'background-repeat' : 'no-repeat', 'background-position':'bottom left', 'background-size':'55%'});
		$("#main_cont_product").css("background-color","#c4a559");

	});

});