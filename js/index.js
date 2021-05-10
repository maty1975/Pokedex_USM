
tinymce.init({
    selector: '#description-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
  const pokemones =[];

  const cargartabla = ()=>{
    //1.obtener una referencia  la tabla
    let tbody = document.querySelector("#tabla-tbody");
    //eliminar todo los elemenos que tiene el tbody
    tbody.innerHTML ="";
    //2.recorrer la lista de pokemones
    for(let i=0; i < pokemones.length; ++i){
      //3.por cada fila generar una fila (tr)
      let p=pokemones[i];
      let tr=document.createElement("tr");
      //4.por cada atributo (nombre,tipo,descripcion,and so on), voy a generar celdas (td)
      let tdNro = document.createElement("td");
      tdNro.innerText = (i+1);
      let tdNombre = document.createElement("td");
      tdNombre.innerText = p.nombre;
      let tdTipo = document.createElement("td");
      
      let icono = document.createElement("i");
      if(p.tipo == "fuego"){
        //<i class="fas fa-fire"></i>
        //agregar clases a un elemento
        icono.classList.add("fas","fa-fire","text-danger","fa-3x");
      }else if(p.tipo == "planta"){
        //<i class="fas fa-leaf"></i>
        icono.classList.add("fas","fa-leaf","text-success","fa-3x");
      }else if(p.tipo == "electrico"){
        //<i class="fas fa-bolt"></i>
        icono.classList.add("fas","fa-bolt","text-warning","fa-3x");
      }else if(p.tipo == "agua"){
       //<i class="fas fa-tint"></i>
        icono.classList.add("fas","fa-tint","text-primary","fa-3x");
      }else{
        //<i class="fas fa-star"></i>
        icono.classList.add("fas", "fa-star","text-info","fa-3x");
      }
      tdTipo.appendChild(icono);
      let tdDesc = document.createElement("td");
      tdDesc.innerHTML = p.description;
      let tdAcciones = document.createElement("td");

      //5.agregar las celdas al tr
      tr.appendChild(tdNro);
      tr.appendChild(tdNombre);
      tr.appendChild(tdTipo);
      tr.appendChild(tdDesc);
      tr.appendChild(tdAcciones);
      //6.agregar el tr a la tabla
      tbody.appendChild(tr);
    }
  }

document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    //value es para obtener el valor de los input de texto
    let nombre = document.querySelector("#nombre-txt").value;
    //esto lo saque de la pagina de tinymce, es para obtener lo escrito
    let description = tinymce.get("description-txt").getContent();
    //checked indica si el radiobutton esta seleccionado
    let legendario = document.querySelector("#legendario-si").checked;
    //el tipo se obtiene igual que los input
    let tipo = document.querySelector("#tipo-select").value;
    

    
    //como crear un objeto
    let pokemon={};
    //propiedades del objeto
    pokemon.nombre = nombre;
    pokemon.description = description;
    pokemon.legendario = legendario;
    pokemon.tipo = tipo;
    console.log(pokemon);
    //como guardar en una lista de elementos
    pokemones.push(pokemon); //append
    cargartabla();
    //         titulo -        texto       - icono mostrado(success, info, danger, warning)
    swal.fire("exito","pokemon registrado", "success");
});
