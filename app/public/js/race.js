$(function() {
  $('.review-race').on('click', function() {
    $('.modal').fadeIn(500);
  });

  $('.cancel').on('click', function() {
    $('.modal').fadeOut(500);
  });

  // $('.btn-warning').on('click', function() {
  // 	$('.btn-secondary').append($("<div class='w3-container w3-center w3-animate-bottom review-confirmation'>\
  //         <h1>Review submitted!</h1>\
  //       </div>"));
  // });

});
