//Creo la constante con la URL, donde están los datos de la API

const URL = "https://restcountries.com/v3.1/all";


//Creo la constante del contenedor, trayéndolo del HTML.

const contenedor = document.querySelector("#contenedor");

//En este contenedor volcaré todos los datos


//Recupero los datos de la URL y los hago legibles con JSON.
//Creo función de recuperación de datos

const start = () => {
    recuperarDatos()
}


//Le digo a la función lo que tiene que hacer

const recuperarDatos = async () => {

    const datosCrudos = await fetch(URL) 

    const datosJSON = await datosCrudos.json();
    
    console.log(datosJSON)

    mapPaises(datosJSON);

};



//Ahora voy a por los datos que me interesan: MAPEAR los datos

//Creo la función de mapear sobre los datos que ya tengo


//Le digo los datos que quiero mapear

 const mapPaises = (paises) => {

    const mappedPaises = paises.map((paises) => {
        return printPaises ({

        nombre: paises.name.common,
        nombre2: paises.name.official,
        region: paises.region,
        poblacion: paises.population,
        bandera: paises.flags.png
    })
    })
    
    console.log(mappedPaises)

    printPaises(mappedPaises)
} 

const printPaises = (paises) => {

    contenedor.innerHTML += `
    <div class= "container1">
    <h2>Este país se le conoce como ${paises.nombre}</h2>
    <h3>Pero su nombre oficial es <span>"${paises.nombre2}"</span></h3>
    <h4>Está situado en la zona llamada <span>${paises.region}</span></h4>
    <h4>Tiene ${paises.poblacion} habitantes</h4>
    <p> Su bandera es la siguiente:</p>
    <div class="bandera"> <img src="${paises.bandera}" alt "${paises.nombre}"/> </div>    
    </div>
    `
}

start ();

