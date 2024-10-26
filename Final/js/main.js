const respuesta = document.querySelector(".data-respuesta");
 //const respuesta = document.getElementById("respuesta");

 //defino variable con el boton
 const btnClick = document.getElementById("btnFind");

 //agrego addlistener para la variable de buton
 btnClick.addEventListener("click", () => {
    //capturo o recojo el valor del input que tiene el id del campo 
    const campo = document.getElementById("campo").value;
    buscarID(campo); //llamo a la funcion buscarID y le envio el parametro el valor a buscar 
 });

function buscarID(campo){
    



fetch("https://jsonplaceholder.typicode.com/todos/" + campo)
 .then((response) => response.json())
 .then((data) => {
    console.log(data)

    //foreach() encarga de contar los elementos del arrayt que esta recorriendo  


     //   def         condicion   incremento 
    //for(var i=0; i<data.length; i++)

    let linea = "";
    linea = `<p><span style="background: yellow;" > Titulo: <strong> ${data.title}</strong></span>
    ID: ${data.id} competed ${data.completed} User ID: ${data.userId} </p><br /> `;
    // data.forEach(element => {

    //     // console.log(element)
    //     //  //varaible acumulativa    
    //     //  linea += `<p><span style="background:yellow;" >Titulo: <strong>${element.title}</strong></span> ID: ${element.id} body: ${element.body} User ID:${element.user}</p> <br />`

    //     //respuesta.innerHTML = JSON.stringify(data);
    //     //console.log(element.body)
    // });


    respuesta.innerHTML = linea;
 
    });
}