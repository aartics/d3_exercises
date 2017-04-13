//created second javascript file to process the window.onload function
//for the popup.
//unable to achieve multiple window onload functions in a single js file

window.onload = function() {
    fAddEmail()
    var btn = document.getElementById('btnAddEmail')
    btn.onclick = fAddEmail

}

function fAddEmail() {
    var eltInput = document.createElement("input")
    eltInput.setAttribute("type", "text")

    var eltP = document.createElement("p")
    var div = document.getElementById("divEmail")

    div.appendChild(eltP)
    eltP.appendChild(eltInput)
}