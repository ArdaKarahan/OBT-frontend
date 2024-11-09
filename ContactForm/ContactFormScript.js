const nameInput = document.getElementById("inputForName")
const emailInput = document.getElementById("inputForEmail")
const roleInput = document.getElementById("selectRole")
const SubmitInput = document.getElementById("feedbackSubmit")
const submitButton = document.getElementById("buttonForSubmit")
const submitMessage = document.getElementById("submitMessage")

submitButton.addEventListener("click", () => {
    event.preventDefault()

    const userName = nameInput.value;
    const userEmail = emailInput.value;
    const userRole = roleInput.value;
    const feedback = SubmitInput.value;

    /*Every if-else flow is in order. If the first if-else statement has a problem, second one will not work
    and if the second one has a problem, third one will not work
    Finally, if any of them doesn't work, page will not display the success message. */
    //Check if all the fields are filled
    if(!(userName && userEmail && userRole && feedback)) {
        alert("Fill all the fields")
    } else {
        var check1 = true;
    }

    //Check if email contains @ character
    if(!check1) {
        
    }
    else if(!userEmail.includes("@")) {
        alert("Make sure your email includes @")
    } else {
        var check2 = true;
    }

    //Check if the feedback is more than 50 letters and less than 200 letters.
    if(!check2) {

    }
    else if(check2 && feedback.length > 200) {
        alert("Your feedback must be less than 200 letters")
    } else if(feedback.length < 50) {
        alert("Your feedback must be more than 50 letters")
    } else {
        var check3 = true;
    }

    if(check3) {
        submitButton.style.display = "none"
        const message = ("Congrats! You submitted your feedback, " + userName + ".");
        submitMessage.textContent += message;
    }

})