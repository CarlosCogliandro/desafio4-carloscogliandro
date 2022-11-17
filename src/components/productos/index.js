let express = require('express')
let { Router } = require('express');

let router = new Router();

const Contenedor = require('../../contenedor/contenedor.js');
const productos = new Contenedor(__dirname + '../../../data/productos.json');


module.exports = app => {

    let nuevoProducto = [];

    app.use(express.static("public"));
    app.use('/api/productos', router);

    router.get('/', async (req, res, next)=>{
        return res.json(await productos.getAll());
    });

    router.get('/:id', (req, res) => {
        let id = Number(req.params.id);
        return res.json(productos.getById(id));
      });
      
    router.post('/', (req, res) => {
        let obj = req.body;
        nuevoProducto.push(obj)        
        return res.json({productos: nuevoProducto});
    });
      
    router.put('/:id', (req, res) => {
        let obj = req.body;
        let id = Number(req.params.id);
        return res.json(productos.update(id, obj));
    });
      
    router.delete('/:id', (req, res) => {
        let id = Number(req.params.id);
        return res.json(productos.deleteById(id));
    });
};