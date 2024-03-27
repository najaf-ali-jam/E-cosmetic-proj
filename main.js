const burgur = document.getElementById("hamburgur");
const list = document.getElementById("nav-list");

burgur.addEventListener("click", ()=>{
    list.classList.toggle("nav-list-active")
})