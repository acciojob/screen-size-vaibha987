//your JS code here. If required.
window.onload = function() {
const heading=document.getElementById("sizeInfo").querySelector("h1")
function updateSize(){
heading.innerText=`Width:${window.innerWidth} and Height: ${window.innerHeight}`
}
updateSize()
// Update the size whenever the window is resized
window.addEventListener('resize', updateSize);
}