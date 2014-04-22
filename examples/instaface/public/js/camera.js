(function($) {
  $(function() {

    var video;
    var dataURL;

    // http://coderthoughts.blogspot.co.uk/2013/03/html5-video-fun.html - thanks :)
    // view-source:http://demo.creative-jar.com/html5-camera/
    function setup() {
      navigator.myGetMedia = (navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);
      navigator.myGetMedia({ video: true }, connect, error);
    }

    function connect(stream) {
      video = document.getElementById("video");
      video.src = window.URL ? window.URL.createObjectURL(stream) : stream;
      video.play();
    }

    function error(e) { console.log(e); }

    addEventListener("load", setup);

    function captureImage() {
      var canvas = document.createElement('canvas');
      canvas.id = 'hiddenCanvas';
      //add canvas to the body element
      document.body.appendChild(canvas);
      //add canvas to #canvasHolder
      document.getElementById('canvasHolder').appendChild(canvas);
      var ctx = canvas.getContext('2d');
      canvas.width = video.videoWidth / 4;
      canvas.height = video.videoHeight / 4;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      //save canvas image as data url
      dataURL = canvas.toDataURL();
      //set preview image src to dataURL
      document.getElementById('preview').src = dataURL;
      // place the image value in the text box
      document.getElementById('imageToForm').value = dataURL;
    }

    //Bind a click to a button to capture an image from the video stream
    var el = document.getElementById("button");
    el.addEventListener("click", captureImage, false);
  });
})(jQuery);
