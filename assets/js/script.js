const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".input-box");

/**
 * This function will display the note stored in the local storage.
 */
const showNotes = () => {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes()

/** 
* This is the function to update the data in our browser,
* when call this function,
* The notebox will store in our bowser
*/
const updateStorage = () => {
    localStorage.setItem("notes", notesContainer.innerHTML)
}

/** 
* This is the function to create a notebox,
* When the user click the createBtn,
* a notebox will added to the page
*/
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "assets/images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

/** 
* This is the function to delete a notebox,
* When the user click the delete img,
* a notebox will be remove from the page
*/
notesContainer.addEventListener("click", (e)=> {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    } else if(e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", e =>{
    if(e.key === "Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault()
    }
})
