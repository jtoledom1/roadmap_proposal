function clear(){
    let li_req = document.getElementById("li_Req");
    let li_mil = document.getElementById("li_MiL");
    let li_mal = document.getElementById("li_MaL");
    let li_typ = document.getElementById("li_Typ");
    let li_rex = document.getElementById("li_REX");
    let li_enl = document.getElementById("li_Enl");
    let li_hom = document.getElementById("li_Home");
    
    li_req.style.color = "white";
    li_mil.style.color = "white";
    li_mal.style.color = "white";
    li_typ.style.color = "white";
    li_rex.style.color = "white";
    li_enl.style.color = "white";
    li_hom.style.color = "white";

    document.getElementById("jscontent").innerHTML = '';  
}
function color(labls){
    labls.style.color = "red";
    setTimeout(function() {
        labls.style.color = "rgba(255,0,0,0.9)"; 
    }, 300);
}

function calls2(tab,texth1,html){
    let intertab = document.getElementById(tab);
    let jscontent = document.getElementById("jscontent");
    let title = document.getElementById("title");
    let varhtml = document.getElementById(html).innerHTML;
    title.innerText =texth1;
    clear();
    color(intertab);
    jscontent.innerHTML=varhtml;
}

function initial(){
    document.getElementById('sec_Hom').setAttribute('hidden', false);
}