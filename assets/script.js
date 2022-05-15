// ------- INICIAL DATA  ------ //





// ------- EVENTS  ------ //

//----------- neutralArea ----------------//

document.querySelectorAll('.item').forEach(item => {
   item.addEventListener('dragstart', dragStart)
   item.addEventListener('dragend', dragEnd)
})
//------------ areas -----------------//

document.querySelectorAll('.area').forEach(area => {
   area.addEventListener('dragover', dragOver);
   area.addEventListener('dragleave', dragLeave);
   area.addEventListener('drop', drop);
})

// ------- FUNCTIONS  ------ //

function dragStart(e){
   e.currentTarget.classList.add('dragging');
}
function dragEnd(e){
   e.currentTarget.classList.remove('dragging');
}
function dragOver(e){
   if(e.currentTarget.querySelector('.item') === null){
      e.preventDefault();
      e.currentTarget.classList.add('hover');
   }
}
function dragLeave(e){
   e.currentTarget.classList.remove('hover');
}
function drop(e){
   e.currentTarget.classList.remove('hover');

// Pegando item que está sendo arrastado //
   
   if(e.currentTarget.querySelector('.item') === null){
      let dragItem = document.querySelector('.item.dragging');
      e.currentTarget.appendChild(dragItem);
   }
}