// http://coderthoughts.blogspot.co.uk/2013/03/html5-video-fun.html - thanks :)
// view-source:http://demo.creative-jar.com/html5-camera/
$(document).ready(function(){
  var socket;
  var video;
  var username;

  $('button.login').on('click', function() {
    username = $('#username').val();

    socket = io.connect('http://localhost:1337', {
      query: $.param({ username: username })
    });

    socket.on('images created', function(image) {
      var alt = image.user + ' ' + new Date(image.time).toLocaleDateString();
      $('.photos .row').append('<div class="col-3 left"><img src="' + image.data + '" alt="' + alt + '">' +
        '<h3 class="center-text">' + image.user + '</h3>' +
        '<h5 class="center-text">' + image.time + '</h5>' +
      '</div>');
    });

    $('.user-modal').addClass('hidden');
  });


  $('a.close').click(function(ev){
    ev.preventDefault();

    $('.camera-modal').addClass('hidden');
  });

  $('a.btn.camera').click(function(ev){
    var connect = function (stream) {
      video = document.getElementById("video");
      video.src = window.URL ? window.URL.createObjectURL(stream) : stream;
      video.play();
    };

    var error = function (e) {
      alert(e.message);
    };

    navigator.myGetMedia = (navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia);
    navigator.myGetMedia({ video: true }, connect, error);

    $('.camera-modal').removeClass('hidden');
    ev.preventDefault();
  });

  $('.take-photo').on('click', function() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    //save canvas image as data url
    var imgData = canvas.toDataURL();

    socket.emit('images::create', {
      user: username,
      data: imgData,
      time: new Date()
    }, {}, function() {

    });
  });
});
