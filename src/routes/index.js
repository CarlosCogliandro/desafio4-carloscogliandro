
let productosApi = require('../components/productos');



module.exports = app => {
    
    productosApi(app);

    app.get('/', (req, res, next)=>{
        res.send(`<h1 style='color:blue; text-align:center; margin:50px; font-size:50px'>HOLA, ESTAMOS EN PRINCIPAL</h1>
                <h2 style='text-align:center'><a href='http://localhost:8080/api/productos'>productos</a></h2>
                <br>
                <h2 style='text-align:center'><a href='http://localhost:8080/personas'>PERSONAS</a></h2>
                `);
    });
};



