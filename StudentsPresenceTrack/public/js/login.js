window.onload = function(){
    document.getElementById("dugme").onclick = function(){
        PoziviAjax.postLogin(document.getElementById("username").value, document.getElementById("password").value, function(status, data){
            if(status && data.poruka == "Uspješna prijava"){
                window.location.replace("predmeti.html");
            }
            else{
                alert("Greška: " + data.poruka);
            }
        });
    }
}