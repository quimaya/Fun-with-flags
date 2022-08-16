//Sacar Population, Name y Flags png (Bandera)

//Guardamos la URL donde tenemos los países.

const URL = "https://restcountries.com/v3.1/all";

//Creamos el contenedor vacío para meter los datos que queremos obtener de los países

let listadoPaises = [];

//Vamos a sincronizar con la api. 
//Le estamos diciendo que cuando inicie la API se cargue

window.onload = () => {
    init();
};

//Definimos INIT y la creamos asíncrona

//! ¿Por qué la creamos asíncrona? Sólo tenemos una URL y un contenedor acumulador, 
// ¿para qué necesitamos asincronía en este punto?

const init = async () => {
    const paises = await getPaises(); 
}