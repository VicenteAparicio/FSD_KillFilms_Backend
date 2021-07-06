const express = require('express');
const app = express();
const db = require('./db.js');
const router = require('./router');
const port = process.env.PORT || 3005;
const cors = require('cors')

// Middleware
app.use(cors());
app.use(express.json());
app.use(router);


//Connecting to the database
db.then(()=>{
//Starting server
    app.listen(port, ()=> console.log(`Servidor levantado en http://localhost:${port}`));
})
.catch((err)=> console.log(err.message));
