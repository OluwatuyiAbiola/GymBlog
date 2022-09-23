let addRoutinesBtn = document.getElementById('addRoutinesBtn');
let routineList = document.querySelector('.routineList');
let routineDiv = document.querySelectorAll('.routineDiv')[0];

//to add routines to our like jump the cow  
addRoutinesBtn.addEventListener('click', ()=>{
    let newRoutine = routineDiv.cloneNode(true);
    //add values to the input and not copy d giving values
    let input = newRoutine.getElementsByTagName('input')[0];
    input.value = '';
    routineList.appendChild(newRoutine);
});