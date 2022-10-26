class Usuario {
	constructor(nombre, apellido, libros, mascotas) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.libros = libros;
		this.mascotas = mascotas;
	}
	getFullName() {
		console.log(`El nombre completo es: ${this.nombre} ${this.apellido}`);
	}
	addMascotas(nombreMascota) {
		this.mascotas.push(nombreMascota);
	}
	countMascotas() {
		`Posee ${this.mascotas.length} mascotas`;
	}
	addBook(libro) {
		this.libros.push(libro);
	}
	getBooksNames() {
		const librosUsuario = this.libros.map((e) => e.nombreLibro);
		console.log(librosUsuario);
	}
}

const usuario = new Usuario(
	"Agustin",
	"Paparo",
	[
		{ nombreLibro: "Harry Potter La camara secreta", autorLibro: "J.K.Rowling" },
		{ nombreLibro: "Harry Potter La piedra filosofal", autorLibro: "J.K.Rowling" },
		{ nombreLibro: "Harry Potter el caliz de fuego", autorLibro: "J.K.Rowling" },
	],
	["gato","jirafa" , "elefante"]
);

console.log(usuario);
usuario.getFullName();

usuario.addMascotas("perro");
console.log(usuario);

usuario.countMascotas();

usuario.addBook({ nombreLibro: "El Juego manda", autorLibro: "Agustin Pichot" });
console.log(usuario);

usuario.getBooksNames();
