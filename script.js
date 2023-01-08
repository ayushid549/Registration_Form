const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

//add event

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validate();
})

const sendData = (sRate,count) => {
      if(sRate === count)
      {
        alert("Registered Successfully!");
      }
      else{
        alert("Error,Please Try again!")
      }
}

//for final data validation

const successMsg = () => {
    let formCon  = document.getElementsByClassName('form-control');
    var count = formCon.length-1;
    for(var i=0;i<formCon.length;i++)
    {
        if(formCon[i].className === 'form-control success')
        {
            var sRate = 0 + i;
            console.log(sRate);
            sendData(sRate,count);
        } 
        else{
            return false;
        }
    }
}

//email validation
const isEmail = (emailval) => {

    var atSymbol = emailval.indexOf("@");
    if (atSymbol < 1)
        return false;

    var dot = emailval.lastIndexOf('.');
    if (dot <= atSymbol + 2)
        return false;
    if (dot === emailval.length - 1)
        return false;

    return true;
}

//define the validate function

const validate = () => {
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const mobnoval = mobile.value.trim()
    const cpasswordval = cpassword.value.trim();

    //validate username

    if (usernameval === ""){
        setErrorMsg(username, 'username cannot be blank');
    }
    else if (usernameval.length <= 2) {
        setErrorMsg(username, 'username min 3 character');
    }
    else {
        setSuccessMsg(username);
    }

    //validate email

    if (emailval === "") {
        setErrorMsg(email, 'email cannot be blank');
    }
    else if (!isEmail(emailval)) {
        setErrorMsg(email, 'email is not valid');
    }
    else {
        setSuccessMsg(email);
    }

    //validate mobile no.

    if (mobnoval === "") {
        setErrorMsg(mobile, 'mobile no. cannot be blank');
    }
    else if (mobnoval.length != 10) {
        setErrorMsg(mobile, 'Mobile no. is not valid');
    }
    else {
        setSuccessMsg(mobile);
    }

    //validate password

    if (passwordval === "") {
        setErrorMsg(password, 'password cannot be blank');
    }
    else if (password.length<=5) {
        setErrorMsg(password, 'password is not valid');
    }
    else {
        setSuccessMsg(password);
    }

    //validate check password

    if (cpasswordval === "") {
        setErrorMsg(cpassword, 'confirm password cannot be blank');
    }
    else if (passwordval !== cpasswordval) {
        setErrorMsg(cpassword, 'password is not valid');
    }
    else {
        setSuccessMsg(cpassword);
    }

    successMsg();
}

//function for error message

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

//function for success message

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}



