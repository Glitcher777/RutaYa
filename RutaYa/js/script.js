console.log("SITSC iniciado");

function iniciarSesion() {

    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;

    if(correo === "" || password === ""){
        alert("Debe completar todos los campos");
        return;
    }

    if(correo === "admin@rutaya.com" && password === "12345678"){
        window.location.href = "dashboard.html";
    }
    else{
        alert("Correo o contraseña incorrectos");
    }

}