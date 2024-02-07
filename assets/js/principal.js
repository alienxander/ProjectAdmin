$(document).ready(function (){
    const urlListaProyectos = "./app/front/listaProyectos.html";
    /**** FUNCIONES ****/
    const cargaContenido = (pathArchivoHtml) => {
        $.get(pathArchivoHtml, function(data){
            $("#idDivContenido").html(data);
        })
        .catch((error) => {
            console.error("Error al obtener la págna", error);
        });
    };

    /**** FUNCIONES ****/
    cargaContenido(urlListaProyectos);
    //cargaContenido("https://pokeapi.co/api/v2/pokemon/ditto");
    // let miObj = [{
    //     "id": 1,
    //     "name": "Prueba nombre 1",
    //     "price": "$ 1000",
    //     "listaProductos": [
    //         {
    //             "id": 1,
    //             "descripcion": "lalalal lelel"
    //         },
    //         {
    //             "id": 1,
    //             "descripcion": "lalalal"
    //         },
    //         {
    //             "id": 1,
    //             "descripcion": "lalalal"
    //         }
    //     ]
    // }]

    // console.log("Mi obj: " + miObj[0].listaProductos[0].descripcion);

    
    
    /**** EVENTOS ****/
    $("#idMenuHome").click(function (){
        cargaContenido(urlListaProyectos);
    });

    $("#idMenu1").click(function (){
        cargaContenido("./app/front/menu1/menu1.html");
    });

    $("#idMenu2").click(function (){
        cargaContenido("./app/front/menu2/menu2.html");
    });

    $("#idMenuManUsuario").click(function (){
        cargaContenido("./app/front/usuarios/manUsuario.html");
    });

    

    $("#liveToastBtn").click(function () {
        showToast("Este es un mensaje de prueba!");
    });
    /**** EVENTOS ****/
});