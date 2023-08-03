let someButton = document.getElementById("my-button")

someButton.addEventListener("click", (event) =>{
    console.log(event)
    console.log(event.target)
    event.target.classList.toggle("active")
    event.target.innerText = "deactivate"
    event.target.classList.contains("active") 
        ? event.target.innerText = "deactivate" 
        : event.target.innerText = "activate"
/* takes the button which i'm clicking on and adds the ".active" class.*/
})


