document.getElementById('calcularMedia').addEventListener('click', function() {
    
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);


    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById('resultado').innerText = 'Por favor, insira todas as notas corretamente.';
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;

    let status;
    if (media >= 7) {
        status = 'APROVADO';
    } else if (media >= 4) {
        status = 'RECUPERAÇÃO';
    } else {
        status = 'REPROVADO';
    }

    // Exibindo o resultado
    document.getElementById('resultado').innerText = `Média: ${media.toFixed(2)} - Status: ${status}`;
});