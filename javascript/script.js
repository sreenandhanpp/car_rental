// Form validation code 

function validate() {
    var alert = document.getElementById("alert-pass");
    var name = document.myForm.name.value;
    var email = document.myForm.email.value;
    var message = document.myForm.message.value;
    var alertBox = document.getElementById('modalView');
    var missingFields = false;
    var strFields = ""

    if (name == "") {
        missingFields = true;
        strFields += "Name*"
    }

    if (email == '') {
        missingFields = true;
        strFields += " Email*\n";
    }

    if (message == '') {
        missingFields = true;
        strFields += " Message*\n";
    }
    if (missingFields) {
        alert.innerText = "Enter  " + strFields + "to continue";
        alertBox.style.display = "block"
    }
    
    location.reload()
}



function alertNone(){
    const closeBtn = document.getElementById("modalView__closeBtn");
    const modalView = document.getElementById("modalView");
    modalView.style.display = "none";
}
