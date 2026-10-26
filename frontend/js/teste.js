const botao = document.getElementById("seusdados");

botao.addEventListener("click", () => {
  const dado = document.getElementById("numerorandom").value;
  const randomizado = Math.floor(Math.random() * dado ) + 1;
  const resultadop = document.getElementById("resultadop")
  const resultado = document.getElementById("resultado")
  resultadop.textContent = "Resultado:"
  resultado.textContent = randomizado
});
