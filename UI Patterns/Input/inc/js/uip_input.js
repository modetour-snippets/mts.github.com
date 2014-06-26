$(function(){
	$('.UIP_Input').on('change',function(e){
		e.preventDefault();
		var __name__ = $(this).find('input').attr('name');
		if($(this).hasClass('radio')){
			$('.UIP_Input.radio').find('input[name='+__name__+']').parent().removeClass('active');
			$('.UIP_Input.radio').find('input[name='+__name__+']').removeAttr('checked');
			$(this).addClass('active');
		}else if($(this).hasClass('checkbox')){
			$(this).toggleClass('active');
		}
		($(this).hasClass('active')) ? $(this).find('input[name='+__name__+']').attr('checked','checked') : $(this).find('input[name='+__name__+']').removeAttr('checked');
	});
});