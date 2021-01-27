const toggle = document.querySelector(".navbar-toggler");

x();

function x() {
    toggle.addEventListener("click",destroy);
}

function destroy(e) {
    if(e.target.className === "navbar-toggler-icon") {
        const kral = document.getElementById("tekKral");

        kral.setAttribute("style", "display: none !important;");
    }
    setTimeout(()=>{
        if(e.target.className === "navbar-toggler-icon") {
            const kral = document.getElementById("tekKral");
    
            kral.setAttribute("style", "display: inline !important;");
        }
    },2500);
}