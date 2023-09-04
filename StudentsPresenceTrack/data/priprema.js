const db = require('./db.js')
db.sequelize.sync({force:true}).then(function(){
    inicializacija().then(function(){
        console.log("Gotovo kreiranje tabela i ubacivanje pocetnih podataka!");
        process.exit();
    });
});
function inicializacija(){
    var studentiListaPromisea=[];
    var predmetiListaPromisea=[];
    var nastavniciListaPromisea=[];
    var prisustvaListaPromisea=[];
    return new Promise(function(resolve,reject){
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:1,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:1,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:1,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:1,predavanja:3,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:1,predavanja:2,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:1,predavanja:2,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:1,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:1,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:1,predavanja:2,vjezbe:3}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:1,predavanja:2,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:1,predavanja:2,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:1,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:1,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:1,predavanja:2,vjezbe:3}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:1,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:1,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:1,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:1,predavanja:3,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:2,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:2,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:2,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:2,predavanja:3,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:2,predavanja:2,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:2,predavanja:2,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:2,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:2,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:2,predavanja:2,vjezbe:3}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:2,predavanja:2,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:2,predavanja:2,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:2,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:2,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:2,predavanja:2,vjezbe:3}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:2,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:2,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:2,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:2,predavanja:3,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:3,predavanja:2,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:3,predavanja:2,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:3,predavanja:2,vjezbe:1}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:3,predavanja:2,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:3,predavanja:2,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:3,predavanja:2,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:3,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:3,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:3,predavanja:2,vjezbe:3}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:3,predavanja:2,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:3,predavanja:2,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:3,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:3,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:3,predavanja:2,vjezbe:3}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:3,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:3,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:3,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:3,predavanja:3,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:4,predavanja:2,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:4,predavanja:2,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:4,predavanja:2,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:4,predavanja:2,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:4,predavanja:2,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:4,predavanja:2,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:4,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:4,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:4,predavanja:2,vjezbe:3}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:4,predavanja:2,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:4,predavanja:2,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:4,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:4,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:4,predavanja:2,vjezbe:3}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:4,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:4,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:4,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:4,predavanja:3,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:5,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:5,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:5,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:5,predavanja:3,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:5,predavanja:2,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:5,predavanja:2,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:5,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:5,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:5,predavanja:2,vjezbe:3}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:5,predavanja:2,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:5,predavanja:2,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:5,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:5,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:5,predavanja:2,vjezbe:3}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:5,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:5,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:5,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:5,predavanja:3,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:6,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:6,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:6,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:6,predavanja:3,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:6,predavanja:2,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:6,predavanja:2,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:6,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:6,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:6,predavanja:2,vjezbe:3}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:6,predavanja:2,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:6,predavanja:2,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:6,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:6,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:6,predavanja:2,vjezbe:3}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:6,predavanja:1,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:6,predavanja:0,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:7,predavanja:3,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:7,predavanja:1,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:7,predavanja:0,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:7,predavanja:2,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:7,predavanja:0,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:7,predavanja:0,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:7,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:7,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:7,predavanja:2,vjezbe:3}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:7,predavanja:0,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:7,predavanja:0,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:7,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:7,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:7,predavanja:2,vjezbe:3}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:8,predavanja:0,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:8,predavanja:0,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:8,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:8,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:8,predavanja:2,vjezbe:3}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:9,predavanja:0,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:9,predavanja:0,vjezbe:2}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:9,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:9,predavanja:2,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:9,predavanja:2,vjezbe:3}));

        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:10,predavanja:1,vjezbe:2}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:10,predavanja:0,vjezbe:3}));
        prisustvaListaPromisea.push(db.prisustvo.create({sedmica:10,predavanja:2,vjezbe:3}));

        Promise.all(prisustvaListaPromisea).then(function(prisustva){
            var prva1 = prisustva.filter(function(a){return a.sedmica===1})[0];
            var prva2 = prisustva.filter(function(a){return a.sedmica===1})[1];
            var prva3 = prisustva.filter(function(a){return a.sedmica===1})[2];
            var prva4 = prisustva.filter(function(a){return a.sedmica===1})[3];

            var prva5 = prisustva.filter(function(a){return a.sedmica===1})[4];
            var prva6 = prisustva.filter(function(a){return a.sedmica===1})[5];

            var prva7 = prisustva.filter(function(a){return a.sedmica===1})[6];
            var prva8 = prisustva.filter(function(a){return a.sedmica===1})[7];
            var prva9 = prisustva.filter(function(a){return a.sedmica===1})[8];

            var prva10 = prisustva.filter(function(a){return a.sedmica===1})[9];
            var prva11 = prisustva.filter(function(a){return a.sedmica===1})[10];

            var prva12 = prisustva.filter(function(a){return a.sedmica===1})[11];
            var prva13 = prisustva.filter(function(a){return a.sedmica===1})[12];
            var prva14 = prisustva.filter(function(a){return a.sedmica===1})[13];

            var prva15 = prisustva.filter(function(a){return a.sedmica===1})[14];
            var prva16 = prisustva.filter(function(a){return a.sedmica===1})[15];
            var prva17 = prisustva.filter(function(a){return a.sedmica===1})[16];
            var prva18 = prisustva.filter(function(a){return a.sedmica===1})[17];

            var druga1 = prisustva.filter(function(a){return a.sedmica===2})[0];
            var druga2 = prisustva.filter(function(a){return a.sedmica===2})[1];
            var druga3 = prisustva.filter(function(a){return a.sedmica===2})[2];
            var druga4 = prisustva.filter(function(a){return a.sedmica===2})[3];

            var druga5 = prisustva.filter(function(a){return a.sedmica===2})[4];
            var druga6 = prisustva.filter(function(a){return a.sedmica===2})[5];

            var druga7 = prisustva.filter(function(a){return a.sedmica===2})[6];
            var druga8 = prisustva.filter(function(a){return a.sedmica===2})[7];
            var druga9 = prisustva.filter(function(a){return a.sedmica===2})[8];

            var druga10 = prisustva.filter(function(a){return a.sedmica===2})[9];
            var druga11 = prisustva.filter(function(a){return a.sedmica===2})[10];

            var druga12 = prisustva.filter(function(a){return a.sedmica===2})[11];
            var druga13 = prisustva.filter(function(a){return a.sedmica===2})[12];
            var druga14 = prisustva.filter(function(a){return a.sedmica===2})[13];

            var druga15 = prisustva.filter(function(a){return a.sedmica===2})[14];
            var druga16 = prisustva.filter(function(a){return a.sedmica===2})[15];
            var druga17 = prisustva.filter(function(a){return a.sedmica===2})[16];
            var druga18 = prisustva.filter(function(a){return a.sedmica===2})[17];

            var treca1 = prisustva.filter(function(a){return a.sedmica===3})[0];
            var treca2 = prisustva.filter(function(a){return a.sedmica===3})[1];
            var treca3 = prisustva.filter(function(a){return a.sedmica===3})[2];
            var treca4 = prisustva.filter(function(a){return a.sedmica===3})[3];

            var treca5 = prisustva.filter(function(a){return a.sedmica===3})[4];
            var treca6 = prisustva.filter(function(a){return a.sedmica===3})[5];

            var treca7 = prisustva.filter(function(a){return a.sedmica===3})[6];
            var treca8 = prisustva.filter(function(a){return a.sedmica===3})[7];
            var treca9 = prisustva.filter(function(a){return a.sedmica===3})[8];

            var treca10 = prisustva.filter(function(a){return a.sedmica===3})[9];
            var treca11 = prisustva.filter(function(a){return a.sedmica===3})[10];

            var treca12 = prisustva.filter(function(a){return a.sedmica===3})[11];
            var treca13 = prisustva.filter(function(a){return a.sedmica===3})[12];
            var treca14 = prisustva.filter(function(a){return a.sedmica===3})[13];

            var treca15 = prisustva.filter(function(a){return a.sedmica===3})[14];
            var treca16 = prisustva.filter(function(a){return a.sedmica===3})[15];
            var treca17 = prisustva.filter(function(a){return a.sedmica===3})[16];
            var treca18 = prisustva.filter(function(a){return a.sedmica===3})[17];

            var cetvrta1 = prisustva.filter(function(a){return a.sedmica===4})[0];
            var cetvrta2 = prisustva.filter(function(a){return a.sedmica===4})[1];
            var cetvrta3 = prisustva.filter(function(a){return a.sedmica===4})[2];
            var cetvrta4 = prisustva.filter(function(a){return a.sedmica===4})[3];

            var cetvrta5 = prisustva.filter(function(a){return a.sedmica===4})[4];
            var cetvrta6 = prisustva.filter(function(a){return a.sedmica===4})[5];

            var cetvrta7 = prisustva.filter(function(a){return a.sedmica===4})[6];
            var cetvrta8 = prisustva.filter(function(a){return a.sedmica===4})[7];
            var cetvrta9 = prisustva.filter(function(a){return a.sedmica===4})[8];

            var cetvrta10 = prisustva.filter(function(a){return a.sedmica===4})[9];
            var cetvrta11 = prisustva.filter(function(a){return a.sedmica===4})[10];

            var cetvrta12 = prisustva.filter(function(a){return a.sedmica===4})[11];
            var cetvrta13 = prisustva.filter(function(a){return a.sedmica===4})[12];
            var cetvrta14 = prisustva.filter(function(a){return a.sedmica===4})[13];

            var cetvrta15 = prisustva.filter(function(a){return a.sedmica===4})[14];
            var cetvrta16 = prisustva.filter(function(a){return a.sedmica===4})[15];
            var cetvrta17 = prisustva.filter(function(a){return a.sedmica===4})[16];
            var cetvrta18 = prisustva.filter(function(a){return a.sedmica===4})[17];

            var peta1 = prisustva.filter(function(a){return a.sedmica===5})[0];
            var peta2 = prisustva.filter(function(a){return a.sedmica===5})[1];
            var peta3 = prisustva.filter(function(a){return a.sedmica===5})[2];
            var peta4 = prisustva.filter(function(a){return a.sedmica===5})[3];

            var peta5 = prisustva.filter(function(a){return a.sedmica===5})[4];
            var peta6 = prisustva.filter(function(a){return a.sedmica===5})[5];

            var peta7 = prisustva.filter(function(a){return a.sedmica===5})[6];
            var peta8 = prisustva.filter(function(a){return a.sedmica===5})[7];
            var peta9 = prisustva.filter(function(a){return a.sedmica===5})[8];

            var peta10 = prisustva.filter(function(a){return a.sedmica===5})[9];
            var peta11 = prisustva.filter(function(a){return a.sedmica===5})[10];

            var peta12 = prisustva.filter(function(a){return a.sedmica===5})[11];
            var peta13 = prisustva.filter(function(a){return a.sedmica===5})[12];
            var peta14 = prisustva.filter(function(a){return a.sedmica===5})[13];

            var peta15 = prisustva.filter(function(a){return a.sedmica===5})[14];
            var peta16 = prisustva.filter(function(a){return a.sedmica===5})[15];
            var peta17 = prisustva.filter(function(a){return a.sedmica===5})[16];
            var peta18 = prisustva.filter(function(a){return a.sedmica===5})[17];

            var sesta1 = prisustva.filter(function(a){return a.sedmica===6})[0];
            var sesta2 = prisustva.filter(function(a){return a.sedmica===6})[1];
            var sesta3 = prisustva.filter(function(a){return a.sedmica===6})[2];
            var sesta4 = prisustva.filter(function(a){return a.sedmica===6})[3];

            var sesta5 = prisustva.filter(function(a){return a.sedmica===6})[4];
            var sesta6 = prisustva.filter(function(a){return a.sedmica===6})[5];

            var sesta7 = prisustva.filter(function(a){return a.sedmica===6})[6];
            var sesta8 = prisustva.filter(function(a){return a.sedmica===6})[7];
            var sesta9 = prisustva.filter(function(a){return a.sedmica===6})[8];

            var sesta10 = prisustva.filter(function(a){return a.sedmica===6})[9];
            var sesta11 = prisustva.filter(function(a){return a.sedmica===6})[10];

            var sesta12 = prisustva.filter(function(a){return a.sedmica===6})[11];
            var sesta13 = prisustva.filter(function(a){return a.sedmica===6})[12];
            var sesta14 = prisustva.filter(function(a){return a.sedmica===6})[13];

            var sesta15 = prisustva.filter(function(a){return a.sedmica===6})[14];
            var sesta16 = prisustva.filter(function(a){return a.sedmica===6})[15];
            
            var sedma1 = prisustva.filter(function(a){return a.sedmica===7})[0];
            var sedma2 = prisustva.filter(function(a){return a.sedmica===7})[1];
            var sedma3 = prisustva.filter(function(a){return a.sedmica===7})[2];
            var sedma4 = prisustva.filter(function(a){return a.sedmica===7})[3];

            var sedma5 = prisustva.filter(function(a){return a.sedmica===7})[4];
            var sedma6 = prisustva.filter(function(a){return a.sedmica===7})[5];

            var sedma7 = prisustva.filter(function(a){return a.sedmica===7})[6];
            var sedma8 = prisustva.filter(function(a){return a.sedmica===7})[7];
            var sedma9 = prisustva.filter(function(a){return a.sedmica===7})[8];

            var sedma10 = prisustva.filter(function(a){return a.sedmica===7})[9];
            var sedma11 = prisustva.filter(function(a){return a.sedmica===7})[10];

            var sedma12 = prisustva.filter(function(a){return a.sedmica===7})[11];
            var sedma13 = prisustva.filter(function(a){return a.sedmica===7})[12];
            var sedma14 = prisustva.filter(function(a){return a.sedmica===7})[13];

            var osma1 = prisustva.filter(function(a){return a.sedmica===8})[0];
            var osma2 = prisustva.filter(function(a){return a.sedmica===8})[1];

            var osma3 = prisustva.filter(function(a){return a.sedmica===8})[2];
            var osma4 = prisustva.filter(function(a){return a.sedmica===8})[3];
            var osma5 = prisustva.filter(function(a){return a.sedmica===8})[4];

            var deveta1 = prisustva.filter(function(a){return a.sedmica===9})[0];
            var deveta2 = prisustva.filter(function(a){return a.sedmica===9})[1];

            var deveta3 = prisustva.filter(function(a){return a.sedmica===9})[2];
            var deveta4 = prisustva.filter(function(a){return a.sedmica===9})[3];
            var deveta5 = prisustva.filter(function(a){return a.sedmica===9})[4];

            var deseta1 = prisustva.filter(function(a){return a.sedmica===10})[0];
            var deseta2 = prisustva.filter(function(a){return a.sedmica===10})[1];
            var deseta3 = prisustva.filter(function(a){return a.sedmica===10})[2];
            studentiListaPromisea.push(
                db.student.create({ime:'Neko Nekic',index:12345}).then(function(k){
                    return k.setPrisustvaStudenta([prva1,druga1,treca1,cetvrta1,peta1,sesta1,prva5,druga5,treca5,cetvrta5,peta5,sesta5,sedma5,prva7,druga7,treca7,cetvrta7,peta7,sesta7,sedma7,prva10,druga10,treca10,cetvrta10,peta10,sesta10,sedma10,osma1,deveta1,prva12,druga12,treca12,cetvrta12,peta12,sesta12,sedma12,osma3,deveta3,deseta1,prva15,druga15,treca15,cetvrta15,peta15,sesta15]);
                })
            );
            studentiListaPromisea.push(
                db.student.create({ime:'Drugi Neko',index:12346}).then(function(k){
                    return k.setPrisustvaStudenta([prva2,prva6,druga2,treca2,cetvrta2,peta2,sesta2,sedma2,prva6,druga6,treca6,cetvrta6,peta6,sesta6,sedma6,prva8,druga8,treca8,cetvrta8,peta8,sesta8,sedma8,prva11,druga11,treca11,cetvrta11,peta11,sesta11,sedma11,osma2,deveta2,prva13,druga13,treca13,cetvrta13,peta13,sesta13,sedma13,osma4,deveta4,deseta2,prva16,druga16,treca16,cetvrta16,peta16]);
                })
            );
            studentiListaPromisea.push(
                db.student.create({ime:'Treci Neko',index:12347}).then(function(k){
                    return k.setPrisustvaStudenta([prva3,druga3,treca3,cetvrta3,peta3,sesta3,sedma3,prva9,druga9,treca9,cetvrta9,peta9,sesta9,sedma9,prva14,druga14,treca14,cetvrta14,peta14,sesta14,sedma14,osma5,deveta5,deseta3,prva17,druga17,treca17,cetvrta17,peta17]);
                })
            );
            studentiListaPromisea.push(
                db.student.create({ime:'Cetvrti Neko',index:12348}).then(function(k){
                    return k.setPrisustvaStudenta([prva4,druga4,treca4,cetvrta4,peta4,sesta4,sedma4,prva18,druga18,treca18,cetvrta18,peta18,sesta16]);
                })
            );
            Promise.all(studentiListaPromisea).then(function(studenti){
                var prvi=studenti.filter(function(a){return a.ime==='Neko Nekic'})[0];
                var drugi=studenti.filter(function(a){return a.ime==='Drugi Neko'})[0];
                var treci=studenti.filter(function(a){return a.ime==='Treci Neko'})[0];
                var cetvrti=studenti.filter(function(a){return a.ime==='Cetvrti Neko'})[0];

                predmetiListaPromisea.push(
                    db.predmet.create({naziv: "Web tehnologije",brojPredavanjaSedmicno:3,brojVjezbiSedmicno:2}).then(function(k){
                        k.setStudenti([prvi,drugi,treci,cetvrti]);
                        k.setPrisustvaPredmeta([prva1,prva2,prva3,prva4,druga1,druga2,druga3,druga4,treca1,cetvrta1,peta1,sesta1,sedma1,treca2,cetvrta2,peta2,sesta2,sedma2,treca3,cetvrta3,peta3,sesta3,sedma3,treca4,cetvrta4,peta4,sesta4,sedma4]);
                        return new Promise(function(resolve,reject){resolve(k);});
                    })
                );
                predmetiListaPromisea.push(
                    db.predmet.create({naziv: "Tehnike programiranja",brojPredavanjaSedmicno:2,brojVjezbiSedmicno:2}).then(function(k){
                        k.setStudenti([prvi,drugi]);
                        k.setPrisustvaPredmeta([prva5,druga5,treca5,cetvrta5,peta5,sesta5,sedma5,prva6,druga6,treca6,cetvrta6,peta6,sesta6,sedma6]);
                        return new Promise(function(resolve,reject){resolve(k);});
                    })
                );
                predmetiListaPromisea.push(
                    db.predmet.create({naziv: "Operativni sistemi",brojPredavanjaSedmicno:2,brojVjezbiSedmicno:3}).then(function(k){
                        k.setStudenti([prvi,drugi,treci]);
                        k.setPrisustvaPredmeta([prva7,druga7,treca7,cetvrta7,peta7,sesta7,sedma7,prva8,druga8,treca8,cetvrta8,peta8,sesta8,sedma8,prva9,druga9,treca9,cetvrta9,peta9,sesta9,sedma9]);
                        return new Promise(function(resolve,reject){resolve(k);});
                    })
                );
                predmetiListaPromisea.push(
                    db.predmet.create({naziv: "Razvoj mobilnih aplikacija",brojPredavanjaSedmicno:2,brojVjezbiSedmicno:2}).then(function(k){
                        k.setStudenti([prvi,drugi]);
                        k.setPrisustvaPredmeta([prva10,druga10,treca10,cetvrta10,peta10,sesta10,sedma10,osma1,deveta1,prva11,druga11,treca11,cetvrta11,peta11,sesta11,sedma11,osma2,deveta2])
                        return new Promise(function(resolve,reject){resolve(k);});
                    })
                );
                predmetiListaPromisea.push(
                    db.predmet.create({naziv: "Ugradbeni sistemi",brojPredavanjaSedmicno:2,brojVjezbiSedmicno:3}).then(function(k){
                        k.setStudenti([prvi,drugi,treci]);
                        k.setPrisustvaPredmeta([prva12,druga12,treca12,cetvrta12,peta12,sesta12,sedma12,osma3,deveta3,deseta1,prva13,druga13,treca13,cetvrta13,peta13,sesta13,sedma13,osma4,deveta4,deseta2,prva14,druga14,treca14,cetvrta14,peta14,sesta14,sedma14,osma5,deveta5,deseta3])
                        return new Promise(function(resolve,reject){resolve(k);});
                    })
                );
                predmetiListaPromisea.push(
                    db.predmet.create({naziv: "Diskretna matematika",brojPredavanjaSedmicno:3,brojVjezbiSedmicno:2}).then(function(k){
                        k.setStudenti([prvi,drugi,treci,cetvrti]);
                        k.setPrisustvaPredmeta([prva15,druga15,treca15,cetvrta15,peta15,sesta15,prva16,druga16,treca16,cetvrta16,peta16,prva17,druga17,treca17,cetvrta17,peta17,prva18,druga18,treca18,cetvrta18,peta18,sesta16])
                        return new Promise(function(resolve,reject){resolve(k);});
                    })
                );
                Promise.all(predmetiListaPromisea).then(function(predmeti){
                    var wt=predmeti.filter(function(k){return k.naziv==='Web tehnologije'})[0];
                    var tp=predmeti.filter(function(k){return k.naziv==='Tehnike programiranja'})[0];
                    var os=predmeti.filter(function(k){return k.naziv==='Operativni sistemi'})[0];
                    var rma=predmeti.filter(function(k){return k.naziv==='Razvoj mobilnih aplikacija'})[0];
                    var us=predmeti.filter(function(k){return k.naziv==='Ugradbeni sistemi'})[0];
                    var dm=predmeti.filter(function(k){return k.naziv==='Diskretna matematika'})[0];
                    nastavniciListaPromisea.push(
                        db.nastavnik.create({username:'user1',password_hash:'$2a$12$.Fav/cO1Dk1wUPIKxUcCg.mrxPXFqbNSXoZe3XtDJfwDmgDeP3/ZW'}).then(function(b){
                            return b.setPredmetiNastavnika([wt,tp,os]).then(function(){
                            return new Promise(function(resolve,reject){resolve(b);});
                            });
                        })
                    );
                    nastavniciListaPromisea.push(
                        db.nastavnik.create({username:'user2',password_hash:'$2a$12$jJCD2QoN.mueESlVNvZUee076.mneU8ebMCEjknP.5zyngnatVZZ2'}).then(function(b){
                            return b.setPredmetiNastavnika([rma,us]).then(function(){
                            return new Promise(function(resolve,reject){resolve(b);});
                            });
                        })
                    );
                    nastavniciListaPromisea.push(
                        db.nastavnik.create({username:'user3',password_hash:'$2a$12$4757WKVmum1Ia8Bv2Rq4L.Mdu6zpBPFK0Bh8gf79rZjBJ6/Zpbe8q'}).then(function(b){
                            return b.setPredmetiNastavnika([dm]).then(function(){
                            return new Promise(function(resolve,reject){resolve(b);});
                            });
                        })
                    );
                    Promise.all(nastavniciListaPromisea).then(function(b){resolve(b);}).catch(function(err){console.log("Nastavnici greska "+err);});
                }).catch(function(err){console.log("Predmeti greska "+err);});
            }).catch(function(err){console.log("Studenti greska "+err);});
        }).catch(function(err){console.log("Prisustva greska "+err);});   
    });
}
