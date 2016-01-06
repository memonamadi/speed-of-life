(function() {
  // Soundcloud variables
  var userId = 13512549,
      $playBtn = $('.play-btn');

  // Menu toggle variables
  var $menuIcon = $('.menu-icon a'),
      $menuContainer = $('.menu-container');

  // Toggle navigation
  $menuIcon.on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $menuContainer.slideToggle('slow').toggleClass('visible');
  });

  // Initialize Soundcloud API request
  SC.initialize({
    client_id: 'c3118413dbb9f95c0b3647d1ab61bd8e'
  });

  // Sends request to Soundcloud API
  SC.get("/tracks", {
    user_id: userId,
    limit: 20
  }, function(tracks) {
    for (var i = 0; i < tracks.length; i++) {
      $('#tracks').append("<div class='track'><h2>" +
                          tracks[i].title + "</h2><audio id=" + tracks[i].permalink.toLowerCase() +
                          " src=" + tracks[i].stream_url + "?client_id=c3118413dbb9f95c0b3647d1ab61bd8e></audio><img src=" +
                          tracks[i].artwork_url.replace('large', 'crop') +
                          "><a class='play-btn' href='#'><div class='left'></div><div class='right'></div><div class='triangle-1'></div><div class='triangle-2'></div></a><div class='overlay'></div></div>");
    }
  });

  // On play button click
  $(document).on('click', '.play-btn', function(e) {
    var audio = $(this).siblings('audio');
    e.preventDefault();
    $(this).toggleClass("pause");
    if($(this).hasClass('pause')) {
      audio.trigger('play');
    } else {
      audio.trigger('pause');
    }
  });

})();
