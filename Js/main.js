

const Image=document.querySelectorAll(".image")
const Modal=document.querySelector(".Modal")
const ModalClose=document.querySelector(".Modal_Close")
//---------------------------------------------------------
//for Pre Loader of the Website
window.addEventListener("load",()=>{
    document.querySelector(".Pre_Loader").classList.add("Pre_load_close");
    document.querySelector(".Container").style.display="block";
})
// -------------------------------------------------------------
//
// define Option for Observer 
const option ={
    root:null,
    rootMargin:"-0px 0px -300px",
    threshold:0,
}
//creat a object from Observer class
const observer=new IntersectionObserver((intries,observer)=>
{
    intries.forEach(elm=>{
        if(elm.isIntersecting){
            elm.target.style.animation="AnimeImage 0.5s linear forwards"
            console.log(elm.target)
        }else {
            return;
        }
    })
},option)
//Observe All Image that i have in Html file so it will detect them all cool!!
Image.forEach(img=>{
    observer.observe(img)
})
//------------------------------------------------------
// Modal Image take the src of image and show the Modal
Image.forEach(img=>{
img.addEventListener("click",(e)=>{
    console.log(e.target.src)
    Modal.style.display="flex";
    Modal.querySelector(".Modal_image").style.backgroundImage=`url(${e.target.src})`;
})
})
// This is one for closing Button that i used icon for that and if you click on that 
// it will close the Modal (Modal Display is none) !!
ModalClose.addEventListener("click",()=>{
    Modal.style.display="none";
})