function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let numerosDeVitorias = vitorias;
    let numerosDeDerrotas = derrotas;
    let nivel;
    let nickname = "Erick";

    if (vitorias === 0) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lend�rio";
    } else {
        nivel = "Imortal";
    }

    return `O Her�i de nome ${nickname} tem um saldo de ${saldoVitorias} com ${numerosDeVitorias} vit�rias e ${numerosDeDerrotas} derrotas e est� no n�vel ${nivel}`;
}

let vitorias = 75;
let derrotas = 50;

const resultado = calcularNivel(vitorias, derrotas);
console.log(resultado);
