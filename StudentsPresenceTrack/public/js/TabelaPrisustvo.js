let TabelaPrisustvo = function (divRef, podaci) {
    //privatni atributi modula
    //

    document.getElementById(divRef.id).innerHTML = "";

    for(let i = 0; i < podaci.prisustva.length; i++){
        if(podaci.prisustva[i].predavanja > podaci.brojPredavanjaSedmicno || podaci.prisustva[i].vjezbe > podaci.brojVjezbiSedmicno 
            || podaci.prisustva[i].predavanja < 0 || podaci.prisustva[i].vjezbe < 0){
                document.getElementById(divRef.id).innerHTML = "Podaci o prisustvu nisu validni!";
                return;
            }
    }

    for(let i = 0; i < podaci.prisustva.length - 1; i++){
        for(let j = i+1; j < podaci.prisustva.length; j++){
            if(podaci.prisustva[i].index == podaci.prisustva[j].index && podaci.prisustva[i].sedmica == podaci.prisustva[j].sedmica){
                document.getElementById(divRef.id).innerHTML = "Podaci o prisustvu nisu validni!";
                return;
            }
        }
    }

    for(let i = 0; i < podaci.studenti.length - 1; i++){
        for(let j = i+1; j < podaci.studenti.length; j++){
            if(podaci.studenti[i].index == podaci.studenti[j].index){
                document.getElementById(divRef.id).innerHTML = "Podaci o prisustvu nisu validni!";
                return;
            }
        }
    }

    for(let i = 0; i < podaci.prisustva.length - 1; i++){
        let temp = 0;
        for(let j = 0; j < podaci.studenti.length; j++){
            if(podaci.prisustva[i].index == podaci.studenti[j].index){
                temp = 1;
                break;
            }
        }
        if(temp == 0){
            document.getElementById(divRef.id).innerHTML = "Podaci o prisustvu nisu validni!";
            return;
        }
    }

    for(let i = 0; i < podaci.prisustva.length; i++){
        let temp1 = 0;
        let temp2 = 0;
        for(let j = 0; j < podaci.prisustva.length; j++){
            if(podaci.prisustva[i].sedmica + 1 == podaci.prisustva[j].sedmica){
                temp1 = 1;
            }
            if(podaci.prisustva[j].sedmica > podaci.prisustva[i].sedmica + 1){
                temp2 = 1;
            }
        }
        if(temp1 == 0 && temp2 == 1){
            document.getElementById(divRef.id).innerHTML = "Podaci o prisustvu nisu validni!";
            return;
        }
    }

    let poredaniPoSedmici = podaci.prisustva.sort(function (a,b){
        return a.sedmica - b.sedmica;
    });

    var maxSedmica = poredaniPoSedmici[poredaniPoSedmici.length-1].sedmica;

    const nizSedmica = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV"];

    let ukupniBrojCasova = podaci.brojPredavanjaSedmicno + podaci.brojVjezbiSedmicno;

    //var trenutnaSedmica = maxSedmica;

    function ispisTabele(trenutnaSedmica){
        kod = "<h1>" + podaci.predmet + "</h1><table>";
        kod = kod + "<tr><th>Ime i<br> prezime</th><th class=\"drugaKolona\">Index</th>";
        for(let s = 1; s <= maxSedmica; s++){
            if(s == trenutnaSedmica){
                if(s == maxSedmica){
                    let temp = 15 - trenutnaSedmica;
                    kod = kod + "<th colspan=\"" + ukupniBrojCasova + "\">" + nizSedmica[s-1] + "</th><th id=\"zadnja\" colspan=\"" + temp + "\">" + nizSedmica[s] + "-XV</th></tr>";
                }
                else{
                    kod = kod + "<th colspan=\"" + ukupniBrojCasova + "\">" + nizSedmica[s-1] + "</th>";
                }
            }
            else if(s == maxSedmica){
                let temp = 15 - trenutnaSedmica;
                kod = kod + "<th>" + nizSedmica[s-1] + "</th><th id=\"zadnja\" colspan=\"" + temp + "\">" + nizSedmica[s] + "-XV</th></tr>"
            }
            else{
                kod = kod + "<th>" + nizSedmica[s-1] + "</th>";
            }
        }
        for(let i = 0; i < podaci.studenti.length; i++){
            kod = kod + "<tr><td rowspan=\"2\">" + podaci.studenti[i].ime + "</td><td rowspan=\"2\" class=\"drugaKolona\">" + podaci.studenti[i].index + "</td>";
            let jedanStudent = podaci.prisustva.filter(function (entry) {
                return entry.index == podaci.studenti[i].index;
            }).sort(function (a,b){
                return a.sedmica - b.sedmica;
            });
            let temp2 = -1;
            for(let j = 1; j <= maxSedmica; j++){
                let temp = -1;
                for(let x = 0; x < jedanStudent.length; x++){
                    if(jedanStudent[x].sedmica == j){
                        temp = x;
                        break;
                    }
                }
                if(temp != -1){
                    if(j == trenutnaSedmica){
                        temp2 = temp;
                        for( let x = 1; x <= podaci.brojPredavanjaSedmicno; x++){
                            kod = kod + "<td class=\"pv\">P<br>" + x + "</td>";
                        }
                        for( let x = 1; x<=podaci.brojVjezbiSedmicno; x++){
                            kod = kod + "<td class=\"pv\">V<br>" + x + "</td>";
                        }
                    }
                    else{
                        let postotak = Math.round(((jedanStudent[temp].predavanja + jedanStudent[temp].vjezbe) / (podaci.brojPredavanjaSedmicno + podaci.brojVjezbiSedmicno))*100);
                        kod = kod + "<td rowspan=\"2\">" + postotak + "%</td>";
                    }
                }
                else{
                    if(j == trenutnaSedmica){
                        for( let x = 1; x <= podaci.brojPredavanjaSedmicno; x++){
                            kod = kod + "<td class=\"pv\">P<br>" + x + "</td>";
                        }
                        for( let x = 1; x<=podaci.brojVjezbiSedmicno; x++){
                            kod = kod + "<td class=\"pv\">V<br>" + x + "</td>";
                        }
                    }
                    else{
                        kod = kod + "<td rowspan=\"2\">Nije<br>uneseno</td>";
                    }
                }
            }
            for( let x = maxSedmica + 1; x <=15; x++){
                kod = kod + "<td class=\"prazna\" rowspan=\"2\"></td>";
            }
            kod = kod + "</tr><tr>";
            if(temp2 != -1){
                let prisustvovanaPredavanja = jedanStudent[temp2].predavanja;
                let prisustvovaneVjezbe = jedanStudent[temp2].vjezbe;
                for( let x = 1; x <= podaci.brojPredavanjaSedmicno; x++){
                    if(prisustvovanaPredavanja > 0){
                        kod = kod + "<td class=\"zel\" data-predmet=\"" + podaci.predmet + "\" data-index=\"" + podaci.studenti[i].index + "\" data-sedmica=\"" + trenutnaSedmica + "\" data-predavanja=\"" + (jedanStudent[temp2].predavanja-1) + "\" data-vjezbe=\"" + jedanStudent[temp2].vjezbe + "\"></td>";
                        prisustvovanaPredavanja--;
                    }
                    else{
                        kod = kod + "<td class=\"crv\" data-predmet=\"" + podaci.predmet + "\" data-index=\"" + podaci.studenti[i].index + "\" data-sedmica=\"" + trenutnaSedmica + "\" data-predavanja=\"" + (jedanStudent[temp2].predavanja+1) + "\" data-vjezbe=\"" + jedanStudent[temp2].vjezbe + "\"></td>";
                    }
                }
                for( let x = 1; x <= podaci.brojVjezbiSedmicno; x++){
                    if(prisustvovaneVjezbe > 0){
                        kod = kod + "<td class=\"zel\" data-predmet=\"" + podaci.predmet + "\" data-index=\"" + podaci.studenti[i].index + "\" data-sedmica=\"" + trenutnaSedmica + "\" data-predavanja=\"" + jedanStudent[temp2].predavanja + "\" data-vjezbe=\"" + (jedanStudent[temp2].vjezbe-1) + "\"></td>";
                        prisustvovaneVjezbe--;
                    }
                    else{
                        kod = kod + "<td class=\"crv\" data-predmet=\"" + podaci.predmet + "\" data-index=\"" + podaci.studenti[i].index + "\" data-sedmica=\"" + trenutnaSedmica + "\" data-predavanja=\"" + jedanStudent[temp2].predavanja + "\" data-vjezbe=\"" + (jedanStudent[temp2].vjezbe+1) + "\"></td>";
                    }
                }
            }
            else{
                for( let x = 1; x <= podaci.brojPredavanjaSedmicno; x++){
                    kod = kod + "<td class=\"empty\" data-predmet=\"" + podaci.predmet + "\" data-index=\"" + podaci.studenti[i].index + "\" data-sedmica=\"" + trenutnaSedmica + "\" data-predavanja=\"" + 1 + "\" data-vjezbe=\"" + 0 + "\"></td>";
                }
                for( let x = 1; x <= podaci.brojVjezbiSedmicno; x++){
                    kod = kod + "<td class=\"empty\" data-predmet=\"" + podaci.predmet + "\" data-index=\"" + podaci.studenti[i].index + "\" data-sedmica=\"" + trenutnaSedmica + "\" data-predavanja=\"" + 0 + "\" data-vjezbe=\"" + 1 + "\"></td>";
                }
            }
            kod = kod + "</tr>";
        }
        kod = kod + "</table>";

        kod = kod + "<br><button><i class=\"fa fa-arrow-left\" style=\"font-size:48px\" onclick=\"prethodnaSedmica()\"></i></button>";

        kod = kod + "<button style=\"margin-left:50px\"><i class=\"fa fa-arrow-right\" style=\"font-size:48px\" onclick=\"sljedecaSedmica()\"></i></button>";

        document.getElementById(divRef.id).innerHTML = kod;

        prisustvoClick();
    }

    if(!window.trenutnaSedmica){
        window.trenutnaSedmica = maxSedmica;
    }

    ispisTabele(trenutnaSedmica);

    //implementacija metoda
    let sljedecaSedmica = function () {
        /*if(maxSedmica < trenutnaSedmica){
            maxSedmica++;
            ispisTabele(maxSedmica);
        }*/
        if(trenutnaSedmica == maxSedmica){
            return;
        }
        ispisTabele(++trenutnaSedmica);
    }

    let prethodnaSedmica = function () {
        /*if(maxSedmica > 1){
            maxSedmica--;
            ispisTabele(maxSedmica);
        }*/
        if(trenutnaSedmica == 1){
            return;
        }
        ispisTabele(--trenutnaSedmica);
    }


    return {
        sljedecaSedmica: sljedecaSedmica,
        prethodnaSedmica: prethodnaSedmica
    }
};
