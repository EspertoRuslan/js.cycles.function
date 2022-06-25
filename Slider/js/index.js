const sliders=document.querySelectorAll('.slider')

sliders.forEach(slider=>{
    slider.addEventListener('click',()=>{
        removeActionClasses()
        slider.classList.add('active')
    })
})
 
function removeActionClasses(){
    sliders.forEach(slider=>{
        slider.classList.remove('active')
    })
}
 