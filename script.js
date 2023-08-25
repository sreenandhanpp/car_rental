
// Form validation code will come here.
function validate() {

    if (document.myForm.name.value == "") {
        alert("Please provide your name!");
        document.myForm.Name.focus();
        return false;
    }
    if (document.myForm.email.value == "") {
        alert("Please provide your Email!");
        document.myForm.EMail.focus();
        return false;
    }
    if (document.myForm.message.value == "") {
        alert("Please provide your Email!");
        document.myForm.EMail.focus();
        return false;
    }
    
    return (true);
}
