$('.lazy').each(function() {
  $(this).attr('src', $(this).data('src'));
});

var $slideContainer = $('#slideContainer');

function moveSlide($nav, direction) {
  var $slide = $nav.parents('.slide');
  var currentSlideNumber = $slide.data('slide-number');
  //console.log('currentSlideNumber', currentSlideNumber);
  var transform = -(currentSlideNumber) * 100;
  if('previous' === direction) {
    transform = -(currentSlideNumber-2) * 100;
    //console.log('transform', transform);
  }
  $slideContainer.css('-webkit-transform', 'translateY(' + transform + '%)');
  $slide.scrollTop(0);
}


$('.nextSlide').on('click', function(e) {
  e.preventDefault();
  moveSlide($(this), 'next');
});
$('.previousSlide').on('click', function(e) {
  e.preventDefault();
  moveSlide($(this), 'previous');
});