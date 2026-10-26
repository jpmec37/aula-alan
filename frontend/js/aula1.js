const button1 = document.getElementById("enviar1")
const resultado1 = document.getElementById("resultado1")
const button2 = document.getElementById("enviar2")
const resultado2 = document.getElementById("resultado2")
const button3 = document.getElementById("enviar3")
const resultado3 = document.getElementById("resultado3")
const button4 = document.getElementById("enviar4")
const resultado4 = document.getElementById("resultado4")
const button5 = document.getElementById("enviar5")
const resultado5 = document.getElementById("resultado5")
let precohaha;
let cupondobom;
let senha;
let valorcompra;
let notaaluno;
let temperatura;
button1.addEventListener('click', () =>{
    precohaha = document.getElementById("valor1").value
    cupondobom = document.getElementById("cupom").value
    if(!precohaha || !cupondobom){
        resultado1.textContent = "Insira os dados"
        return
    }
    const formatado = cupondobom.toLowerCase()
    const verificar = calcularTotal(precohaha, formatado)
resultado1.textContent = verificar
})
button2.addEventListener('click', () =>{
    valorcompra = document.getElementById("valor2").value
    if(!valorcompra){
        resultado2.textContent = "Insira os dados"
        return
    }
 const verificar = freteGratis(valorcompra)
 resultado2.textContent = verificar
})
button3.addEventListener('click', () =>{
    senha = document.getElementById("senha").value
    if(!senha){
        resultado3.textContent = "Insira os dados"
        return
    }
    const verificar = senhaSegura(senha)
    resultado3.textContent = verificar
})
button4.addEventListener('click', () =>{
    notaaluno = document.getElementById("valor4").value
    if(!notaaluno){
        resultado4.textContent = "Insira os dados"
        return
    }
    const verificar = fecharNota(notaaluno)
    resultado4.textContent = verificar
})
button5.addEventListener('click', () =>{
 temperatura = document.getElementById("valor5").value
 if(!temperatura){
        resultado5.textContent = "Insira os dados"
        return
    }
 const verificar = verificarTemp(temperatura)
 resultado5.textContent = verificar
})
function calcularTotal(preco, cupom) {
  if (cupom === "cimatec") {
    const preconew = preco - 10;
    return preconew;
  } else {
    return `CUPOM NAO CORRESPONDENTE, preço: ${preco}`;
  }
}


function freteGratis(valor) {
  if (valor >= 150) {
    return "Frete Grátis Adquirido";
  } else {
    return "Valor mínimo de 150 não atingido";
  }
}


function senhaSegura(senha) {
  const senhaTeste = senha.length;
  if (senhaTeste >= 6) {
    return "Senha segura, mínimo de 6 caracteres";
  } else {
    return "Senha Não segura, mínimo de 6 caracteres não atingido";
  }
}


function fecharNota(nota) {
  if (nota >= 7) {
    return `Aluno aprovado com nota ${nota}`;
  } else if (nota <= 6.9 && nota >= 5) {
    return `Aluno de recuperação com nota ${nota}`;
  } else if (nota < 5) {
    return `Aluno reprovado com nota ${nota}`;
  }
}


function verificarTemp(temp) {
  if (temp >= 80) {
    return "Temperatura de Perigo";
  } else if (temp >= 50 && temp <= 80) {
    return "Temperatura de Atenção";
  } else if (temp < 50) {
    return "Temperatura Normal";
  }
}


//CONSERTADO BONUS
function calcularDesconto(valor) {
  if (valor >= 100) {
    return valor - 20;
  } else {
    return valor;
  }
}
if (calcularDesconto(100) === 80) {
  console.log("Atividade 6(BONUS): TESTE FUNCIONOU");
} else {
  console.log("Atividade 6(BONUS): TESTE FALHOU");
}
