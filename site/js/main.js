function bold(){
    var textArea = document.getElementById('textArea');
    if (textArea.style.fontWeight=="bold")
        textArea.style.fontWeight="normal"
    else textArea.style.fontWeight="bold";
}
function italic(){
    var textArea = document.getElementById('textArea');
    if (textArea.style.fontStyle=="italic")
        textArea.style.fontStyle="normal"
    else textArea.style.fontStyle="italic"; 

}
function souligne(){
    var textArea = document.getElementById('textArea');
    if (textArea.style.textDecoration== "underline")
        textArea.style.textDecoration="initial"
    else textArea.style.textDecoration="underline"; 

}


function taille() {
    var selectTag=document.getElementById('taille1');
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    console.log(listValue);
    document.getElementById('textArea').style.fontSize = listValue;
  }
  function poli() {
    var polices=document.getElementById('police');
    var listValue = polices.options[polices.selectedIndex].text;
    console.log (listValue)
    document.getElementById('textArea').style.fontFamily = listValue;


}
var keys = {37: 1, 38: 1, 39: 1, 40: 1};
function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;  
  }
  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}
function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    document.onkeydown  = preventDefaultForScrollKeys;
  }
  function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    document.removeEventListener('wheel', preventDefault, {passive: false}); // Enable scrolling in Chrome
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}
$(document).ready(function(){
    $("#cour1").mouseover(function(){
        $("#btn1").css("visibility", "visible");
        $("#cour1").css("opacity", "0.5");
    });
    $("#cour1").mouseout(function(){
        $("#btn1").css("visibility", "hidden");
        $("#cour1").css("opacity", "1");
    });
  });
  $(document).ready(function(){
    $("#cour2").mouseover(function(){
        $("#btn2").css("visibility", "visible");
        $("#cour2").css("opacity", "0.5");
    });
    $("#cour2").mouseout(function(){
        $("#btn2").css("visibility", "hidden");
        $("#cour2").css("opacity", "1");
    });
  });
  $(document).ready(function(){
    $("#cour3").mouseover(function(){
        $("#btn3").css("visibility", "visible");
        $("#cour3").css("opacity", "0.5");
    });
    $("#cour3").mouseout(function(){
        $("#btn3").css("visibility", "hidden");
        $("#cour3").css("opacity", "1");
    });
  });

  