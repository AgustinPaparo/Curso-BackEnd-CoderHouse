class Usuario:
    def __init__(nombre, apellido, libros, mascotas)
        nombre = nombre
        apellido = apellido
        libros = libros
        mascotas = mascotas


    def getFullName(nombre, apellido):
        print("El nombre completo es: " + nombre + apellido)

    def addMascotas(mascotas, nombreMascota):
        mascotas.append(nombreMascota)

    def countMascotas(mascotas):
        print("Posee: " + len(mascotas) + "mascotas")
    
    def addBook(libros, nombreLibro, autorLibro):
        libros.append(nombreLibro, autorLibro)

    def getBooksNames(libros):
        for x in libros:
            print(x)
    


usuario = Usuario(
    "Agustin",
    "Paparo",
    [
		{ nombreLibro: "Harry Potter La camara secreta", autorLibro: "J.K.Rowling" },
		{ nombreLibro: "Harry Potter La piedra filosofal", autorLibro: "J.K.Rowling" },
		{ nombreLibro: "Harry Potter el caliz de fuego", autorLibro: "J.K.Rowling" },
	],
	["gato","jirafa" , "elefante"]
)

print(usuario)
usuario.getFullName()

usuario.addMascotas("perro")
print(usuario)

usuario.countMascotas()

usuario.addBook({ nombreLibro: "El Juego manda", autorLibro: "Agustin Pichot" })
print(usuario)

usuario.getBooksNames()