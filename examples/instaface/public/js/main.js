$(document).ready(function(){

  $('a.close').click(function(ev){
    ev.preventDefault();

    $('.camera-modal').addClass('hidden');
  });

  $('a.btn.camera').click(function(ev){
    ev.preventDefault();

    $('.camera-modal').removeClass('hidden');
  });

});