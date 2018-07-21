var orm = require('../config/orm');

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cd(res);
        });
    },
    create: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cd(res);
        });
    }
};
module.exports = burger;