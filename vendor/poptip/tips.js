var mytips={};
mytips.showTip=function(msg){
	tips=$(".ui-poptips");
	$("#tipmsg").html(msg);
	tips.show();
	setTimeout(function(){
		tips.hide();
	},2000)
}