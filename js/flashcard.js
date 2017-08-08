$('.glyphicon-plus').click(function(){
  $(this).addClass('hide')
  $(this.nextElementSibling).removeClass('hide')
  $(this.parentElement.nextElementSibling).removeClass('hide')
  //$('.glyphicon-minus').removeClass('hide')
  //$('.glyphicon-plus').addClass('hide')
});

$('.glyphicon-minus').click(function(){
  $(this).addClass('hide')
  $(this.parentElement.nextElementSibling).addClass('hide')
  $(this.previousElementSibling).removeClass('hide')
});
