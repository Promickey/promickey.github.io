 $(function(){
 	vitriedu = $('#khoiedu').offset().top;
 	$(".xuong, .kn").click(function(){
 		$('body,html').animate({scrollTop:vitriedu});
 		return false;
 	})

 	vitrisanpham = $('#khoisanpham').offset().top;
 	$(".sp").click(function(){
 		$('body,html').animate({scrollTop:vitrisanpham});
 		return false;
 	})

 	vitriphanhoi = $('#phanhoi').offset().top;
 	console.log(vitriedu); 
 	$(".cm").click(function(){
 		$('body,html').animate({scrollTop:vitriphanhoi});
 		return false;
 	})
 
})  
 