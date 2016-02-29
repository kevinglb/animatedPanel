(function(){
	$("input.form-control").focus(function(){
		var d = $(this).parent().find(".form-group");
		d.addclass("focused");
	});	
}())