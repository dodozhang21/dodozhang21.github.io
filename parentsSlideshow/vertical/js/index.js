var $slideContainer = $('#slideContainer');

$('.lazy').each(function () {
  $(this).attr('src', $(this).data('src'));
});

var initialPage = $.url(window.location).param('page') || $.url(window.location).fparam('page');
console.log('initialPage', initialPage);
if (initialPage) {
  var prevPage = initialPage - 1;
  var $nav = $('[data-slide-number="' + prevPage + '"] .nextSlide');
  if ($nav.length) {
    console.log($nav);
    moveSlide($nav, 'next');
  }
}

function moveSlide($nav, direction) {
  var $slide = $nav.parents('.slide');
  var currentSlideNumber = $slide.data('slide-number');
  leaveSlide($slide);
  //console.log('currentSlideNumber', currentSlideNumber);
  var transform = -(currentSlideNumber) * 100;
  if('previous' === direction) {
    transform = -(currentSlideNumber-2) * 100;
    //console.log('transform', transform);
    var prevSlide = currentSlideNumber - 1;
    var $toSlide = $('[data-slide-number="' + prevSlide + '"]');
  }
  else {
    var nextSlide = currentSlideNumber + 1;
    var $toSlide = $('[data-slide-number="' + nextSlide + '"]');
  }
  preloadSlide($toSlide);
  $slideContainer.css('-webkit-transform', 'translateY(' + transform + '%)');
  $slide.scrollTop(0);
}

function leaveSlide($slide) {

}

function preloadSlide($slide) {
  if ($slide.length) {
    if ($slide.hasClass('slide--video')) {
      var $videoPlayer = $slide.find('.videoPlayer');
      if (!$videoPlayer.find('iframe').length) {
        embedVideo($videoPlayer);
      }
    }
  }

}

function embedVideo($videoPlayer) {
  var videoUrl = $videoPlayer.data('videoembedurl');
  var width = $videoPlayer.outerWidth();
  var height = $videoPlayer.outerHeight();
  videoUrl += '&enablem4=true';
  $videoPlayer.html('<iframe width="100%" height="100%" scrolling="no" seamless="seamless" src="' + videoUrl + '" frameborder="0"  allowfullscreen></iframe>');
  $videoPlayer.addClass('embeddedVideoAdded');
  $videoPlayer.parents('.slideImageInnerWrapper').addClass('embeddedVideoAdded');
}


$('.nextSlide').on('click', function(e) {
  e.preventDefault();
  moveSlide($(this), 'next');
});
$('.previousSlide').on('click', function(e) {
  e.preventDefault();
  moveSlide($(this), 'previous');
});