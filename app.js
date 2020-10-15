const obtenerInfoMedicamento = require("./library");


obtenerInfoMedicamento("3138%20ESP").then((info) => {
    console.log("Laboratorio: "+info.labtitular);
    console.log("Medicamento: "+info.nombre);
    console.log("Nro Registro: "+info.nregistro);
    console.log("Principios Activos: "+info.pactivos);
}).catch((err) => {
    console.log(err.message);
});

//ALGUNOS CODIGOS QUE SE PUEDEN PASAR POR PARAMETRO
/*
Agregando %20 en el espacio
    3938 ESP
    3741 ESP
    3544 ESP
    2327 ESP
    3085 ESP
    3827 ESP
*/
