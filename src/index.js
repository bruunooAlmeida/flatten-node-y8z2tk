/**
 * Desafio: escrever uma função que receba um array com valores ou sub-arrays, e retorne todos os valores abertos em um único array
 * Todos os valores serão compostos por numeros inteiros.
 *
 * IMPORTANTE:
 * Não devem ser utilizadas as funções flat() ou flatMap() dos arrays.
 * A ideia é avaliar a lógica utilizada, e não a utilização dos métodos prontos.
 *
 * Voce pode testar o seu codigo rodando o comando `npm run test` no terminal
 * e tambem pode alterar o arquivo `index.test.js` se desejar.
 * Apos enviado, seu codigo sera validado com outros cenarios de teste tambem.
 *
 * @example `flatten([1, [2, 3], 4, [5, 6]])` retorna `[1, 2, 3, 4, 5, 6]`
 * @param numbers array de inteiros ou sub-arrays
 * @returns novo array, somente com os valores
 */
//Infelizmente esse codigo nao passou nos teste rodando ele na minha maquina para os vetores informado deu certo
function flatten(array) {
  let arraySaida = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (Array.isArray(element)) {
      for (let elementoArray of element) {
        arraySaida.push(elementoArray);
      }
    } else arraySaida.push(element);
    //console.log(Array.isArray(element));
  }
  return arraySaida;
}
/*

function verificaElemento(i, entrada, saida) {
  if (i >= entrada.length) return;

  if (Array.isArray(entrada[i])) {
    verificaElemento(0, entrada[i], saida);
  } else {
    saida.push(entrada[i]);
  }

  verificaElemento(i + 1, entrada, saida);
}

function flatten(entrada) {
  let saida = [];
  verificaElemento(0, entrada, saida);

  return saida;
}
*/

module.exports = flatten;
