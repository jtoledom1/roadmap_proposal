function show(targ){
    hidehome();
    let elem = document.getElementById(targ);
    elem.style.display='block';
}
function hidehome(){
    let hom = document.getElementById('sechome');
    let form = document.getElementById('reqform');
    hom.style.display='none';
    form.style.display='none';
}
function validateForm() {
    let x = document.forms["reqform"]["reqinput"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}