
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
let serverRoutes = require('./src/routes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

serverRoutes(app);

const connectedServer = app.listen(PORT, ()=> console.log(`Server ON By Carlos Cogliandro------> http://localhost:${PORT}`));

connectedServer.on('Error al conectar ----->', (error) => {console.log(error)}) 













































// const productos = [];

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

// const routerProductos = new Router();


// ///// get

// routerProductos.get("/", (req, res) => {
// 	res.send(productos);
// });

// routerProductos.get("/:id", (req, res) => {
// 	const { id } = req.params;
// 	const prodEncontrado = productos.find((ele) => ele.id == id);
// 	if (!prodEncontrado) {
// 		res.json(`Producto ${id} no encontrado`);
// 	} else {
// 		res.json({ "producto encontrado": prodEncontrado });
// 	}
// });

// ///// post

// routerProductos.post("/", (req, res) => {
// 	const lengthProductos = productos.length;
// 	const nuevoId = lengthProductos + 1;
// 	productos.push({
// 		...req.body,
// 		...{ id: nuevoId },
// 	});
// 	res.json({ "nuevo id": nuevoId });
// });

// ///// put

// routerProductos.put("/:id", (req, res) => {
// 	const { id } = req.params;
// 	const prodNuevo = req.body;
// 	const prodEncontrado = productos.find((ele) => ele.id == id);
// 	if (!prodEncontrado) {
// 		res.json(`Producto ${id} no encontrado`);
// 	} else {
// 		const prodEliminado = productos.splice(parseInt(id - 1), 1);
// 		productos.push({
// 			...req.body,
// 			...{ id: id },
// 		});
// 		res.json({ anterior: prodEncontrado, nuevo: prodNuevo });
// 	}
// });

// ///// delete

// routerProductos.delete("/:id", (req, res) => {
// 	const { id } = req.params;
// 	const prodEncontrado = productos.find((ele) => ele.id === id);
// 	if (!prodEncontrado) {
// 		res.json(`Producto ${id} no encontrado`);
// 	} else {
// 		const prodEliminado = productos.splice(parseInt(id - 1), 1);
// 		res.json({ "producto eliminado": prodEliminado });
// 	}
// });

// app.use("/api/productos/", routerProductos);



// const connectedServer = app.listen(PORT, ()=> console.log(`Server ON By Carlos Cogliandro------> http://localhost:${PORT}`));

// connectedServer.on('Error ----->', (error) => {console.log(error)}) 