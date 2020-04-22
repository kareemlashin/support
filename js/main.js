$('input[name="App"]').on('change', function() {
    var radioValue = $('input[name="App"]:checked').val();        
    $(".desc").hide();
    $("#"+radioValue+"-desc").show();
  });


$("#myfile").on('change',function(){
        $("#img").css({display:"inline-block"})
    $("#img-trash").css({display:"inline-block"})

});
$("#myfile2").on('change',function(){
    $("#video").css({display:"inline-block"})
    $("#video-trash").css({display:"inline-block"})
});
$("#video-trash").on('click',function(){
$("#myfile2").val('');
$("#video").css({display:"none"})
$("#video-trash").css({display:"none"})
});
$("#img-trash").on('click',function(){
    $("#myfile").val('');
    $("#img").css({display:"none"})
    $("#img-trash").css({display:"none"})
});