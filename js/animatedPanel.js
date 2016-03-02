(function(){
	$("input.form-control").on("focus blur",function(e){
		var d = $(this).parent(".form-group");
		d.toggleClass("focused", (e.type === "focus" || this.value.length > 0));
	});	

	$(".switchBtn").on("click",function(){
		$(".panelOuter").toggleClass("triggered");
		$(".panelInner").toggleClass("triggered");
	});

}())