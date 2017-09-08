var db = require('../db_config.js');

//list all data
exports.list = function(callback){
    
    db.User.find({},function(error,users) {
        
        if(error) {
            callback({error: 'Erro ao buscar usuários'});
        }else {
            callback(users);
        }
    });
};

//list a user for id
exports.user = function(id,callback){
    
    db.User.findById(id,function(error,user) {
        
        if(error) {
            callback({error: 'Erro ao buscar o usuario'});
        }else {
            callback(user);
        }
    });
};

//save user 
exports.save = function(fullname,email,password,callback){
    
     new db.User({
        'fullname':fullname,
        'email': email,
        'password': password ,
        'created_at': new Date()
    }).save(function(error,user){
        if(error){

            callback({error:'Não foi possivel salvar o json'});
        } else {

            callback(user);
        }
    });
};

//update user
exports.update = function(fullname,email,password,id,callback){
    
     db.User.findById(id, function(error,user){
        if(fullname){
            user.fullname= fullname
        }
        if(email){
            user.email= email
        }
        if(password){
            user.password= password
        }

        user.save(function(error,user){

            if(error){
                callback({error:'Não foi possivel atualizar o Usuario'})
            }else{
                callback(user);
            }
        })
     });
};

//delete user 
exports.delete = function(id,callback){
    
    db.User.findById(id,function(error,user) {
        
        if(error) {
            callback({error: 'Erro ao retornar  o usuario'});
        }else {
            //res.json(user);
            user.remove(function(error){
                
                if(!error){
                    callback({response: 'Usuario excluido com sucesso!'});
                }
            })
        }
    });
};

