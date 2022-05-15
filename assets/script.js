// ------- INICIAL DATA  ------ //
let areas = {
   a: null,
   b: null,
   c: null
}




// ------- EVENTS  ------ //

//----------- neutralArea ----------------//

document.querySelectorAll('.item').forEach(item => {
   item.addEventListener('dragstart', dragStart)
   item.addEventListener('dragend', dragEnd)
})
document.querySelector('.neutralArea').addEventListener('dragover', neutralDragOver);
document.querySelector('.neutralArea').addEventListener('dragleave', neutralLeave);
document.querySelector('.neutralArea').addEventListener('drop', neutralDrop);
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
      update();
   }
}
function neutralDragOver(e){
   e.currentTarget.classList.add('hover');
   e.preventDefault();

}

function neutralLeave(e){
   e.currentTarget.classList.remove('hover');

}

function neutralDrop(e){
   e.currentTarget.classList.remove('hover');
   let dragItem = document.querySelector('.item.dragging');
   e.currentTarget.appendChild(dragItem);
   update();
}

function update(){
   document.querySelectorAll('.area').forEach(area => {
      let name = area.getAttribute('data-name');
      if(area.querySelector('.item') !== null){
         areas[name] = area.querySelector('.item').innerHTML;
      }else{
         areas[name] = null;
      }

   });
   if(areas.a === '1' && areas.b === '2' && areas.c === '3'){
      document.querySelector('.areas').classList.add('correct');
   }else{
      document.querySelector('.areas').classList.remove('correct');
   }
}