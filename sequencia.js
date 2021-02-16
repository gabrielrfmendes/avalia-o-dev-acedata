var sequencia = [];

var qtdValores = prompt("Quantidade de valores: ");

do {
    var digito = parseInt(prompt(`Valor: `));
    if (sequencia.indexOf(digito) != -1) {
        alert('O número digitado já está na sequência.');
    } else {
        sequencia.push(digito);
        qtdValores--
    }    
} while(qtdValores > 0);

var maiorNumero = sequencia[0];
var segundoMaiorNumero = sequencia[0];
var menorNumero = sequencia[0];

sequencia.forEach(element => {
    if (element > maiorNumero) {
        maiorNumero = element
    }
    if (element < menorNumero) {
        menorNumero = element
    }
});
// 1 2 3 4 5 
sequencia.forEach(element => {
    if (element < maiorNumero && element > segundoMaiorNumero) {
        segundoMaiorNumero = element        
    }
})

document.write(`
    A sequência digitada foi ${sequencia}<br />
    O maior número na sequência é ${maiorNumero}<br />
    O menor número na sequência é ${menorNumero}<br />
    O segundo maior número na sequência é ${segundoMaiorNumero}
`)
