function verificarObrigatoriedadeDeVoto(idade) {
    if (idade < 16) {
        console.log("VOCÊ NÃO PODE VOTAR.");
    } else if ((idade >= 16 && idade < 18) || idade >= 65) {
        console.log("O VOTO é OPCIONAL.");
    } else if (idade >= 18 && idade < 65) {
        console.log("O VOTO É OBRIGATÓRIO.");
    } else {
        console.log("IDADE INVÁLIDA.");
    }
}


