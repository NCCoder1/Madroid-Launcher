window.onload=function()
{
var el=document.getElementById('button');
    el.onclick=function(){
        var my_text = document.getElementById("pass");
        if(my_text.value == "idontdomyhomework") { // Replace "" with password inside of it
          var iframe = document.getElementById("iframe-elm");
          iframe.src = "https://ultramath2.callixo.xyz/uv/service/hvtrs8%2F-nmweg%2Cmg%2F"; // Replace "" with the place you'd like iframe to go to inside
        } else {
          alert("Wrong Password");
          }
    }

}