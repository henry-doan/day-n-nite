$(document).ready(function() {

  $('#orb').click(function() {

    // Changes the orb
    var orb = $(this);
    var orbCurClass = orb.attr('class');
    var orbNewClass = (orbCurClass == 'sun') ? 'moon' : 'sun';
    orb.removeClass().addClass(orbNewClass);

    // changes the sky
    var sky = $('#sky');
    var skyCurClass = sky.attr('class');
    var skyNewClass = (skyCurClass == 'day') ? 'night' : 'day';
    sky.removeClass().addClass(skyNewClass);

    // changes the craters 
    var crater1 = $('#crater1');
    var crat1CurClass = crater1.attr('class');
    var crat1NewClass = (crat1CurClass == 'visible') ? '' : 'visible';
    crater1.removeClass().addClass(crat1NewClass);

    var crater2 = $('#crater2');
    var crat2CurClass = crater2.attr('class');
    var crat2NewClass = (crat2CurClass == 'visible') ? '' : 'visible';
    crater2.removeClass().addClass(crat2NewClass);

    var crater3 = $('#crater3');
    var crat3CurClass = crater3.attr('class');
    var crat3NewClass = (crat3CurClass == 'visible') ? '' : 'visible';
    crater3.removeClass().addClass(crat3NewClass);
  })
})