const mysql = require ('mysql')

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'pruebatecnica',
    user: 'root',
    password:'',
});
conexion.connect(function(error){
    if (error){
        throw error;
    }else{
        console.log('CONEXION EXITOSA')
    }

});

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());



app.post("/usuario/login", (req, res)=>{
    try {
        
    } catch (error) {
        
    }
    const consulta = 'SELECT * FROM login WHERE usuario = ' + '"' + req.body.usuario + '"'
    console.log(consulta)
    conexion.query ( consulta, function (error,user){
        
        console.log(user[0]);
        if(user[0].contrasena == req.body.clave){
            res.status(200).json({
                msg: 'Inicio de sesion exitoso',
                data: user,
                error: false
            })
        }else{
            
            res.status(200).json({
                msg: 'usuario o contraseña erroneo',
                error: true
            })
        }
        
    
    
    }) ;

    
});




app.listen(3001, ()=>{
    console.log("Servidor iniciado en el puerto 3001");
});