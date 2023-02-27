const username = document.getElementById('userInput');
const password = document.getElementById('passInput');
const confirmPass = document.getElementById('confipassInput');
const addButton = document.getElementById('adduser');
const error = document.getElementById('username');
const passerror = document.getElementById('password');
const conerror = document.getElementById('confipass');


// username validation
function validUser() {
    error.style.display = 'block';
    // blank
    if (username.value === "") {
        error.innerHTML = "***please fill the username feild";
        return false;
    }

    // password length
    if ((username.value.length <= 2) || (username.value.length >= 10)) {
        error.innerHTML = "***user length must be between 2 and 10 ";
        return false;
    }

    // one uppercase character
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(username.value)) {
        error.innerHTML = "***Password must have at least one Uppercase Character.";
        return false;
    }

    // number not allowed
    if (!isNaN(username.value)) {
        error.innerHTML = "***only characters are allowed ! ";
        return false;
    }

    error.innerHTML = "";
    error.style.display = 'none';
    return true;
}


// password validation
function validpass() {  
    passerror.style.display = 'block';
    // blank
    if (password.value === "") {
        passerror.innerHTML = "***please fill the password feild";
        return false;
    }

    // whitespace
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(password.value)) {
        passerror.innerHTML = "***Password must not contain Whitespaces!";
        return false;
    }

    // one uppercase character
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(password.value)) {
        passerror.innerHTML = "***Password must have at least one Uppercase Character.";
        return false;
    }

    // one lowercase character
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(password.value)) {
        passerror.innerHTML = "***Password must have at least one Lowercase Character.";
        return false;
    }

    // one digit
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(password.value)) {
        passerror.innerHTML = "***Password must contain at least one Digit.";
        return false;
    }

    // one special symbol
    const isContainsSymbol =
        /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (!isContainsSymbol.test(password.value)) {
        passerror.innerHTML = "***Password must contain at least one Special Symbol ";
        return false;
    }


    // password length
    const isValidLength = /^.{8,20}$/;
    if (!isValidLength.test(password.value)) {
        passerror.innerHTML = "***Password must be 8-20 Characters Long. ";
        return false;
    }

    passerror.innerHTML = "";
    passerror.style.display = 'none';
    return true;
}


// confirm password password
function validconpass() {
    conerror.style.display = 'block';
    // blank
    console.log(password.value,confirmPass.value);
    if (confirmPass.value === "") {
        conerror.innerHTML = "***please fill the confirm password feild";
        return false;
    }


    // matching password 
    if (password.value != confirmPass.value) {
        conerror.innerHTML = "***password are not matching ";
        return false;
    }
    conerror.innerHTML = "";
    conerror.style.display = 'none';
    return true;
}



// onsubmit
function validation() {
    if (validUser() && validpass() && validconpass()) {
        let adddata = {
            user: username.value,
            pass: password.value,
        }
        saveinfo(adddata)
        username.value = '';
        password.value = '';
        confirmPass.value = '';

    }
}


// save data on localstorage
function saveinfo(adddata) {
    let data = JSON.parse(localStorage.getItem('userform'));
    console.log(data,adddata);
    data = data ?? [];
    data.push(adddata);
    localStorage.setItem('userform', JSON.stringify(data));
}



username.addEventListener('input', validUser);
password.addEventListener('input', validpass);
confirmPass.addEventListener('input', validconpass);