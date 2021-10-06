var sound = new Howl({
    src: ['sound.webm', 'sound.mp3']
  });
  
  // Play returns a unique Sound ID that can be passed
  // into any method on Howl to control that specific sound.
  var id1 = sound.play();
  var id2 = sound.play();
  
  // Fade out the first sound and speed up the second.
  sound.fade(1, 0, 1000, id1);
  sound.rate(1.5, id2);
  