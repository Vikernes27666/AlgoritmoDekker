// Variables compartidas
let quiereCliente1 = false;
let quiereCliente2 = false;
let turno = 1;

function solicitarAtencion(cliente) {
    if (cliente === 1) {
        quiereCliente1 = true;
        document.getElementById('mensajeError').innerText = ''; // Limpiar mensaje de error
        manejarAtencion();
    } else if (cliente === 2) {
        quiereCliente2 = true;
        if (turno !== 2) {
            document.getElementById('mensajeError').innerText = 'No es su turno, espera tu turno';
        } else {
            document.getElementById('mensajeError').innerText = ''; // Limpiar mensaje de error
            manejarAtencion();
        }
    }
}

function manejarAtencion() {
    if (quiereCliente1 && turno === 1) {
        atenderCliente(1);
    } else if (quiereCliente2 && turno === 2) {
        atenderCliente(2);
    }
}

function atenderCliente(cliente) {
    if (cliente === 1) {
        const estadoCliente1 = document.getElementById('estadoCliente1');
        estadoCliente1.innerText = 'Atendiendo, es tu turno...';
        setTimeout(() => {
            estadoCliente1.innerText = 'Ha sido atendido';
            estadoCliente1.classList.add('atendido');
            setTimeout(() => {
                estadoCliente1.innerText = 'Atención finalizada';
                estadoCliente1.classList.remove('atendido');
                quiereCliente1 = false;
                turno = 2;
            }, 2000);
        }, 2000);
    } else if (cliente === 2) {
        const estadoCliente2 = document.getElementById('estadoCliente2');
        estadoCliente2.innerText = 'Atendiendo, es tu turno...';
        setTimeout(() => {
            estadoCliente2.innerText = 'Ha sido atendido';
            estadoCliente2.classList.add('atendido');
            setTimeout(() => {
                estadoCliente2.innerText = 'Atención finalizada';
                estadoCliente2.classList.remove('atendido');
                quiereCliente2 = false;
                turno = 1;
            }, 2000);
        }, 2000);
    }
}

