// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let errormessage = document.getElementById("error")

function dperror() {
    let message = 'Something went wrong, please try again'
    errormessage.textContent = message 
    console.log(errormessage.innertext)
}

