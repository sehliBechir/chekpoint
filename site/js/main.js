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
function souligné(){
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