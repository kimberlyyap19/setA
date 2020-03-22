var color= ["red","green","yellow","pink","blue","marron","grey","#DC8665","#138086","#534666","#EEB462"
,"#F04393","#78D5F5","#787FF6","#4ADEDE","#1CA7EC","#1F2F98","#0B0742","#205072","#329D9C","#7BE495"
,"#FAA7B8","#D3DD18","#FE7A15","white"];
var i=0;
document.querySelector("#generate").addEventListener("click", function(){
    i=1<color.length ? ++i:0;
    document.querySelector("#bg").style.background =color[i]
  
    
})
function changeColor(){
    var setColor=Math.floor(Math.random()* 16777215).toString(16);
    document.getElementById("bg").style.backgroundColor="#"+setColor;
}
function showColor(){
    var select = document.getElementById("color").value;
    if ( select=="color1"){
        document.getElementById("bg").style.background="blue";
    }

    if ( select=="color2"){
        document.getElementById("bg").style.background="yellow";
    }
    if ( select=="color3"){
        document.getElementById("bg").style.background="pink";
    }
    if ( select=="color4"){
        document.getElementById("bg").style.background="green";
    }
    if ( select=="color5"){
        document.getElementById("bg").style.background="black";
    }
    if ( select=="color6"){
        document.getElementById("bg").style.background="white";
    }

}
function clearColor(){
    var reset = document.querySelector("#bg").style.backgroundColor ="white";
}

