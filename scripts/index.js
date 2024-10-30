
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
    return document.getElementById('divTeste').innerHTML += '<p id="pHtml">'+ name.charAt(0).toUpperCase() + name.slice(1) +':</p><div id="divHtml">' + localStorage.getItem(name) + '</div><br>';
}

function get_value(){
    let list = ["firstName","lastName","email","message" ]
    list.forEach(el => {
        getLocal(el)
    })
    
    document.getElementById('divTeste').innerHTML += firstNameHtml;
    }

window.onload = function() {
    get_value()
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

function checkFormCompleted(){
    const checkFirsName = document.getElementById('first').value.trim()
    const checkLastName = document.getElementById('last').value.trim()
    const checkEmail = document.getElementById('email').value.trim()
    const checkMessage = document.getElementById('message').value.trim()
    const buttonCheck = document.getElementById('getRight')

    if(checkFirsName && checkLastName && checkEmail && checkMessage){
        buttonCheck.style.backgroundColor = '#E47500'
        buttonCheck.style.cursor = 'pointer'
        buttonCheck.removeAttribute('disabled')
    }else{
        buttonCheck.style.backgroundColor = 'gray'
        buttonCheck.setAttribute('disabled', '')
    }
    

}


function submitEmail(event){
    event.preventDefault()
    let emailValidate = document.getElementById('contactUs').value.trim()
    const emailRegex= /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+|\.([a-z]+)?$/i
    let validateEmailContact = validateRegex(emailValidate, emailRegex, 'emailContactUs')
    if(validateEmailContact){
        saveLocal("emailValidate",emailValidate)
        document.getElementById('emailContactUsValid').style.display = 'inline'
        document.getElementById('contactUs').value = ''
    }
}

function submitEmaill(event){
    event.preventDefault()
    let emailValidate = document.getElementById('contactEmailPlus').value.trim()
    const emailRegex= /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+|\.([a-z]+)?$/i
    let validateEmailContact = validateRegex(emailValidate, emailRegex, 'emailFirst')
    if(validateEmailContact){
        saveLocal("emailValidate02",emailValidate)
        document.getElementById('emailContactUsValid').style.display = 'inline'
        document.getElementById('contactUs').value = ''
    }
}
