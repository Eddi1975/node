document.getElementById('validar').addEventListener('click', valida);

let contador = 1;
function valida(){

        const campo = document.getElementById('campo');
            valido = document.getElementById('campoOK'),

            regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$%*&\-\_])[A-Za-z\d$@$%*&\-\_]{8,16}$/;

        if (regex.test(campo.value)) {
            valido.innerHTML = "válido";

        } else {
            valido.innerHTML = "incorrecto";
            console.log(`Intento: ${contador}`);
            if(contador === 3){
              document.getElementById('validar').disabled = 'true';
            }
            contador++;
        }

}