let img = document.querySelector('.img');
let container= document.querySelector('.container');
function phones(phone){
    img.src = phone;
}

function colors(color){
    container.style.background = color;
}

document.getElementById("button").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none";
})

confirm("are you ok?")
document.getElementById("demo").innerHTML = "Hello World!";