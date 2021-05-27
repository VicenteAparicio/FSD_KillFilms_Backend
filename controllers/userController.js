
const { User } = require('../models');
const bcrypt = require('bcrypt');

class Person {
    async allUsers(){
        return User.findAll();
    }

    async searchUserById(id) {
        return User.findByPk(id);
    }

    async newUser(body){

        let password = body.password;
        let passwordHashed = bcrypt.hashSync(password, 10);

        body.password = passwordHashed;

        return User.create(body);
    }

    async deleteUser(id){

        return User.destroy({where: {id: id}})
    }

    async emailUser(email){
        return User.findOne({
            where: {email}
        })
    }
}

let userController = new Person();

module.exports = userController;
