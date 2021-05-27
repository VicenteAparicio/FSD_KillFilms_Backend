const jwt = require('jsonwebtoken');
const secret = "Wayco tiene futbolin";

const authenticate = (req, res, next) => {

    try {
        if(!req.headers.authorization){
            // return new Error("No tienes autorización");
            return "no tenías token";
        }

        let token = req.headers.authorization.split(' ')[1];
        let auth = jwt.verify(token,secret);

        console.log("Este es el req.params.id: "+req.params.id);
        console.log("Este es el auth.userId: "+auth.userId);
        
        if(auth.userId != req.body.id && auth.userId != req.body.userId){
            throw new Error("No tienes permiso para realizar esta acción");
        }

        return next();

    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
}


module.exports = authenticate;
