var beep = new Howl({
  urls: ['audio/beep.wav']
});

$(".clickable-button").bind('touchstart', function() {
  beep.play();
});