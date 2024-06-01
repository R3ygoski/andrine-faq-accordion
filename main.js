const buttons = document.querySelectorAll("[data-btn]")
const paragraphs = document.querySelectorAll("[data-paragraph]")
const images = document.querySelectorAll("[data-img]")

buttons.forEach((btn)=>{

    const dataAttValue = btn.attributes['data-btn'].value - 1
    
    btn.addEventListener('click', ()=>{
        toggleVisibility(paragraphs[dataAttValue], images[dataAttValue])
    })
})

function toggleVisibility(paragraph, image){
    paragraph.classList.toggle('hidden')
    if (paragraph.classList.contains('hidden')){
        image.src = 'assets/images/icon-plus.svg'
    } else {
        image.src = 'assets/images/icon-minus.svg'
    }
}