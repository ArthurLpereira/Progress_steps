const steps = document.querySelectorAll('.steps')
const line = document.querySelector(".line")
const btnPrev = document.getElementById('Previous')
const btnNex = document.getElementById('next')

var step_current = 1

function att_progress (){
    steps.forEach((steps,current)=>{
        if(current < step_current){
            steps.classList.add('active')
        }else{
            steps.classList.remove('active')
        }
    });

    const progress = ((step_current - 1) / (steps.length - 1)) * 100;
    line.style.width = `${progress}%`;

    btnPrev.disabled = step_current === 1;
    btnNex.disabled = step_current === steps.length;
}

btnPrev.addEventListener('click',()=>{
    if(step_current > 1){
        step_current --
        att_progress();
    }
})

btnNex.addEventListener('click', ()=>{
    if(step_current < steps.length){
        step_current ++
        att_progress();
    }
})