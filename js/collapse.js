$( document ).ready(function() {

    $("#onep").hide();
    $("#twop").hide();
    $("#threep").hide();

    
  
	$("#pone").click(function(){
        $("#onep").toggle(100);
    });
    
    $("#ptwo").click(function(){
        $("#twop").toggle(100);
    });

    $("#pthree").click(function(){
        $("#threep").toggle(100);
    });

});
