const empties = document.querySelectorAll('.empty');
const filled = document.querySelector('.filled');

filled.addEventListener('dragstart', dragStart);
filled.addEventListener('dragend', dragEnd);
empties.forEach(empty => {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', drapDrop);
})

function dragStart() {
    filled.classList.add('hold');
    setTimeout(() => filled.classList.add('invisible'), 0)
}

function dragEnd() {
    filled.classList.remove('invisible', 'hold');
}

function dragOver(e) {
    e.preventDefault();
    this.classList.add('hovred');
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {
    this.classList.remove('hovred');
}

function drapDrop(e) {
    e.preventDefault();
    this.className = 'empty';
    this.append(filled);
}