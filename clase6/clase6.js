const fs = require("fs");
const express = require('express')


const app = express()

class Container {
	constructor(fileName) {
		this.fileName = fileName;
		this.products = [];
	}

	async read() {
		try {
			let exist = await fs.promises.readFile(this.fileName, "utf-8");
			return exist;
		} catch (err) {
			console.log(err);
		}
	}

	getId() {
		const length = this.products.length;

		if (length === 0) {
			return 0;
		} else {
			return this.products.length;
		}
	}

	async save(prod) {
		const id = this.getId();

		this.products.push({
			...prod,
			...{ id: id + 1 },
		});

		try {
			await fs.promises.writeFile(
				this.fileName,
				JSON.stringify(this.products, null, 2)
			);
		} catch (err) {
			console.log(err);
		}
	}

	async getById(id) {
		const idFounded = await this.products.find(element => element.id === id);
		try {
			return("se encontrĂ³" + idFounded);
		} catch (err) {
			console.log("null" + err);
		}
	}

	async getAll() {
        try {
            const prods = await this.read() 
            return( prods); 
        } catch (err) {
            console.log(err);
        }
    }
	// async getAll() {
	// 	await this.products;
	// 	try {
	// 		console.log(this.products + "Funciona getAll()");
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// }

	async readingFile() {
		const read = await fs.promises.readFile(this.fileName, "utf-8");
		try {
			const original = JSON.parse(read);
			return original;
		} catch (err) {
			console.log(err);
		}
	}

	async deleteById(id) {
		let fileToRead = await this.readingFile();
		let newFile = fileToRead.filter(ele => ele.id !== id);
		await fs.promises.writeFile(
			this.fileName,
			JSON.stringify(newFile, null, 2)
		);
		try {
			console.log(`Se borro el producto con id = ${id}  `);
		} catch (err) {
			console.log(err);
		}
	}

	async deleteAll() {
		await fs.promises.unlink("./products.txt");
		try {
			console.log("se eliminaron todos los productos");
		} catch (err) {
			console.log(err);
		}
	}
}

const productList = new Container("./products.txt");

productList.save({ title: "gorro", price: 5000, img: "./gorro.webp" });
productList.save({ title: "buzo", price: 15500, img: "./buzo.webp" });
productList.save({ title: "parka", price: 36000, img: "./parka.webp" });
productList.save({ title: "borcego", price: 40000, img: "./borcego.webp" });

app.get('/', (req,res) =>{
    res.send('Funciona!!!! ')
})

app.get('/productos', async (req , res) => {
    const listOfProd = await productList.getAll()
    try{
        res.send(listOfProd) 
    }
    catch{
        res.send("ERROR")
    }
})

app.get("/productoRandom", async (req, res) => {
    const dice = parseInt((Math.random() * 4) + 1)
    const randomList = await productList.getById(dice)
    try {
        res.send(randomList)
    }
    catch {
        res.send("Error en buscar productos")
    }
})


const server = app.listen(8080, () =>{
    console.log('Funciona el servidor')
})

server.on("err" , error =>console.log(error))