const showToast = (mensaje) => {
    var toastLiveExample = document.getElementById('liveToast');
    var toast = new bootstrap.Toast(toastLiveExample);  
    toast.show();
    $(".toast-body").html(mensaje);
};