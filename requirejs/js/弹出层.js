require(["jquery","dialog"],function($,dialog){
	$("#btn").on("click",function(){
		var settings = {
			width : "500",
			height : "100",
			title : "我的弹出层",
			content : ""
		};
		dialog.open(settings);
	});
});