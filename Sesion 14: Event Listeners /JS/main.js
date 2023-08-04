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

document.getElementById("activate-all-buttons")
addEventListener("click", (event)=>{
    let checkbox = event.target
    console.log(checkbox.checked)
    let buttons = document.querySelectorAll("button")
    if (!checkbox.checked){
        buttons.forEach(button => {button.classList.remove("active")})
    } else {
        buttons.forEach(button => {button.classList.add("active")})
    }
})

document.getElementById("navigate-button").addEventListener("click", ()=> {
    window.open("https://google.com", "_blank")
})


//"_blank" opens link in new tab.
//


let comments = [
    {
        author: "Raziel Iqui Balam",
        comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur illum natus porro explicabo mollitia voluptates voluptate consequuntur architecto placeat."
    }
]



const createCommentBox = (commentData) => {
    let {author, comment} = commentData
    let card = document.createElement("div")
    card.classList.add("card")


    let cardBody = documentCreateElement("div")
    cardBody.classList.add("card-body")


    let cardText = document.createTextNode(`${author} : ${comment}`)


    cardBody.append(cardText)
    card.append(cardBody)

    return card 
}

const printAllComments = (commentsArray) => {
    let wrapper = document.getElementById("comment-wrapper")
    wrapper.innerHTML = ""

    commentsArray.forEach (comment => {
        let commentBox = createCommentBox(comment)
        wrapper.append(commentBox)
    })
}

const test1 = printAllComments(comments)


