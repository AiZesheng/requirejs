define(["jquery"],function($){
	function dialog(){

	}
	return {
		open : function(options){
			var settings = {
				width : "400px",
				height : "300px",
				title : "弹出层",
				content : ""
			};
			$.extend(settings,options);	//合并对象
			var html = '<div class="dialog-container">'

			+'<div class="dialog-mask"></div>'

			+'<div class="dialog-box">'

			+'<div class="dialog-title">'
			+'<div class="dialog-title-item">'+settings.title+'</div>'
			+'<div class="dialog-title-close">[X]</div>'
			+'</div>'

			+'<div class="dialog-content"></div>'
			+'</div>'

			+'</div>';
			$(document.body).append(html);
			$(".dialog-box").css({
				width : settings.width,
				height : settings.height,
				marginTop : -settings.height/2,
				marginLeft : -settings.width/2
			});
			$(".dialog-content").css({
				height : settings.height - 30
			});
			$(".dialog-title-close").on("click",function(){
				$(".dialog-container").remove();
			});
		}
	};
});