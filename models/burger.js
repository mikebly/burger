const orm = require('../config/orm');

const burger = {
    selectBurgers: async function(){
        return await orm.selectAll('burgers');
        
    },
    insertBurger: async function(newBurger){
        return await orm.insertOne('burgers','burger','eaten',newBurger,false);
    },
    updateBurger: async function(id){
        return await orm.updateOne('burgers','eaten',true,'id',id);
    },
    deleteBurger: async function(id){
        return await orm.deleteOne('burgers','id',id);
    }
};

module.exports = burger;