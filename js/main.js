function artstationIMG(){
    var element = document.getElementById("banner-artstation");
    element.classList.add("active");
}

function defaultIMG_artstation(){
    var element = document.getElementById("banner-artstation");
    element.classList.remove("active");
}

function behanceIMG(){
    var element = document.getElementById("banner-behance");
    element.classList.add("active");
}

function defaultIMG_behance(){
    var element = document.getElementById("banner-behance");
    element.classList.remove("active");
}





var elem = document.getElementById("myBar");
var percent = document.getElementById("percent");
var width = 10;
var id = setInterval(frame, Math.random() * (500 - 100) + 100);
function frame() {
    if (width >= 100) {
      clearInterval(id);
      i = 0;
    } else {
      width++;
      elem.style.width = width + "%";
      percent.innerHTML = width + "%";
    }
}

window.onload = function(){
    id = setInterval(frame, 10)
    setTimeout(function(){ 
        document.getElementById("loading").style.opacity='0';
    }, 1000);
    
    
    setTimeout(function(){ 
        console.log('Loading screen gone!')
        document.getElementById("loading").style.zIndex='-10000';
    }, 1300);
    
}