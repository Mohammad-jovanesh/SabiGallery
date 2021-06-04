const Image=document.querySelectorAll(".image")
console.log(Image.children)

const option ={
    root:null,
    rootMargin:"-0px 0px 10px",
    threshold:0.5,
}
const observer=new IntersectionObserver((intries,observer)=>
{
    intries.forEach(elm=>{
        console.log(elm)
        if(!elm.isIntersecting){
           return;
        }else {
            elm.target.style.animation="AnimeImage 1s ease-in-out forwards"
            
          
        }
    })
    
},option)

Image.forEach(img=>{
    observer.observe(img)
})

window.addEventListener("load",()=>{
    document.querySelector(".Pre_Loader").classList.add("Pre_load_close");
    document.querySelector(".Container").style.display="block";

})