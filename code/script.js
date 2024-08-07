const formulario = document.querySelector("#formulario");
const resultadoTexto = document.querySelector("#resultadoTexto");

function calculoImc(altura, peso) {
  let peso = document.querySelector("#formulario").peso.value
  let peso = document.querySelector("#formulario").altura.value}

formulario.onsubmit = (event) => {
  event.preventDefault();

  const altura = parseFloat(document.querySelector("#altura").value);
  const peso = parseFloat(document.querySelector("#peso").value);

const imc = calculoImc(altura, peso).toFixed(2);


  if (calculoImc <= 16.9) {
    resultadoTexto.InnerHTMl = 'Você está extremamente magro. Procure ajuda.'}

      else if (calculoImc > 17 && calculoImc < 18.4){
resultadoTexto.InnerHTML = 'Você está abaixo do peso. Se liga!'
  }

  else if (calculoImc > 18.5 && calculoImc < 24.9){
    resultadoTexto.InnerHTML = 'Você está com o peso normal. Continue assim.'
      }

      else if (calculoImc > 25 && calculoImc < 29.9){
        resultadoTexto.InnerHTML = 'Você está acima do peso. Se cuida aí.'
          }

          else if (calculoImc > 30 && calculoImc < 34.9){
            resultadoTexto.InnerHTML = 'Você está com obesidade grau 1. Cuide melhor da sua saúde.'
              }

              else if (calculoImc > 35 && calculoImc < 40){
                resultadoTexto.InnerHTML = 'Você está com obesidade grau 2. Cuide melhor ainda de sua saúde.'
                  }

                  else (calculoImc >= 40) 
                    resultadoTexto.InnerHTML = 'Você está com obesidade grau 3 ou obesidade mórbida. nós vamos chamar o Dr.Now pra você.'
                      



  

  // Faça condicionais verificando os dados fornecidos

  // Verificar se os dados inseridos são válidos

  // Se está abaixo do peso
  // Se está com o peso ideal
  // Se está acima do peso
};
