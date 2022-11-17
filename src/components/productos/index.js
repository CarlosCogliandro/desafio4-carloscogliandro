let express = require('express')
let { Router } = require('express');
let router = new Router();

// let addInfo = (req, res, next)=>{
//     req.body.Autoria = 'Carlos Cogliandro';
//     next();  
// }

const Contenedor = require('../../contenedor/contenedor.js');
const productos = new Contenedor( __dirname + '../../../data/productos.json');


module.exports = app => {

    let nuevoProducto = [];

    app.use('/api/productos', router);

    // router.use((req, res, next)=>{
    //     req.body.router = true;
    //     next();
    // });

    router.get('/', async (req, res, next)=>{
        return res.json(await productos.getAll());
    });

    router.get('/:id', (req, res, next) => {
        let id = Number(req.params.id);
        return res.json(productos.getById(id));
    });
      
    router.post('/', /*addInfo,*/ (req, res, next) => {
        let obj = req.body;
        nuevoProducto.push(obj)        
        return res.json(productos.save(obj));
    });
      
    router.put('/:id', async (req, res, next) => {
        let obj = req.body;
        let id = Number(req.params.id);
        return res.json(productos.save(obj, id));
    });
      
    router.delete('/:id', (req, res, next) => {
        let id = Number(req.params.id);
        return res.json(productos.deleteById(id));
    });
};