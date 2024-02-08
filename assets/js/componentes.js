const showToast = (mensaje) => {
    var toastLiveExample = document.getElementById('liveToast');
    var toast = new bootstrap.Toast(toastLiveExample);  
    console.log("showtoast!!!!");
    toast.show();
    $(".toast-body").html(mensaje);
};

const ToastAlert = () => {
    $.get("./app/front/componentes/toastAlert.html", function(data){
        $("#idToastAlert").html(data);
    })
    .catch((error) => {
        console.error("Error al obtener el componente toast", error);
    });
}