let corSemaforo = "vermelho";
let veiculoEmergencia = false;

if (veiculoEmergencia === true) {
    console.log("ALERTA: Ambulância detectada! Todos os sinais fechados. CRUZAMENTO PREFERENCIAL A AMBULÂNCIA.");
} else if (corSemaforo === "verde") {
    console.log("Pode passar! Siga com cuidado.");
} else if (corSemaforo === "amarelo") {
    console.log("Reduza a sua velocidade e pare o veículo.");
} else {
    console.log("PARE! Espere o sinal verde.");
}