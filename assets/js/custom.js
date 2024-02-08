const obtenerJson = (pathArchivoJson) => {
    return new Promise((resolve) => {
        $.get(pathArchivoJson, function(data){
            console.log("get jsonooooo", data);
            resolve(data);
        })
        .catch((error) => {
            console.error("Error al obtener el archivo json", error);
        });
    });
};