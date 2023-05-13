/*document.getElementsByClassName("main-title")[0].style.color = "red";
document.getElementsByClassName("main-title")[0].style.font-size = 56px;*/
document.getElementById("main-action-button").onclick = function(){
    document.getElementById("products").scrollIntoView({behavior:"smooth"});
}
let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++){
    links[i].onclick = function () {
      document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior:"smooth"});  
    }
}