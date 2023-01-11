const { Router } = require("express");
const { faker } = require("@faker-js/faker");
faker.locale = "es";

const productosTest = Router();

productosTest.get("/", (req, res) => {
	let productos = [];
	for (let i = 0; i < 6; i++) {
		productos.push(crearProducto(i + 1));
	}

	res.render("index", { productos });
});

function crearProducto(id) {
	return {
		id: id,
		nombre: faker.commerce.product(),
		descripcion: faker.commerce.productDescription(),
		codigo: faker.datatype.number({ min: 1000, max: 9999 }),
		precio: faker.commerce.price(),
		stock: faker.datatype.number({ min: 0, max: 20}),
		foto: faker.image.abstract(),
	};
}
module.exports = productosTest;
