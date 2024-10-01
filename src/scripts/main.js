AOS.init();

const dataDoAniversario = new Date("Jan 17, 2025 14:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contadorDeHoras = setInterval(function() {
    const horaAtual = new Date();
    const timeStampAtual = horaAtual.getTime();

    const contagemAteOEvento = timeStampDoAniversario - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOAniversario = Math.floor(contagemAteOEvento / diasEmMs);
    const horasAteOAniversario = Math.floor((contagemAteOEvento % diasEmMs) / horaEmMs);
    const minutosAteOAniversario = Math.floor((contagemAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOAniversario = Math.floor((contagemAteOEvento % minutoEmMs) / 1000);
    

    document.getElementById("contador").innerHTML = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}min ${segundosAteOAniversario}s`

    if (contagemAteOEvento < 0) {
        clearInterval(contadorDeHoras);
        document.getElementById("contador").innerHTML = `Evento expirado`;
    };
}, 1000);

