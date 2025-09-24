function atualizarRelogio() {
  const agora = new Date();

  let horas = String(agora.getHours()).padStart(2, "0");
  let minutos = String(agora.getMinutes()).padStart(2, "0");
  let segundos = String(agora.getSeconds()).padStart(2, "0");

  const horaFormatada = `${horas}:${minutos}:${segundos}`;
  document.getElementById("time").textContent = horaFormatada;

  const opcoesData = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dataFormatada = agora.toLocaleDateString("pt-BR", opcoesData);
  document.getElementById("date").textContent = dataFormatada;
}

// Atualiza imediatamente e depois a cada segundo
atualizarRelogio();
setInterval(atualizarRelogio, 1000);
