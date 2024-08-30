//your JS code here. If required.
const heading=document.getElementsById("sizeInfo").querySelector("h1")
function updateSize(){
heading.innexrText=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`
}
updateSize()
// Update the size whenever the window is resized
window.addEventListener('resize', updateSize);