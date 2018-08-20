// let nome = prompt("Digite aqui o seu nome:");  // let - variavel, prompt - janela de digitação

// console.log(`O nome digitado foi ${nome}`);   // "comentarios"

// alert(`Seja bem vindo, ${nome}! Aproveite sua visita!`);  // mensagem de saida



// let numero = prompt("Digite aqui um número:");

// if(isNaN(Number(numero)) || numero === null){
//     console.log("Valor invalido")
// }
// else if(numero > 10){                               // if - se sim
//     console.log("É um numero maior que 10!");
// }
// else if(numero < 10){                       // Se não, Se sim
//     console.log("É menor que 10!")
// }
// else{                                       // else - se não
//     console.log("É o número 10! EEEEE");
// }


// inicialização
let limite = Number(prompt("Digite o limite do contador"));
let contador = 1;

       //condição v
while(contador <= limite){                                   //enquanto
    console.log(contador)

    //atualização                                // contador=i
    // contador = contador + 1;
    // contador += 1;
    contador++;
}
