$('.btn').click(function () {
  $(this).toggleClass('active');

  if ($('.sumir').css('display') == 'none') {
    $('.sumir').show();
  } else {
    $('.sumir').hide();
  }
});