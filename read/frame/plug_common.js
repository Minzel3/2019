$(document).ready(function($) {
	$('.menu_icon').click(function(){
		if ($('.nav_menu').hasClass('close_menu')) {
			$('.nav_menu').addClass('open_menu');
			$('.nav_menu').removeClass('close_menu');
			$('.nav_menu a').addClass('fadeInR')
		}else{
			$('.nav_menu').addClass('close_menu');
			$('.nav_menu').removeClass('open_menu');
			$('.nav_menu a').removeClass('fadeInR')
		}
	})
});

$(document).ready(function(){
    $(window).scroll(function(){
        b = $(this).scrollTop();
         var topmain = $('.header').height()+20;   //页面滚动的高度
         if(b > topmain){
          $('.header').addClass('header_smail');
        }
        else{
            $('.header').removeClass('header_smail');
        }
    });
});

$(document).ready(function(){
	$(window).scroll(function(){
	if($(window).scrollTop() > 190){
			$(".nav_item").css({
				position:'fixed',
				top:'60px',
				width:'100%',
			});
		}else{
			$(".nav_item").css("position","static");
		}
	})
});

//返回顶部
$(function(){
	$(window).scroll(function() {
		if($(window).scrollTop() >= 300){
			$('.Top').fadeIn(300);
		}else{
			$('.Top').fadeOut(300);
		}
	});
	$('.Top').click(function(){$('html,body').animate({scrollTop: '0px'}, 300);});
});
//结束
$(function(){
	$('.mb-main__nav a').click(function(){
		var _index = $(this).index();
	$(this).addClass('acit').siblings().removeClass('acit');
	$('.index_l').eq(_index).addClass('list_active').siblings().removeClass('list_active')
})
})





