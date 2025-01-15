
/*--------Удаление----------------------------*/
function removeNote(){
    let point = document.getElementById('note')
    point.remove()
}
/*--------Добавить заметку----------------------------*/
const buttonAdd = document.getElementById('add')
const list = document.getElementById('list')
buttonAdd.addEventListener('click', () => {
  const newNote = document.createElement('div')
  newNote.classList.add('point')
  newNote.textContent ='Новая заметка'

  list.appendChild(newNote);
})