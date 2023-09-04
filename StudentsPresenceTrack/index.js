const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(express.json());
app.use(express.static('public'))
const { request } = require('http');
const session = require('express-session');

var pom = 0;
const db = require('./data/db.js');

app.use(session({
    secret: 'sifra',
    resave: true,
    saveUninitialized: true
}));

db.nastavnik.findAll().then(function(nas){
    console.log("Bez ovog poziva prvi login iz nekog razloga ne funkcioniše!");
});

app.post('/login',function(req,res){
    if(pom == 0){
        var tijelo = req.body;
        db.nastavnik.findAll().then(function(nas){
            for(let i = 0; i < nas.length; i++){
                if(nas[i].username == tijelo.username){
                    const bcrypt = require("bcrypt");
                    if(bcrypt.compareSync(tijelo.password, nas[i].password_hash)){
                        req.session.data = Object();
                        req.session.data.logged = true;
                        req.session.data.username = tijelo.username;
                        req.session.data.id = nas[i].id;
                    }
                }
            }
            if(req.session.data){
                pom = 1;
                res.send(JSON.stringify({"poruka":"Uspješna prijava"}));
            }
            else{
                res.status(400).send(JSON.stringify({"poruka":"Neuspješna prijava"}));
            }
        });
    }
    else{
        res.status(400).send(JSON.stringify({"poruka":"Neuspješna prijava"}));
    }
});

app.post('/logout',function(req,res){
    pom = 0;
    req.session.destroy();
    res.send();
});

app.get('/predmet/:naziv', function(req,res){
    if(req.session.data && req.session.data.logged && req.session.data.predmeti.includes(req.params.naziv)){
        let brojPredavanja = 0;
        let brojVjezbi = 0;
        let idPredmeta = 0;
        db.predmet.findOne({where: {naziv: req.params.naziv}}).then(function(prdmt){
            brojPredavanja = prdmt.brojPredavanjaSedmicno;
            brojVjezbi = prdmt.brojVjezbiSedmicno;
            idPredmeta = prdmt.id;
            var jsonData = {
                studenti: [],
                prisustva: [],
                predmet: req.params.naziv,
                brojPredavanjaSedmicno: brojPredavanja,
                brojVjezbiSedmicno: brojVjezbi
            }
            db.prisustvo.findAll({where: {predmetId:idPredmeta}}).then(function(prstv){
                let niz =[];
                for(let i = 0; i < prstv.length; i++){
                    if(!niz.includes(prstv[i].studentId)){
                        niz.push(prstv[i].studentId);
                    }
                }
                db.student.findAll({where: {id:niz}}).then(function(stdnt){
                    for(let i = 0; i < stdnt.length; i++){
                        let student1 = {
                            ime: stdnt[i].ime,
                            index: stdnt[i].index
                        }
                        jsonData.studenti.push(student1);
                        for(let j = 0; j < prstv.length; j++){
                            if(prstv[j].studentId == stdnt[i].id && prstv[j].predmetId == idPredmeta){
                                let prisustvo1 = {
                                    sedmica: prstv[j].sedmica,
                                    predavanja: prstv[j].predavanja,
                                    vjezbe: prstv[j].vjezbe,
                                    index: stdnt[i].index
                                }
                                jsonData.prisustva.push(prisustvo1);
                            }
                        }
                    }
                    res.send(JSON.stringify(jsonData));
                });
            })
        });
    }
    else{
        res.status(403).send(JSON.stringify({"greska":"Nastavnik nije loginovan"}));
    }
});

app.get('/predmeti',function(req,res){
    if(req.session.data && req.session.data.logged){
        db.predmet.findAll({where: {nastavnikId:req.session.data.id}}).then(function(pr){
            let niz = [];
            for(let i = 0; i < pr.length; i++){
                niz.push(pr[i].naziv);
            }
            req.session.data.predmeti = niz;
            res.send(JSON.stringify(niz));
        });
    }
    else{
        res.status(403).send(JSON.stringify({"greska":"Nastavnik nije loginovan"}));
    }
});

app.post('/prisustvo/predmet/:naziv/student/:index',function(req,res){
    if(req.session.data && req.session.data.logged && req.session.data.predmeti.includes(req.params.naziv)){
        db.student.findOne({where: {index: req.params.index}}).then(function(stdnt2){
            db.predmet.findOne({where: {naziv: req.params.naziv}}).then(function(prdmt2){
                db.prisustvo.findOne({where: [{studentId:stdnt2.id},{predmetId:prdmt2.id},{sedmica: req.body.sedmica}]}).then(function(prstv2){
                    let temp = 0;
                    if(prstv2 != null){
                        prstv2.predavanja = +req.body.predavanja;
                        prstv2.vjezbe = +req.body.vjezbe;
                        prstv2.save();
                        temp = 1;
                    }
                    let brojPredavanja = 0;
                    let brojVjezbi = 0;
                    let idPredmeta = 0;
                    brojPredavanja = prdmt2.brojPredavanjaSedmicno;
                    brojVjezbi = prdmt2.brojVjezbiSedmicno;
                    idPredmeta = prdmt2.id;
                    var jsonData = {
                        studenti: [],
                        prisustva: [],
                        predmet: req.params.naziv,
                        brojPredavanjaSedmicno: brojPredavanja,
                        brojVjezbiSedmicno: brojVjezbi
                    }
                    db.prisustvo.findAll({where: {predmetId:idPredmeta}}).then(function(prstv){
                        let niz =[];
                        for(let i = 0; i < prstv.length; i++){
                            if(!niz.includes(prstv[i].studentId)){
                                niz.push(prstv[i].studentId);
                            }
                        }
                        db.student.findAll({where: {id:niz}}).then(function(stdnt){
                            for(let i = 0; i < stdnt.length; i++){
                                let student1 = {
                                    ime: stdnt[i].ime,
                                    index: stdnt[i].index
                                }
                                jsonData.studenti.push(student1);
                                for(let j = 0; j < prstv.length; j++){
                                    if(prstv[j].studentId == stdnt[i].id && prstv[j].predmetId == idPredmeta){
                                        if(prstv[j].studentId == stdnt2.id && prstv[j].sedmica == req.body.sedmica){
                                            let prisustvo1 = {
                                                sedmica: prstv[j].sedmica,
                                                predavanja: +req.body.predavanja,
                                                vjezbe: +req.body.vjezbe,
                                                index: stdnt[i].index
                                            }
                                            jsonData.prisustva.push(prisustvo1);
                                        }
                                        else{
                                            let prisustvo1 = {
                                                sedmica: prstv[j].sedmica,
                                                predavanja: prstv[j].predavanja,
                                                vjezbe: prstv[j].vjezbe,
                                                index: stdnt[i].index
                                            }
                                            jsonData.prisustva.push(prisustvo1);
                                        }
                                    }
                                }
                            }
                            if(temp == 0){
                                let prisustvo1 = {
                                    sedmica: +req.body.sedmica,
                                    predavanja: +req.body.predavanja,
                                    vjezbe: +req.body.vjezbe,
                                    index: stdnt2.index
                                }
                                jsonData.prisustva.push(prisustvo1);
                                db.prisustvo.create({sedmica:+req.body.sedmica,predavanja:+req.body.predavanja,vjezbe:+req.body.vjezbe,studentId:stdnt2.id,predmetId:prdmt2.id}).then(function(p){
                                    console.log("Uspješno dodana novo prisustvo!");
                                })
                            }
                            res.send(JSON.stringify(jsonData));
                        });
                    });
                })
            })
        })
    }
});

app.listen(3000);