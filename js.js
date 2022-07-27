let images = document.querySelectorAll("#circle img");

let btn1 = document.getElementById("img1")
let btn2 = document.getElementById("img2")
let btn3 = document.getElementById("img3")

btn1.addEventListener("click", () =>{
    setTimeout(function(){
        images[0].style.opacity = "0"
        images[1].style.opacity = "0"
        images[2].style.opacity = "0"
    },300) 
    setTimeout(function(){
        images[0].style.transform = "translateX(650px)"
        images[1].style.transform = "translateX(650px)"
        images[2].style.transform = "translateX(650px)"

    },600)
    setTimeout(()=>{
        images[0].style.opacity = "1"
    },900)
})

btn2.addEventListener("click", () =>{
    setTimeout(function(){
        images[0].style.opacity = "0"
        images[1].style.opacity = "0"
        images[2].style.opacity = "0"
    },300) 
    setTimeout(function(){
        images[0].style.transform = "translateX(0px)"
        images[1].style.transform = "translateX(0px)"
        images[2].style.transform = "translateX(0px)"

    },600)
    setTimeout(()=>{
        images[1].style.opacity = "1"
    },900)
})
btn3.addEventListener("click", () =>{
    setTimeout(function(){
        images[0].style.opacity = "0"
        images[1].style.opacity = "0"
        images[2].style.opacity = "0"
    },300) 
    setTimeout(function(){
        images[0].style.transform = "translateX(-650px)"
        images[1].style.transform = "translateX(-650px)"
        images[2].style.transform = "translateX(-650px)"


    },600)
    setTimeout(()=>{
        images[2].style.opacity = "1"
    },900)
})