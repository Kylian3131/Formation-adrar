let raquette = document.querySelector("#raquette");

document.addEventListener("mousemove",(event)=>{
    console.log(event);
    raquette.style.top = (event.pageY-25)+"px";
    raquette.style.left = (event.pageX-50)+"px";
})
