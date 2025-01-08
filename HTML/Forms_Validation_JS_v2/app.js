function display(){
    clear();
    const elemshow = document.getElementById('li_req');
    document.getElementById('frm_req').style.display='block';
    elemshow.style.color='red';
}

function clear(){
    const elementos = document.querySelectorAll('.nodisplay');
    const ids = [];

    elementos.forEach(elemento => {
        ids.push(elemento.id);
    });

    elementos.forEach(elemento => {
        elemento.style.display = 'none';
        elemento.style.color = 'black';
    });

}

function email(){
    display();
    const email = document.getElementById("mail");

    email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an email address!");
    } else {
        email.setCustomValidity("");
    }
    });
}