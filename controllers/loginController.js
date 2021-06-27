const userController = require('./userController');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "Wayco tiene futbolin";

class LoginController {
    async validate(emailCheck,passwordCheck){

        let user = await userController.emailUser(emailCheck);

        if (!user){
            throw new Error("Wrong user")
        }
        let password = user.password;

        let verificar = await bcrypt.compare(passwordCheck,password);
        

        if(!verificar){
            throw new Error("El password no coincide");
        }

        let payload = {
            userId : user.id,
            createdAt: new Date,
            isAdmin : user.isAdmin
        };
        return jwt.sign(payload,secret); // SE CREA EL TOKEN
        
    }
}

let loginController = new LoginController();
module.exports = loginController;
