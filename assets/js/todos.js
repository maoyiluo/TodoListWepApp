$("#newTaskInput").keypress(function(event){
	if(event.which === 13){
		var input = $(this).val();
		$("#taskHolder").append("<p><span class=\"deleteBtn\"><i class=\"fas fa-trash-alt\"></i></span><span class=\"task\">" + input + "</span></p>");
		$(this).val(""); //remove the text in the block
	}
}) 

$('#taskHolder').on("click",".task",function(){ 
	$(this).toggleClass("done");
})


$('#taskHolder').on("click",".deleteBtn",function(){
	$(this).parent().fadeOut(500,function() {
		$(this).remove();
	});
})

$("#plusBtn").on("click",function(){
	$("#inputContainer").slideToggle();
})