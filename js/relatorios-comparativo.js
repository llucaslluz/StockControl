document.addEventListener("DOMContentLoaded", () => {
  // Dados mockados
  const unidades = ["Pirituba", "Cubatão", "Mauá", "Paulínia"];
  const consumo = [25300, 18500, 30200, 22100];
  const alertas = [12, 5, 20, 9];
  const estoqueMin = [8, 12, 6, 10];

  // Gráfico Barras - Consumo por Unidade
  new Chart(document.getElementById("graf-barras"), {
    type: "bar",
    data: {
      labels: unidades,
      datasets: [{
        label: "Consumo R$",
        data: consumo,
        backgroundColor: "#3b82f6"
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });

  // Gráfico Linha - Evolução nos últimos 6 meses
  new Chart(document.getElementById("graf-linha"), {
    type: "line",
    data: {
      labels: ["Out", "Nov", "Dez", "Jan", "Fev", "Mar"],
      datasets: [
        { label: "Pirituba", data: [4000, 4200, 4100, 4300, 4600, 5000], borderColor: "#3b82f6", fill: false },
        { label: "Cubatão", data: [3000, 2800, 3200, 3100, 3300, 3500], borderColor: "#10b981", fill: false },
        { label: "Mauá", data: [5000, 5200, 5100, 5400, 5600, 6000], borderColor: "#ef4444", fill: false },
        { label: "Paulínia", data: [3500, 3600, 3400, 3700, 3900, 4200], borderColor: "#f59e0b", fill: false }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false, tension: 0.3 }
  });

  // Gráfico Radar - Comparativo de Indicadores
  new Chart(document.getElementById("graf-radar"), {
    type: "radar",
    data: {
      labels: ["Consumo", "Alertas", "% Itens Mínimo"],
      datasets: [
        { label: "Pirituba", data: [25300, 12, 8], borderColor: "#3b82f6", backgroundColor: "rgba(59,130,246,.2)" },
        { label: "Cubatão", data: [18500, 5, 12], borderColor: "#10b981", backgroundColor: "rgba(16,185,129,.2)" },
        { label: "Mauá", data: [30200, 20, 6], borderColor: "#ef4444", backgroundColor: "rgba(239,68,68,.2)" },
        { label: "Paulínia", data: [22100, 9, 10], borderColor: "#f59e0b", backgroundColor: "rgba(245,158,11,.2)" }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
});
