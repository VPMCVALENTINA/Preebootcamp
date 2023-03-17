function myFunction () { 
    var x = document . getElementById ( "myVideo" ). duration ;   
    document . getElementById ( "demo" ). innerHTML = x ;  
  }

function pauseVideo(vid) {
    vid.pause();
    vid.currentTime = 0;
}