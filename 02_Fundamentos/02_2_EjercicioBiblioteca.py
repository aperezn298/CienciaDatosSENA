lista_libros = []

def libro_existe(titulo):
    for libro in lista_libros:
        if libro["titulo"].lower() == titulo.lower():
            return True
    return False

def validar_datos_libro(titulo, autor, anio, precio):
    try:
        anio = int(anio)
        precio = float(precio)
    except ValueError:
        print("Año y precio deben ser numéricos.")
        return False
    if not titulo or not autor or not anio or not precio:
        print("Todos los campos son obligatorios.")
        return False
    if anio <= 0 or precio <= 0:
        print("Año y precio deben ser mayores a cero.")
        return False
    return True

def registrar_libro():
    titulo = input("Ingrese el título del libro: ").lower().strip()
    if libro_existe(titulo):
        print("El libro ya está registrado.")
        return
    autor = input("Ingrese el autor del libro: ").lower().strip()
    anio = input("Ingrese el año de publicación: ").lower().strip()
    precio = input("Ingrese el precio del libro: ").lower().strip()

    if validar_datos_libro(titulo, autor, anio, precio):
        nuevo_libro = {
            "titulo": titulo,
            "autor": autor,
            "anio": anio,
            "precio": precio
        }
        lista_libros.append(nuevo_libro)
        print("Libro registrado exitosamente.")
    else:
        print("Error al registrar el libro. Intente de nuevo.")

def mostrar_libros():
    if not lista_libros:
        print("No hay libros registrados.")
        return

    for libro in lista_libros:
        print(libro)

def eliminar_libro():
    titulo = input("Ingrese el título del libro a eliminar: ").lower().strip()
    for libro in lista_libros:
        if libro["titulo"] == titulo:
            lista_libros.remove(libro)
            print("Libro eliminado exitosamente.")
            return
    print("El libro no fue encontrado.")

def reporte_libros():
    if not lista_libros:
        print("No hay libros registrados.")
        return

    total_libros = len(lista_libros)
    total_precio = 0
    # for libro in lista_libros:
    #     total_precio += libro["precio"]
    total_precio = sum(float(libro["precio"]) for libro in lista_libros)
    promedio_precio = total_precio / total_libros
    libro_economico = min(lista_libros, key=lambda x: float(x["precio"]))
    libro_costoso = max(lista_libros, key=lambda x: float(x["precio"]))

    print(f"Total de libros: {total_libros}")
    print(f"Precio promedio de libros: {promedio_precio:.2f}")
    print(f"Libro más económico: {libro_economico['titulo']} - {libro_economico['precio']}")
    print(f"Libro más costoso: {libro_costoso['titulo']} - {libro_costoso['precio']}")

def buscar_libro():
    buscar_titulo = input("Ingrese el título del libro a buscar: ").lower().strip()
    if libro_existe(buscar_titulo):
        for libro in lista_libros:
            if libro["titulo"] == buscar_titulo:
                print(libro)
                break
    else:
        print("El libro no fue encontrado.")
        
        
while True:
    print("""
          1. Registrar un libro
          2. Buscar un libro por título
          3. Eliminar un libro por título
          4. Mostrar todos los libros
          5. Reporte de Libros
          6. Salir
          """)
    try:
        opcion = int(input("Seleccione una opción: "))
    except ValueError:
        print("Por favor, ingrese un número válido.")
        continue
    match opcion:
        case 1:
            registrar_libro()
        case 2:
            buscar_libro()
        case 3:
            eliminar_libro()
        case 4:
            mostrar_libros()
        case 5: 
            reporte_libros()
        case 6:
            break
        case _:
            print("Opción no válida, intente de nuevo.")