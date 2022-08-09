let contenedorproductos=document.getElementById("fila")

//escucho clic en la fila

let informacionProducto={}
contenedorproductos.addEventListener("click",function(evento){
    console.log("estas mercando...")
    if(evento.target.classList.contains("img-fluid")){
        informacionProducto.nombre=(evento.target.parentElement.querySelector("h3").textContent)
        informacionProducto.precio=(evento.target.parentElement.querySelector("h2").textContent)
        informacionProducto.descripcion=(evento.target.parentElement.querySelector("p").textContent)

        //guardando un objeto en memoria

        localStorage.setItem(JSON.stringify("producto",informacionProducto))

        window.location.href="./ampliarInfo.html"


           
        
    }

    
})





 