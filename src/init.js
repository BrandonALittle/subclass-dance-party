$(document).ready(function() {

  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('blinky-dancer');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addFrogButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('frog');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * .5 * Math.random() + 300,
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addEagleButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('eagle');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * .5 * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addChimpButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('chimp');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(".lineUpButton").on("click", function() {
    window.dancers.forEach(function(dancer) {
      dancer.lineUp();
    });
  });

  // $('.togetherButton').on('click', function(event) {
  //   if (window.dancers.length > 1) {
  //     var $first = $(window.dancers[0].$node);
  //     var $second = $(window.dancers[1].$node);
  //     //$first.css(position: );
  //     //$second.css();
  //     var $together = $('<div class="together"></div>');

  //     $together.append($first);
  //     $together.append($second);
  //     $('body').append($together);
  //   }
  // });
});





