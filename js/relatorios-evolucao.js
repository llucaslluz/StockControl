document.addEventListener("DOMContentLoaded", () => {
  // Gráfico de linha - evolução no tempo
  new Chart(document.getElementById("graf-linha"), {
    type: "line",
    data: {
      labels: ["Jan", "Fev", "Mar"],
      datasets: [{
        label: "Preço Unitário (R$)",
        data: [35.00, 38.00, 36.50],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,.2)",
        fill: true,
        tension: 0.3
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });

  // Gráfico de barras - média por fornecedor
  new Chart(document.getElementById("graf-barras"), {
    type: "bar",
    data: {
      labels: ["Fornec. A", "Fornec. B"],
      datasets: [{
        label: "Preço Médio (R$)",
        data: [35.75, 38.00],
        backgroundColor: ["#10b981", "#f59e0b"]
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });

  // Gráfico de pizza - participação fornecedores
  new Chart(document.getElementById("graf-pizza"), {
    type: "pie",
    data: {
      labels: ["Fornec. A", "Fornec. B"],
      datasets: [{
        data: [2, 1],
        backgroundColor: ["#10b981", "#f59e0b"]
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
});
