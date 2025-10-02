document.addEventListener("DOMContentLoaded", () => {
  // % Conformidade
  new Chart(document.getElementById("graf-pizza"), {
    type: "doughnut",
    data: {
      labels: ["Conformes", "Vencendo", "Vencidos"],
      datasets: [{
        data: [70, 20, 10],
        backgroundColor: ["#10b981", "#facc15", "#ef4444"]
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });

  // Linha do tempo de vencimentos
  new Chart(document.getElementById("graf-linha"), {
    type: "line",
    data: {
      labels: ["Hoje", "30d", "60d", "90d"],
      datasets: [{
        label: "EPIs a vencer",
        data: [5, 12, 7, 3],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245,158,11,.2)",
        fill: true,
        tension: 0.3
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });

  // Top 5 EPIs mais críticos
  new Chart(document.getElementById("graf-barras"), {
    type: "bar",
    data: {
      labels: ["Capacete", "Luva", "Óculos", "Botina", "Protetor Aur."],
      datasets: [{
        label: "Qtde Crítica",
        data: [4, 6, 2, 3, 1],
        backgroundColor: "#ef4444"
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
});
