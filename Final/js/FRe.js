function capturarDatos() {

    //Capturar los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const cedula = document.getElementById('cedula').value;
    const edad = document.getElementById('edad').value;
    const selectElement = document.querySelector('select');
    const selectedValue = selectElement.value;
    console.log("valor seleccionado: " + selectedValue);


    
    //Crear un bloque de informacion para mostrar
    const informacion = `
    <p><strong> Nombre:</strong> ${nombre}<hr> /</p>
    <p><strong> Apellido:</strong> ${apellido}<hr> /</p>
    <p><strong> Email:</strong> ${email}<hr> /</p>
    <p><strong> Cedula:</strong> ${cedula}<hr> /</p>
    <p><strong> Edad:</strong> ${edad}<hr> /</p>
    <p><strong> Genero:</strong> ${genero}<hr> /</p>
    `
    

    // Insertar la informacion de la div con id "output"
    document.getElementById('output').innerHTML = informacion;

    // Limpiar los campos del formulario
    document.getElementById('miFormulario').reset();

}


/*const button = document.querySelector("button");
const action = () => alert("Hello!");
const toggle = () => button.classList.toggle("red");

button.addEventListener("click", action); // Hello message
button.addEventListener("click", toggle); // Add/remove red CSS
*/
/*
const button = document.querySelector("button");
button.addEventListener("click", function() {

alert("Hello!");
});
*/
/*
const imgs = document.querySelector("img");
function action() {
alert("Hello a todos");
};

imgs.addEventListener("click",action);
*/

/*
function doTask() {
alert("Hello!");
}
*/
