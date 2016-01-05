(function() {
  var userId = 13512549,
      $playBtn = $('.play-btn'),
      $pauseBtn = $('.pause-btn');

  SC.initialize({
    client_id: 'c3118413dbb9f95c0b3647d1ab61bd8e'
  });

  SC.get("/tracks", {
    user_id: userId,
    limit: 20
  }, function(tracks) {
    for (var i = 0; i < tracks.length; i++) {
      $('#tracks').append("<div class='element'><h2>" + tracks[i].title + "</h2><audio id=" + tracks[i].permalink.toLowerCase() + " src=" + tracks[i].stream_url + "?client_id=c3118413dbb9f95c0b3647d1ab61bd8e></audio><img src=" + tracks[i].artwork_url.replace('large', 'crop') + "><div class='play-btn'></div><div class='pause-btn'></div><div class='overlay'></div></div>");
    }
  });

  $(document).on('click', '.play-btn', function() {
    $(this).siblings('audio').trigger('play');
    $(this).addClass('hidden');
    $(this).siblings($pauseBtn).addClass('visible');
  });

  $(document).on('click', '.pause-btn', function() {
    $(this).siblings('audio').trigger('pause');
    $(this).removeClass('visible');
    $(this).siblings($playBtn).removeClass('hidden');
  });
})();
