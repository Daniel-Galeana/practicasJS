//function acceder(){
    const acceder = () =>{
    if(document.form.password.value=='0514'){
        document.form.submit();
    }else{
        alert("¡Tu contraseña es incorrecta. Intenta nuevamente!");
        document.form.password.value = '';
    }
}