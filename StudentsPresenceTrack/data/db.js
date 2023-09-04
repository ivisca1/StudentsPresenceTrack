const Sequelize = require("sequelize");
const sequelize = new Sequelize("wt22","root","password",{host:"127.0.0.1",dialect:"mysql",logging:false});
const db={};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

//import modela
db.nastavnik = require('./nastavnik.js')(sequelize);
db.predmet = require('./predmet.js')(sequelize);
db.student = require('./student.js')(sequelize);
db.prisustvo = require('./prisustvo.js')(sequelize);

//relacije
// Veza 1-n nastavnik moze predavati vise predmeta
db.nastavnik.hasMany(db.predmet,{as:'predmetiNastavnika'});

// Veza 1-n student moze imati vise prisustava
db.student.hasMany(db.prisustvo, {as:'prisustvaStudenta'});

// Veza 1-n predmet moze imati vise prisustava
db.predmet.hasMany(db.prisustvo, {as:'prisustvaPredmeta'});

// Veza n-m student moze imati vise predmeta, a predmet vise studenata
db.studentPredmet=db.predmet.belongsToMany(db.student,{as:'studenti',through:'student_predmet',foreignKey:'predmetId'});
db.student.belongsToMany(db.predmet,{as:'predmeti',through:'student_predmet',foreignKey:'studentId'});

// Veza n-m student moze imati vise prisustava, a jedan oblik prisustva (npr 1. sedmica, 3 predavanja, 2 vjezbe) moze imati vise studenata
//db.prisustvoStudent=db.student.belongsToMany(db.prisustvo,{as:'prisustva',through:'student_prisustvo',foreignKey:'studentId'});
//db.prisustvo.belongsToMany(db.student,{as:'studenti',through:'student_prisustvo',foreignKey:'prisustvoId'});

// Veza n-m predmet moze imati vise prisustava razlicitih studenata, a jedan oblik prisustva (npr 1. sedmica, 3 predavanja, 2 vjezbe) moze imati vise studenata na tom predmetu
//db.predmetPrisustvo=db.prisustvo.belongsToMany(db.predmet,{as:'predmeti',through:'predmet_prisustvo',foreignKey:'prisustvoId'});
//db.predmet.belongsToMany(db.prisustvo,{as:'prisustva',through:'predmet_prisustvo',foreignKey:'predmetId'});

module.exports=db;