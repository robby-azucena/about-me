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

window.onload = function(){
    document.getElementById("loading").style.opacity='0';
    setTimeout(function(){ 
        document.getElementById("loading").style.zIndex='-10000';
    }, 500);
    
}