$(function(){
// 输入框输入后颜色改变以及获取焦点时value为空
		$('input').each(function(index, element) {
	  		var oldVal=$(this).val();
			$(this).focus(function(){
	  			focusOldVal=$(this).val();
	 			if(oldVal==focusOldVal){
					$(this).val('');
					}
	 			}).blur(function(){
					blurOldVal=$(this).val();
					if(blurOldVal==''){
						$(this).val(oldVal);
						$(this).css('color','#ccc')
						}
					}).keyup(function(){
						$(this).css('color','#333')
						})
     	});
// 输入框效果结束

});
