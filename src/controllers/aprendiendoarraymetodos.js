let productos=[

    {
        nombre:"happy booster",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/01.jpg?alt=media&token=e2c71967-cb1b-4dcd-885d-6b80d8756f94","https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/02.jpg?alt=media&token=0cf9f553-6a5b-44e6-add6-3729adc9f477"],
        precio:8000,
        popularidad:10,
        descripcion:"rubor rosado"

    },
    {
        nombre:"brochas",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/ft1.jpg?alt=media&token=a52279d9-c4ef-4821-80dd-de4bd7975e62","https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/ft2.jpg?alt=media&token=44bb2c2f-8237-4233-b147-abcb35ea8cf3"],
        precio:20000,
        popularidad:10,
        descripcion:"brochas mixtas" 
    },

    {
        nombre:"physicians",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/gg1.jpg?alt=media&token=643d0d8f-3cc5-4e7a-918f-61ae161e0236","https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/gg2.jpg?alt=media&token=153cf221-dabd-4ff4-827a-fac9bde2e972"],
        precio:15000,
        popularidad:9,
        descripcion:"polvo bronce" 
    },

    {
        nombre:"sombras",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/imagen1.jpg?alt=media&token=5541daed-64aa-4d95-a1cc-cbdae840543a","https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/imagen2.jpg?alt=media&token=816b5b2f-81c4-4bee-b373-17734c48f5b2"],
        precio:150000,
        popularidad:10,
        descripcion:"paletas de sombras de diferentes colores"  
    },

    {
        nombre:"polvos girl",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/kk1.jpg?alt=media&token=c1b69fbb-4414-4f13-84b9-266440119a2c","https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/kk2.jpg?alt=media&token=832089b4-a948-493c-837e-128315be065e"],
        precio:25000,
        popularidad:8,
        descripcion:"polvos para todo tipo de piel" 
    },

    {
        nombre:"sponge",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/mm1.jpg?alt=media&token=cfddefdf-0401-4ced-88f2-139c44a3d00d","https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/mm2.jpg?alt=media&token=cabb6823-9b25-4a08-a3b1-eb1634243a77"],
        precio:6000,
        popularidad:10,
        descripcion:"esponja para echar la base" 
    },

    {
        nombre:"nude eyes",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/nn1.jpg?alt=media&token=7ef401bb-ec61-4fbe-b655-8fc24c8ab903","https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/nn2.jpg?alt=media&token=00c132b1-dd71-41ac-9efe-61da9b165653"],
        precio:30000,
        popularidad:10,
        descripcion:"lapiz para ojos" 
    },

    {
        nombre:"last it setting spray",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/ss1.jpg?alt=media&token=8f99966c-ef53-4150-9451-2e705e0df5d2","https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/ss2.jpg?alt=media&token=c9cc2b5b-7511-41f4-bd1e-d2abcf68b3e7"],
        precio:22000,
        popularidad:10,
        descripcion:"para mas duracion el maquillaje" 
    },

    {
        nombre:"diamond lip plumper",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/vv1.jpg?alt=media&token=ded6dbc8-cd25-48f2-9d58-01b1e637c461","https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/vv2.jpg?alt=media&token=39ea6982-5577-45bf-a0fb-643e1d51dd60"],
        precio:12000,
        popularidad:10,
        descripcion:"hidratacion" 
    },

    {
        nombre:"the perfect matcha",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/yy1.jpg?alt=media&token=0855b870-b636-47d1-adeb-cc8df1310cc1","https://firebasestorage.googleapis.com/v0/b/tiendasuralhd.appspot.com/o/yy2.jpg?alt=media&token=ae68a4ee-d3e9-4b17-ae8b-565ab16d430b"],
        precio:21000,
        popularidad:10,
        descripcion:"para las manchas"  
    }
]


let fila=document.getElementById("fila")

//RECORRIENDO EL ARREGLO
productos.forEach(function(producto){

    //Creando un div en js
    let columna=document.createElement("div")
    columna.classList.add("col")

    //creando una tarjeta
    let tarjeta=document.createElement("dic")
    tarjeta.classList.add("card","shandow","text-center","h-100","p-5")

    //creando una IMAGEN
    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid","w-100")
    imagen.src=producto.fotos[0]

    //DETECTANDO EVENTO DE MOUSE
    imagen.addEventListener("mouseover",function(){
        imagen.src=producto.fotos[1]
    })

    imagen.addEventListener("mouseleave",function(){
        imagen.src=producto.fotos[0]
    })

    //crear el nombre
    let nombre=document.createElement("h3")
    nombre.classList.add("fw-bold")
    nombre.textContent=producto.nombre

    //crear el precio
    let precio=document.createElement("h2")
    precio.textContent="$"+producto.precio

    //creando la descripcion
    let descripcion=document.createElement("p")
    descripcion.classList.add("text-danger")
    descripcion.textContent=producto.descripcion

    //definiendo padres e hijos
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(descripcion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)


})