(function(){
	$("input.form-control").on("focus blur",function(e){
		var d = $(this).parent(".form-group");
		d.toggleClass("focused", (e.type === "focus" || this.value.length > 0));

	});	

	$(".switchBtn").on("click",function(){
		$(".panelOuter").toggleClass("triggered");
		$(".panelInner").toggleClass("triggered");
	});

	//toggle show/hide password btn function
	var btnList = document.getElementsByClassName("showPassBtn");
	var showPassBtn = btnList.length > 1 ? Array.prototype.slice.call(document.getElementsByClassName("showPassBtn")):btnList;
	console.log()
	for(var i=0,len=btnList.length;i<len;i++){
		var b = showPassBtn[i];
		console.log(b);
		b.addEventListener("click",function(event){
			var btn = event.currentTarget;
			console.log(btn);
			var input = event.currentTarget.previousElementSibling;
			if(input.classList.contains("form-control")){
				if(input.getAttribute("type") === "password"){
					input.setAttribute("type","text");
					btn.innerText = "Hide";
				}else{
					input.setAttribute("type","password");
					btn.innerText = "Show";
				}
			}
		},false);
	}


}());