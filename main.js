let inputField = document.getElementById("nombre");
let nombresArray = [];
let nombre = "";
let borrador = document.getElementById("borrar");
let antiguos = JSON.parse(localStorage.getItem("nombres"));
let insertados = document.getElementById("informaciontabla");

 window.onload = function recolectarinfo() {
   
    console.log("nombres"+nombresArray)
    const eliminar = document.querySelectorAll('.primeros');
    eliminar.forEach(primeros => {
        primeros.remove();
      });

        antiguos.forEach(element => {
            nombresArray.push(element)  
          });

          console.log("nombres2"+nombresArray)
          nombresArray.forEach(e =>{
            let ind = nombresArray.indexOf(e);
            let tr = document.createElement("tr")
            tr.setAttribute("class","primeros")
            let td = document.createElement("td")
            let td2 = document.createElement("td")
            let td3 = document.createElement("td")
            let boton = document.createElement("button")
            let boton2 = document.createElement("button")
            boton.setAttribute("id",ind)
            boton.setAttribute("class","borrador")
            boton.setAttribute("onclick","aborrar(this.id)")
            boton.innerText = "borrar"
            boton2.setAttribute("id",ind)
            boton2.setAttribute("class","editor")
            boton2.setAttribute("onclick","aeditar(this.id)")
            boton2.innerText = "editar"
            td.innerText = e
            tr.appendChild(td)
            tr.appendChild(td2)
            td2.appendChild(boton)
            td2.appendChild(boton2)
            insertados.appendChild(tr)
           });
    
   
}

var form = document.forms['formulario'];
form.onsubmit = function(e){
   
  e.preventDefault();
  nombre = inputField.value;
  nombresArray.push(nombre)
  document.getElementById("nombre").value = "";
  localStorage.setItem("nombres",JSON.stringify(nombresArray))
  creartabla()
}

const creartabla = ()=>{
  
 
        const eliminar1 = document.querySelectorAll('.primeros');
        eliminar1.forEach(primeros => {
            primeros.remove();
          });
       
    
     
          nombresArray.forEach(e =>{
            let ind = nombresArray.indexOf(e);
            let tr = document.createElement("tr")
            tr.setAttribute("class","primeros")
            let td = document.createElement("td")
            let td2 = document.createElement("td")
            let boton = document.createElement("button")
            boton.setAttribute("id",ind)
            boton.setAttribute("class","borrador")
            boton.setAttribute("onclick","aborrar(this.id)")
            boton.innerText = "borrar"
            td.innerText = e
            tr.appendChild(td)
            tr.appendChild(td2)
            td2.appendChild(boton)
            insertados.appendChild(tr)
           });
}

borrar.addEventListener("click",function(){
   
    const eliminar2 = document.querySelectorAll('.primeros');
    nombresArray = [];
    eliminar2.forEach(primeros => {
        primeros.remove();
      });
    localStorage.clear();
     
})

function aborrar(clickID) {
    idelemento = clickID;
    let removed = nombresArray.splice(idelemento,1) 
    creartabla()
}

function aeditar(clickID) {
    idelemento = clickID;
   
    var resp = window.prompt("nuevo nombre")
     nombresArray[idelemento] = resp
    creartabla()
}

