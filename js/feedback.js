var linkFeedback = $(".feedback_form"),
    dialog = $("#forms"),
    inputForm = $("form").find("input[type=text]");
    bgDark = $(".bg_fon"),
    body = $("body"),
    closeDialog = dialog.find(".close_btn"),
    widthScreenWithScroll = $(document).width();

linkFeedback.on('click', function(){
  dialog.fadeIn();
  bgDark.fadeIn();
  body.addClass("open-dialog");
  inputForm.on("blur",function(){
    $(this).each(function(){
      var valInp = $(this).val();
      if(valInp == ''){
        $(this).parent().removeClass("check");
        $(this).parent().addClass("error");
        $(this).attr('placeholder','Поле обязательно для заполнения');
      }
      else{
        $(this).parent().removeClass("error");
        $(this).parent().addClass("check");
      }
    });
  });
  var widthScreenWithOutScroll = $(document).outerWidth()
      widthScroll = widthScreenWithOutScroll-widthScreenWithScroll;
      body.css("padding-right", widthScroll + 'px');
});

closeDialog.on('click', function(){
  hideDialog();
});

bgDark.on('click', function(){
  hideDialog();
});

function hideDialog(){
  dialog.fadeOut();
  bgDark.fadeOut()
  body.removeClass("open-dialog");
  body.css("padding-right", 0);
}