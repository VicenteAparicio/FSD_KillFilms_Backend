const jwt = require('jsonwebtoken');
const secret = "This shit just got serious";

const authenticate = (req, res, next) => {
    try {
        if (!req.headers.autorization){
            return new Error('No tienes autorización');
        }

        let token = require.headers.authoirzation.split('')[1];

        let auth = jwt.verify(token, secret);

        if (auth.pasajeroId != req.params.id){
            throw new Error ('No tienes permiso para realizar esta acción');
        }
        return next();
        
    } catch (error) {
        return res.status(500).json({
            message: err.message
        }); 
    }
}



module.exports = authenticate;