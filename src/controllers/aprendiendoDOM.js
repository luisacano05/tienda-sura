//PASOS PARA CONTROLAR UNA ETIQUETA DESDE JS

//1.CONTROLANDO EL CONTENIDO
let etiquetaTitulo=document.getElementById("titulo")
let etiquetaImagen=document.getElementById("foto")
console.log(etiquetaTitulo)

//1.1 MANIPULANDO EL TEXTO DE LA ETIQUETA (ELEMENTO)
etiquetaTitulo.textContent="jefe como estas"

//1.2 MANIPULANDO EL SRC
etiquetaImagen.src="http://definicionde.hugex.net/wp-content/uploads/2015/07/e1001e86903d5fccba2a7e83a0547bd4.jpg"

//2. CONTROLANDO EL DISEÑO 
let parrafo=document.getElementById("parrafo")
parrafo.textContent="“Qué buen insomnio si me desvelo sobre tu cuerpo”"

//2.1 AGREGANDO UN ESTILO (CLASS)
//text_danger
parrafo.classList.add("text-danger", "fs-1", "text-center")
etiquetaImagen.classList.add("d-block", "mx-auto")

//2.2 QUITANDO UN ESTILO
parrafo.classList.remove("text-danger")