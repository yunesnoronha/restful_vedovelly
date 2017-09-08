//banco de dados
var db_string = 'mongodb://127.0.0.1:27017/screencast_restful';

var mongoose =  require('mongoose').connect(db_string);

var db = mongoose.connection;


db.on('error',console.error.bind(console,'Erro ao conectar na base de dados mongodb'));

db.once('open',function(){
    var userSchema = mongoose.Schema({
        fullname: String,
        email: String,
        password: String,
        created_at: String
    });
    exports.User = mongoose.model('User',userSchema);
});
