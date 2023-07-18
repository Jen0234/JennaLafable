const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');

function PageTransitions(){
    //Button click active class 
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            sectBtn[i].className == ' active-btn';
        })
    }

    // Sections Active
    allSections.addEventListener('click',(e) =>{
        console.log(e.target)
    })

}


PageTransitions();