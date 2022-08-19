console.log("hola estoy detallando la compra")

//llamar ala memoria
let producto=JSON.parse(localStorage.getItem("producto"))
console.log(producto)

let carrito
if(JSON.parse(localStorage.getItem("carrito"))!=null){
    carrito=JSON.parse(localStorage.getItem("carrito"))
    let pildora=document.getElementById("pildora")
    pildora.textContent=carrito.length
}else{
    carrito=[]
}

let carritoMemoria=JSON.parse(localStorage.getItem("carrito"))
console.log(carritoMemoria)

//referenciar la imagen del producto
let foto=document.getElementById("imagenInfo")
foto.src=producto.foto

let nombre=document.getElementById("nombreInfo")
nombre.textContent=producto.nombre

let precio=document.getElementById("precioInfo")
precio.textContent=producto.precio

let descripcion=document.getElementById("descripcionInfo")
descripcion.textContent=producto.descripcion

let pildora=document.getElementById("pildora")
console.log(pildora.textContent)

//escucho el click en el boton añadir al carrito
let botoncarrito=document.getElementById("botonAgregarCarrito")
botoncarrito.addEventListener("click",function(evento){

    let cantidad=document.getElementById("cantidad")
    cantidad=cantidad.value
    console.log("agregaste",cantidad)

    //agregamos la cantidad al objeto producto
    producto.cantidad=cantidad
    console.log(producto)

    //agregamos el producto al carrito de compras
    carrito.push(producto)
    console.log(carrito)

    //agregando el carrito a la memoria
    localStorage.setItem("carrito",JSON.stringify(carrito))

    //pintando la pildora con la cantidad de productos
    let cantidadCarrito=carrito.length
    pildora.textContent=cantidadCarrito
})