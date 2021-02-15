var sequencia = [];

var qtdValores = prompt("Quantidade de valores: ");

do {
    sequencia.push(parseInt(prompt(`Valor: `)));
    qtdValores--
} while(qtdValores > 0);

var maiorNumero = sequencia[0];
var menorNumero = sequencia[0];

sequencia.forEach(element => {
    console.log(element)
    if (element > maiorNumero) {
        maiorNumero = element
    }
    if (element < menorNumero) {
        menorNumero = element
    }
});

document.write(`
    A sequência digitada foi ${sequencia}<br />
    O maior número na sequência é ${maiorNumero}<br />
    O menor número na sequência é ${menorNumero}<br />
`)
