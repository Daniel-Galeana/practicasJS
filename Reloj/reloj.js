let Clock = document.getElementById("reloj");
let hora = new Date();
Clock.textContent = hora;
setTimeout(function(){ location.reload(); }, 1000);

//in html:<p class="reloj" id="reloj"></p>
