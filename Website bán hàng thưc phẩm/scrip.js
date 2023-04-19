
// ................................slider
let index =0 ;
const imgnumber = document.querySelectorAll(".slider-content-left-top img");
console.log(imgnumber)
const rightbtl= document.querySelector('.fa-chevron-right')
const lefttbtl= document.querySelector('.fa-chevron-left')
rightbtl.addEventListener("click",function(){
    index=index+1
    if(index>imgnumber.length-1){
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
lefttbtl.addEventListener("click",function(){
    index=index-1
    if(index<=0){
        index = imgnumber.length-1;
    }
    document.querySelector(".slider-content-left-top").style.right = index*100+"%"
})

const imgnumberli = document.querySelectorAll(".slider-content-lef-bottom li");
imgnumberli.forEach(function(image,index){
   
    image.addEventListener("click",function(){
         removeactive()
        document.querySelector(".slider-content-left-top").style.right = index*100+"%"
        image.classList.add("active")
    })
    function removeactive(){
      let imgactive= document.querySelector(".active")  
       imgactive.classList.remove("active")
    }
    

})

// ........................slider2
function imgAuto(){
    index = index +1
    if(index>imgnumber.length-1){
        index = 0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index*100+"%"
    imgnumberli(index).classList.add("active")
    // console.log(index)
}
setInterval(imgAuto,5000)
