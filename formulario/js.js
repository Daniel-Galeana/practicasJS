document.getElementById('correo').addEventListener('input', function() {
    campo = event.target;
    valido = document.getElementById('emailOK');
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(campo.value)) {
      valido.innerText = "válido";
    } else {
      valido.innerText = "invalido";
    }
});

const tamaño = ["tel"];
for (let i = 0; i < tamaño.length; i++) {
    document.getElementById(tamaño[i]).maxLength = 10;
}

const validar = () =>{
    if(document.form.nombre.value !="" && document.form.tel.value != ""  && !isNaN(document.form.tel.value) && valido.innerText == "válido"){
        //alert(document.getElementById("nombre"));
        alert(`Tus datos de la cuenta de ${document.form.roles.value} son:\nNombre: ${document.form.nombre.value} Correo: ${document.form.correo.value}\nTeléfono ${document.form.tel.value} Sexo: ${document.form.sexo.value}`);
        document.form.submit();
    }else{
        alert("Llenar todos los campos y/o revisar el numero telefonico")
    }
}
console.log(document.getElementById("nombre"));
