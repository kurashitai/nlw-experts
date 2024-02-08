const perguntas = [
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita de valor e tipo",
        "Comparação solta de valor",
        "Comparação estrita de valor"
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "addToEnd()",
        "push()",
        "append()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado de typeof null em JavaScript?",
      respostas: [
        "undefined",
        "object",
        "null"
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento pelo seu ID",
        "Seleciona todos os elementos que correspondem a um seletor CSS",
        "Seleciona o primeiro elemento que corresponde a um seletor CSS"
      ],
      correta: 2
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      respostas: [
        "variável",
        "var, let ou const",
        "declaração"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
      respostas: [
        "Analisa uma string e retorna um número de ponto flutuante",
        "Analisa uma string e retorna um número inteiro",
        "Converte um número para uma string"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador lógico 'ou' em JavaScript?",
      respostas: [
        "&&",
        "!",
        "||"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado de 5 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "TypeError"
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'slice()' faz em uma array em JavaScript?",
      respostas: [
        "Remove elementos de um array",
        "Retorna uma cópia de parte de um array",
        "Adiciona elementos ao final de um array"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'toFixed()' em JavaScript?",
      respostas: [
        "Formata um número utilizando notação de ponto fixo",
        "Arredonda um número para o inteiro mais próximo",
        "Converte um número para uma string"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      
      quizItem.querySelector('dl').appendChild(dt)
  
    }
  
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }