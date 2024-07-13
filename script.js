function Cal_edad() {
    var edad;
    var edad = prompt("Digite su edad: ");
    
    
    edad = parseInt(edad, 10);
    
    if (edad >= 18) {
        alert("Tienes la edad para conducir");
    } else if (edad < 18 && edad >= 0) {
        alert("No cuentas con la edad suficiente para conducir");
    } else {
        alert("Edad no válida");
    }
}

function mostrarCalificacion() {
    var nota = parseFloat(prompt("Introduce tu nota: "));

    if (nota >= 0 && nota < 3) {
        alert("Muy deficiente");
    } else if (nota >= 3 && nota < 5) {
        alert("Insuficiente");
    } else if (nota >= 5 && nota < 6) {
        alert("Suficiente");
    } else if (nota >= 6 && nota < 7) {
        alert("Bien");
    } else if (nota >= 7 && nota < 9) {
        alert("Notable");
    } else if (nota >= 9 && nota <= 10) {
        alert("Sobresaliente");
    } else {
        alert("Nota no válida");
    }
}

function concatenarCadenas() {
    var resultado = "";
    var entrada;

    while (true) {
        entrada = prompt("Introduce una cadena de texto (pulsa cancelar para salir):");
        if (entrada === null) break;
        resultado += resultado ? "-" + entrada : entrada;
    }

    if (resultado) {
        
        document.getElementById("resultado").textContent = resultado;
        
    }
}

function calcularLetraDNI() {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var numeroDNI;
    
    while (true) {
        numeroDNI = prompt("Introduce tu número de DNI (0-99999999):");
        if (numeroDNI === null) break;

        numeroDNI = parseInt(numeroDNI, 10);

        if (numeroDNI >= 0 && numeroDNI <= 99999999) {
            alert("La letra de tu DNI es: " + letras[numeroDNI % 23]);
        } else {
            alert("Número de DNI no válido");
        }
    }
}



