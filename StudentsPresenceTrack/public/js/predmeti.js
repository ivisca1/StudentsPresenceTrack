window.onload = function(){
    document.getElementById("dugme").onclick = function(){
        PoziviAjax.postLogout(function(status, data){
            if(status){
                window.location.replace("prijava.html");
            }
        })
    };

    let tabela = document.getElementById("tabela");
    let meni = document.getElementById("lista");

    PoziviAjax.getPredmeti(function(status, data){
        if(status){
            for(let i = 0; i < data.length; i++){
                meni.innerHTML = meni.innerHTML + "<a href=\"#\" class=\"predmeti\">" + data[i] + "</a>";
            }
            document.querySelectorAll(".predmeti").forEach(function(item){
                item.onclick = function(){
                    PoziviAjax.getPredmet(this.text,function(status,data){
                        if(status){
                            window.trenutnaSedmica = undefined;
                            let prisustvo = TabelaPrisustvo(tabela, data);
                            if(prisustvo){
                                window.sljedecaSedmica = prisustvo.sljedecaSedmica;
                                window.prethodnaSedmica = prisustvo.prethodnaSedmica;
                            }
                        }
                    })
                }
            })
        }
        else{
            alert("Podaci nisu preuzeti uspješno!");
        }
    });

    window.prisustvoClick = function(){
        document.querySelectorAll('.zel, .crv, .empty').forEach(function(cell){
            cell.onclick = function(){
                PoziviAjax.postPrisustvo(cell.dataset.predmet, cell.dataset.index, {"sedmica": cell.dataset.sedmica, "predavanja": cell.dataset.predavanja, "vjezbe": cell.dataset.vjezbe}, function(status, data){
                    if(status){
                        let prisustvo = TabelaPrisustvo(tabela, data);
                        if(prisustvo){
                            window.sljedecaSedmica = prisustvo.sljedecaSedmica;
                            window.prethodnaSedmica = prisustvo.prethodnaSedmica;
                        }
                    }
                });
            }
        });
    }
}