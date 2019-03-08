$(function(){
	/*var win_width = $(window).width();*/
	/*if(win_width < 1201)*/


/*모바일/탭 메뉴*/

	$(".mob_menu").click(function(e){	
		e.preventDefault();
		$("#menu_wrap").toggleClass("open");
		if($("#menu_wrap").hasClass("open")){
			 $("#menu_wrap").css("z-index","9").animate({opacity : "0.95"},"fast");
			 $(".mob_menu").css({"background":"url(./img/menu_bar_x.png)no-repeat center center","background-size":"contain"});
			 $("#main_wrap").css("position","fixed");
		}
		else{
			 $("#menu_wrap").css("z-index","-9").animate({opacity:"0"},"fast");
			 $(".mob_menu").css({"background":"url(./img/menu_bar.png)no-repeat center center","background-size":"contain"});
			  $("#main_wrap").css("position","absolute");
		}
	});



});