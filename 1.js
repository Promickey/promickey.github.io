 $(function(){
 	vitriedu = $('#khoiedu').offset().top;
 	console.log(vitriedu); 
 	$(".xuong, .kn").click(function(){
 		$('body,html').animate({scrollTop:vitriedu});
 		return false;
 	})

 	vitrisanpham = $('#khoisanpham').offset().top;
 	console.log(vitriedu); 
 	$(".sp").click(function(){
 		$('body,html').animate({scrollTop:vitrisanpham});
 		return false;
 	})
 
})  
 