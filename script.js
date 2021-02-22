let old_size = 16
let grid = document.querySelector(".container")
let div = document.createElement("div")
div.classList.toggle('cell')
grid.style.gridTemplate = `repeat(${old_size}, 1fr)/repeat(${old_size}, 1fr)`
for (let _ = old_size * old_size; _ > 0; _--) {
    grid.appendChild(div.cloneNode())
}
function changegrid(event) {
    let new_size = parseInt(event.target.value)
    let diff = new_size - old_size
    //cleargrid()
    grid.style.gridTemplate = `repeat(${new_size}, 1fr)/repeat(${new_size}, 1fr)`
    if (diff > 0) {
        for (let _ = diff * (old_size + new_size); _ > 0; _--) {
            grid.appendChild(div.cloneNode())
        }
        old_size = new_size
    }
    else {
        for (let _ = -diff * (old_size + new_size); _ > 0; _--) {
            grid.removeChild(grid.lastChild)
        }
        old_size = new_size
    }
}
function handleMovement(event) {
    event.target.classList.add('visted')
}
function cleargrid(event) {
    let to_Clear = document.querySelectorAll('.visted').forEach((e) => e.classList.remove('visted'))
}
grid.addEventListener('mousemove', handleMovement)
document.querySelector('.clear').addEventListener('click', cleargrid)
document.querySelector('.grid_size').addEventListener('input', changegrid)