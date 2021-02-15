// Documentação disponivel em https://nodejs.org/api/readline.html
var readline = require('readline');

var prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Requisitos solicitados no exercício
var requisitos = {
    salario: null, // Salário por hora
    horas: null, // Quantidade de horas trabalhadas no mês
    filhos: null // Quantidade de filhos menores de 14 anos
};

function calculoFinal({ salario, horas, filhos }) {
    var salarioBruto = salario * horas;
    if (salarioBruto <= 788) {
        salarioFamilia = 30.5 * filhos
    } else if (salarioBruto > 788 && salarioBruto < 1100) {
        salarioFamilia = 18.5 * filhos
    } else if (salarioBruto > 1100) {
        salarioFamilia = 11.9 * filhos
    };
    return `
        Salário bruto: R$ ${salarioBruto}
        Salário família: R$ ${salarioFamilia}
    `
};

prompt.question("Salário por hora: ", (resposta) => {
    requisitos.salario = resposta;
    prompt.question("Horas trabalhadas no mês: ", (resposta) => {
        requisitos.horas = resposta;
        prompt.question("Quantidade de filhos menores de 14 anos: ", (resposta) => {
            requisitos.filhos = resposta;
            console.log(calculoFinal(requisitos));
            prompt.close()
        })
    })
})
