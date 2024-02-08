$(document).ready(function () {
    let listaProyectos = [];
    async function obtenerListaproyectos() {
        return await obtenerJson("./app/repository/data1.json");
    }

    const initTable = () => {
        $('#idDTListaProyectos').bootstrapTable({
            columns: [{
                field: 'state',
                checkbox: true
            }, {
                field: 'id',
                title: 'Item ID'
            }, {
                field: 'name',
                title: 'Item Name'
            }, {
                field: 'price',
                title: 'Item Price'
            }],
            data: listaProyectos,
            pagination: true,
            pageSize: 5,
            pageList: [5, 10],
            search: true,
            showSearchButton: true,
            singleSelect: true,
            clickToSelect: true
        })
    }

    // obtenerListaproyectos().then((result) => {
    //     console.log("Resultadoooo:: ", result);
    //     listaProyectos = result;
    //     initTable();
    // });

    initTable();

    $("#liveToastBtn").click(function () {
        showToast("Este es un mensaje de prueba!");
    });

});