function show(targ){
    hidehome();
    let elem = document.getElementById(targ);
    elem.style.display='block';
}
function hidehome(){
    let hom = document.getElementById('sechome');
    let form = document.getElementById('reqform');
    let formMIL = document.getElementById('forMil');
    let formMAL = document.getElementById('forMAl');
    hom.style.display='none';
    form.style.display='none';
    formMIL.style.display='none';
    formMAL.style.display='none';

}
function validateForm() {
    let x = document.forms["reqform"]["reqinput"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
function validateFormMIL(){
    let x = document.forms["forMil"]["minLinput"].value.length;
    if (x <= 3) {
        alert("Form must contain at least 3 characters");
        return false;
    }
}
function validateFormMAL(){
    let x = document.forms["forMAl"]["mAXLinput"].value.length;
    if (x >= 3) {
        alert("Form must contain less than 3 characters");
        return false;
    }
}