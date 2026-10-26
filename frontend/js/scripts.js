let aurafarmada;
let algo = []
const auramaisego = document.getElementById("auramaisego");
const hahaha = document.getElementById("hahaha");
const sla = document.getElementById("sla");
hahaha.addEventListener("click", () => {
  event.preventDefault();
  aurafarmada = document.getElementById("number").value;
  console.log(aurafarmada)
  if (aurafarmada > 1000) {
    auramaisego.innerHTML = ``;
    sla.textContent = "Tem aura demais, nao da pra escrever";
  } else {
    sla.textContent = "";
    if (aurafarmada <= 0) {
      auramaisego.innerHTML = ``;
      sla.textContent = "Voce nao tem aura";
    } else {
      sla.textContent = "";
      for (i = 1; i <= aurafarmada; i++) {
        auramaisego.innerHTML += `<div class="haha">Aura ${i}</div>`;
      }
    }
  }
});
