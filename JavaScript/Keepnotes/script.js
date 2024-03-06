// select popup box,poup overlay,   click button

var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var popupbutton=document.getElementById("add-popup-button")

popupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

// select cancel button

var cancelbutton=document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(){
    event.preventDefault() 
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

// select container,"Book-title-input","book-author-input","book-description-input"

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("Book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdecriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(){
    event.preventDefault()
    var div=document.createElement ("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdecriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}