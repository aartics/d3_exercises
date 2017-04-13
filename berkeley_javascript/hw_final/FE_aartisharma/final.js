var divMain;
var divReg;
var validForm = false;

document.addEventListener("DOMContentLoaded", function(event) {
    var inputElements = document.querySelectorAll('input[type="text"], input[type="password"]')
    var spanElements = document.querySelectorAll('span')

    $('#spnLogin').text("** Enter atleast 6 to max. 15 characters")
    $('#txtLogin').keyup(validLogin)
    
    divReg = $('#divRegistered')[0]
    divMain = $('#divMain')[0]

    divMain.addEventListener("focus", fHandleEnter, true)
    divMain.addEventListener("blur", fHandleExit, true)

    inputElements[2].addEventListener('blur', function(){
        fCompareInput(inputElements[1].value, inputElements[2].value, spanElements[2])
    })

    inputElements[4].addEventListener('blur', function(){
        fCompareInput(inputElements[3].value, inputElements[4].value, spanElements[4])
    })

    inputElements[1].addEventListener('keyup', function(){
        passwordStrength(inputElements[1].value, spanElements[1])
    })

    validateForm()
    fProcessForm()

    function validateForm() {

        document.getElementById("frmRegister").onsubmit = function() {

            if (!validForm) {
                return false
            }

            //check login length

            var vlength = $('#txtLogin').val().length

            if ((vlength <= 5) || (vlength >= 15)) {
                return false
            } else {
                return true
            }

            //check email regex



            var email = document.getElementById('txtEmail')
            var emailRegEx = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/
            if (!emailRegEx.test(email.value)) {
                document.getElementById("spnEmail").innerHTML = "bad email"
                return false
            }

            //check password and email equality

            if ((!inputElements[1].value) || (!inputElements[3].value) || (inputElements[1].value != inputElements[2].value) || (inputElements[3].value != inputElements[4].value)) {
                return false
            } else {
                return true
            }

        }
    }

    function passwordStrength(password, strength) {

        var strongRegex = /[!@#$%^&*]/g
        var weakRegex = /^[a-zA-Z0-9]{6,}$/g

        if (password.match(strongRegex)) {
            strength.innerHTML = "strong"
            validForm = true
        } else if (password.match(weakRegex)) {
            strength.innerHTML = "acceptable"
            validForm = true
        } else {
            strength.innerHTML = "too weak"
            validForm = false
        }

    }

})



function fCompareInput(value1, value2, display) {

    if (value1 === value2) {
        display.innerHTML = "match!"
        validForm = true
    } 
    else {
        display.innerHTML = "no match"
    }
}


function fProcessForm() {
    var strQueryString = location.search
    var decodedStr = decodeURIComponent(strQueryString)
    var querystring = decodedStr.replace(/^.*?\=/, "")

    if (querystring.length > 0) {

        divReg.innerHTML = "Thank you, " + querystring + ", you are now registered"
        divMain.style.display = 'none'
        $('#divRegistered').fadeIn(800)

    } else {
        console.log('form loaded')
    }
}

function fHandleEnter(e) {
    e.target.setAttribute("style", "background-color: yellow;")
}

function fHandleExit(e) {
    e.target.removeAttribute("style")
}


function validLogin() {

    var verdict = ""

    if (($('#txtLogin').val().length <= 5) || ($('#txtLogin').val().length >= 15)) {
        $('#spnLogin').text(" ")
        $('#spnLogin').css('color', 'red')

        verdict = "Enter atleast 6 to max. 15 characters"
//         $('#spnLogin').append("length: " + $('#txtLogin').val().length + " ** " + verdict)
        $('#spnLogin').append(" ** " + verdict)

    } else {
        verdict = "welcome " + $('#txtLogin').val()
        $('#spnLogin').text(" ")
        $('#spnLogin').css('color', 'greenyellow')
        $('#spnLogin').append(verdict)
    }

}

