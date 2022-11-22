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
      
    router.put('/:id', (req, res, next) => {
        let obj = req.body;
        let id = Number(req.params.id);
        return res.json(productos.update(obj, id));
    });

    // router.put("/:id", (req, res, next)=>{
    //     try {
    //         let id = req.params.id;
    //         let {title, price, thumbnail} = req.body
    //         if(!title || !price || !thumbnail){
    //             res.send("faltan datos")
    //         } else{
    //             let updateProduct ={
    //                 id,
    //                 title,
    //                 price,
    //                 thumbnail
    //             };
    //             productos.update(updateProduct)
    //             res.send(`se actualizo el producto ${updateProduct.title}`)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // });
      
    router.delete('/:id', (req, res, next) => {
        let id = Number(req.params.id);
        return res.json(productos.deleteById(id));
    });
};