//// Video controls script

window.onload = function() {

  // Video
  var video = document.getElementById("video");

  // Buttons
  var playButton = document.getElementById("playPause");
  // var muteButton = document.getElementById("mute");
  // var fullScreenButton = document.getElementById("fullScreen");
  // Sliders
  //var seekBar = document.getElementById("seekBar");
  //var volumeBar = document.getElementById("volumeBar");
    
    console.log("onload complete");


    playButton.addEventListener("click", function() {
  if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playButton.innerHTML = "Pause";
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.innerHTML = "Play";
        } 
    });
    }
 
    console.log("Video Toggle complete");

  