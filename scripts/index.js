
function validateRegex(value, regexType, spanId){
    if(!regexType.test(value)) {
        document.getElementById(spanId).style.display = 'inline'
        return false;
    }else {
        document.getElementById(spanId).style.display = 'none'
        return true;
    }
}

function saveLocal(name,dado){
    return localStorage.setItem(name,dado)
}

function getLocal(name){
    return localStorage.getItem(name)
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

    const firsName = document.getElementById('first').value.trim()
    const lastName = document.getElementById('last').value.trim()
    const email = document.getElementById('email').value.trim()
    const message = document.getElementById('message').value.trim()

    const nameRegex = /^[A-Za-z\s]{2,}$/
    const emailRegex= /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+|\.([a-z]+)?$/i
    const textAreaRegex = /.{10,}/

    let validFirstName = validateRegex(firsName, nameRegex, 'firstNameSpan')
    let validLastName = validateRegex(lastName, nameRegex,'lastNameSpan')
    let validEmail = validateRegex(email,emailRegex,'emailSpan')
    let validMessage = validateRegex(message, textAreaRegex, 'textAreaSpan')

    if (validFirstName && validLastName && validEmail && validMessage) {
        saveLocal("firstName",firsName)
        saveLocal("lastName",lastName)
        saveLocal("email",email)
        saveLocal("message",message)
        window.location.href = '/contactSucess.html'
    }
})

function submitEmail(event){
    event.preventDefault()
    let emailValidate = document.getElementById('contactUs').value.trim()
    const emailRegex= /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+|\.([a-z]+)?$/i
    let validateEmailContact = validateRegex(emailValidate, emailRegex, 'emailContactUs')
    if(validateEmailContact){
        alert("Email successfully submitted!");
    }
}

function submitEmaill(event){
    event.preventDefault()
    let emailValidate = document.getElementById('contactEmailPlus').value.trim()
    const emailRegex= /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+|\.([a-z]+)?$/i
    let validateEmailContact = validateRegex(emailValidate, emailRegex, 'emailFirst')
    if(validateEmailContact){
        alert("Email successfully submitted!");
    }
}