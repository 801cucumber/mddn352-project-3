$(function() {
  var $section = $('#l1-m');
  $section.find('.panzoom').panzoom({
    $zoomIn: $section.find(".zoom-in"),
    $zoomOut: $section.find(".zoom-out"),
    $zoomRange: $section.find(".zoom-range"),
    $reset: $section.find(".reset")
  });
  $section = $('#l2-m');
  $section.find('.panzoom').panzoom({
    $zoomIn: $section.find(".zoom-in"),
    $zoomOut: $section.find(".zoom-out"),
    $zoomRange: $section.find(".zoom-range"),
    $reset: $section.find(".reset")
  });
  $section = $('#l3-m');
  $section.find('.panzoom').panzoom({
    $zoomIn: $section.find(".zoom-in"),
    $zoomOut: $section.find(".zoom-out"),
    $zoomRange: $section.find(".zoom-range"),
    $reset: $section.find(".reset")
  });
  $section = $('#l4-m');
  $section.find('.panzoom').panzoom({
    $zoomIn: $section.find(".zoom-in"),
    $zoomOut: $section.find(".zoom-out"),
    $zoomRange: $section.find(".zoom-range"),
    $reset: $section.find(".reset")
  });
  $section = $('#l5-m');
  $section.find('.panzoom').panzoom({
    $zoomIn: $section.find(".zoom-in"),
    $zoomOut: $section.find(".zoom-out"),
    $zoomRange: $section.find(".zoom-range"),
    $reset: $section.find(".reset")
  });
  $section = $('#l6-m');
  $section.find('.panzoom').panzoom({
    $zoomIn: $section.find(".zoom-in"),
    $zoomOut: $section.find(".zoom-out"),
    $zoomRange: $section.find(".zoom-range"),
    $reset: $section.find(".reset")
  });

  $('area').on('click touchstart', function() {
    var name = $(this).attr('name');

    $('#overlay').fadeIn(300);
    if (name === "level1-store") {
      $('#level1-popup-store').fadeIn(300);
    } else if (name === "level1-cafe") {
      $('#level1-popup-cafe').fadeIn(300);
      $(window).trigger('resize');
    }  else if (name === "level4-espresso") {
      $('#level4-popup-espresso').fadeIn(300);
      $(window).trigger('resize');
    } else if (name === "passports") {
      $('#level4-popup-passports').fadeIn(300);
      $(window).trigger('resize');
    }
  });

  $('#overlay').click(function() {
    $('.popup').fadeOut(300);
    $('#overlay').fadeOut(300);
  });

  $('.fa-close').click(function() {
    $('.popup').fadeOut(300);
    $('#overlay').fadeOut(300);
  });

  $('.page-overlay').click(function() {
    $('.page-overlay').fadeOut(200);
    $('.actionBar').animate({height: '50px'}, 200);
    animatingActionBar = false;
  });

  // Action Bar
  var animatingActionBar = false;
  $('.actionBar').click(function() {
    if (!animatingActionBar) {
      $('.page-overlay').fadeIn(200);
      $('.actionBar').animate({height: '300px'}, 200);
      animatingActionBar = true;
    } else {
      $('.page-overlay').fadeOut(200);
      $('.actionBar').animate({height: '50px'}, 200);
      animatingActionBar = false;
    }

  });
});
