function calcular() {
    let nome = window.prompt("Qual o nome do aluno?");
    let n1 = Number(window.prompt("Digite a primeira nota: "));
    let n2 = Number(window.prompt("Digite a segunda nota: "));
    
    let msg // cria uma variável para armazenar a mensagem de resultado

    
    let media = (n1 + n2) / 2;

    if(media >= 6){
        msg = `Parabéns ${nome}, você foi aprovado com média ${media.toFixed(2)}!`;
    }else{
        msg = `Infelizmente ${nome}, você foi reprovado com média ${media.toFixed(2)}.`;
    }

    let res = document.getElementById('situacao');
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>...</p>`;
    res.innerHTML += `<p>As notas obtidas <mark>${n1.toFixed(2)}</mark> e <mark>${n2.toFixed(2)}</mark>.</p>`;
    res.innerHTML += `<p>A média final será <mark>${media.toFixed(2)}</mark>.</p>`;
    res.innerHTML += `<p>A mesagem que temos é <strong style='color: red;'>${msg}</strong></p>`;
}