var overlay = document.getElementById("overlay");

var startTime = new Date().getTime();

var interval = setInterval(function(){
    if(new Date().getTime() - startTime > 60000){
        clearInterval(interval);
        return;
    }
    window.addEventListener('load', function(){
  overlay.style.display = 'none';
  
  
})
}, 2000);     

