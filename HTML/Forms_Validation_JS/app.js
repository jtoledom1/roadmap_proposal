function clear(){
    let jscontent = document.getElementById("jscontent");
    let li_req = document.getElementById("li_Req");
    let li_mil = document.getElementById("li_MiL");
    let li_mal = document.getElementById("li_MaL");
    let li_typ = document.getElementById("li_Typ");
    let li_rex = document.getElementById("li_REX");
    let li_enl=  document.getElementById("li_Enl");
    
    li_req.style.color = "white";
    li_mil.style.color = "white";
    li_mal.style.color = "white";
    li_typ.style.color = "white";
    li_rex.style.color = "white";
    li_enl.style.color = "white";

    jscontent.innerHTML="<em><em/>"    
}
function color(labls){
    labls.style.color = "red";
    setTimeout(function() {
        labls.style.color = "rgba(255,0,0,0.9)"; 
    }, 300);
}

function callrequired(){    
    let li_req = document.getElementById("li_Req");
    let jscontent = document.getElementById("jscontent");
    let title = document.getElementById("title");

    title.innerText = "Required";
    clear();
    color(li_req);

    jscontent.innerHTML=
    `<form><label for='choose'>How you feel about GTA 6?</label><input id='choose' name='i-like' required/><button>Submit</button></form>`;

}

function callminlen(){
    let li_mil = document.getElementById("li_MiL");
    let jscontent = document.getElementById("jscontent");
    let title = document.getElementById("title");
    
    title.innerText = "Min Lenght";
    
    clear();
    color(li_mil);
    
}