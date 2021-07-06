const { User } = require('../models');
const bcrypt = require('bcrypt');

class Person {
    async allUsers(){
        return User.findAll();
    }

    async searchUserById(id) {
        return User.findByPk(id);
    }

    async searchUserByName(body){
        let name = body.name;
        return User.findOne({where: {name}});
    }

    async searchUserByEmail(body){
        let email = body.email;
        return User.findOne({where: {email}})
    }
    // ESTE EMAIL USER SEARCH ES PARA LOS CHECKS
    async emailUser(email){
        return User.findOne({where: {email}})
    }

    async newUser(body){
        let userExist = await userController.searchUserByEmail(body);
        if (userExist){
            throw new Error("Este email ya está siendo utilizado");
        }
        let password = body.password;
        let passwordHashed = bcrypt.hashSync(password, 10);
        body.password = passwordHashed;
        return User.create(body);
    }

    async modifyUser(body){
        let id = body.id;
        if (body?.password){
            let password = body.password;
            let passwordHashed = bcrypt.hashSync(password, 10);
        }
        
        return User.update(
            {
                name: body.name,
                lastname: body.lastname,
                // password: passwordHashed,
                email: body.email,
                country: body.country,
                city: body.city,
                cp: body.cp   
            },
            {
                where: {id}
            }
        )
    }

    async deleteUser(body){
        let id = body.id;
        return User.destroy({where: {id}})
    }


}

let userController = new Person();

module.exports = userController;
