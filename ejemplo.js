const URL = "https://restcountries.com/v3.1/all";

//creamos la constante con la ULR, donde están los datos de la API

const contenedor = document.querySelector("#contenedor");

//Nos traemos del HTML contenedor donde vamos a volcar todos los datos

//Esta función arrancará todas las demás
const start = () => {
getPaises()
}

//Hago la llamada a la API de manera asíncrona para que no se bloquee


const getPaises = async () => {
//Me traigo los datos en crudo
    const datosCrudos = await fetch(URL) //El await y fetch Va a esperarse a almacenar TODO hasta seguir la siguiente línea
    //Estoy metiendo todos los datos ilegibles, los datos en crudo.

    //Como son datos ilegibles tengo que traducirlos a json. Json transforma los datos de ilegible a legible.
    const datosJSON = await datosCrudos.json();
    console.log(datosJSON)

    //Aquí recuperaríamos 

    //Creamos la función para mapear. Mapearemos sobre los datos que hemos descargado.
    mapPaises(datosJSON);


}
//Me he traído los datos en crudo de la URL y los he traducido con json para hacerlos legibles

//Solo ejecuto start y esta desencadenará todo lo demás

const mapPaises = (paises) => {
    //Genero una nueva lista de los países originales pero mapeados.
    //Tendrán los campos que yo quiera.
    //Por cada país generará un objeto con las propiedades seleccionadas

    const mappedPaises = paises.map((paises) => {
        return printPaises ({
        
        //Esto es como un bucle. Me está recogiendo lo que le estoy pidiendo
        nombre: paises.name.common,
        nombre2: paises.name.official,
        region: paises.region,
        poblacion: paises.population,
        bandera: paises.flags.png
    })
})
    //Chequeo que me está recuperando los datos. Efectivamente lo está haciendo en consola del navegador.
    console.log(mappedPaises)

    //Le decimos que imprima los países mapeados. Abajo definimos qué va a imprimir
    printPaises(mappedPaises)
}

//Ahora imprimimos los datos que nos hemos traído.
//Generaremos distintas secciones (div) para clasificar la info que nos hemos traído

const printPaises = (paises) => {

    //Pintamos en el contenedor que hemos creado arriba

    //Con el innerHTML introducimos la información que hemos recuperado
    //Lo metemos en el contenedor
    
    contenedor.innerHTML += `
    <h2>Este país se le conoce como ${paises.nombre}</h2>
    <h3>Pero su nombre oficial es ${paises.nombre2}</h3>
    <h4>Está situado en ${paises.region}</h4>
    <h4>Tiene ${paises.poblacion} habitantes</h4>
    <div class="bandera"> <img src="${paises.bandera}" alt "${paises.nombre}"/> </div>    
    `
}





//Cuando ejecute esta función Start desencadenará todas las demás.

