$(document).ready(function(){
  var socket;

  $('button.login').on('click', function() {
    socket = io.connect('http://localhost:1337', {
      query: $.param({ username: $('#username').val() })
    });

    socket.on('images created', function(image) {
      // '<div class="col-3 left"><img src="" alt=""><h3 class="center-text">Eric</h3></div>'
    });

    $('.user-modal').addClass('hidden');
  });


  $('a.close').click(function(ev){
    ev.preventDefault();

    $('.camera-modal').addClass('hidden');
  });

  $('a.btn.camera').click(function(ev){
    ev.preventDefault();

    $('.camera-modal').removeClass('hidden');
  });

});