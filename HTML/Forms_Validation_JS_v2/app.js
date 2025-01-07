const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});


function color(label) {
    label.style.color = "red";
    setTimeout(() => {
        label.style.color = "rgba(255,0,0,0.9)";
    }, 300);
}

function calls(tab, texth1, html) {
    const intertab = document.getElementById(tab);
    const jscontent = document.getElementById("jscontent");
    const title = document.getElementById("title");
    const varhtml = document.getElementById(html).innerHTML;
    
    title.innerText = texth1;
    color(intertab);
    jscontent.innerHTML = varhtml;
}

function initial() {
    document.getElementById('sec_Hom').hidden = false;
}
