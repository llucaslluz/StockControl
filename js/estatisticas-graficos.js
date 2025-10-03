document.addEventListener("DOMContentLoaded", () => {
  // Gráfico Pizza - Consumo por Categoria
  new Chart(document.getElementById("graf-pizza"), {
    type: "pie",
    data: {
      labels: ["EPI", "Uniformes", "Ferramentas", "Outros"],
      datasets: [{
        data: [45000, 20000, 15000, 5700],
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#6b7280"]
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });

  // Gráfico Linha - Evolução
  new Chart(document.getElementById("graf-linha"), {
    type: "line",
    data: {
      labels: ["Out", "Nov", "Dez", "Jan", "Fev", "Mar"],
      datasets: [{
        label: "Movimentações",
        data: [300, 420, 380, 500, 420, 320],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,.2)",
        fill: true,
        tension: 0.3
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });

  // Gráfico Barras - Top 5 Materiais
  new Chart(document.getElementById("graf-barra"), {
    type: "bar",
    data: {
      labels: ["Capacete", "Luva", "Óculos", "Botina", "Protetor Auditivo"],
      datasets: [{
        label: "Consumo (unid.)",
        data: [120, 95, 80, 75, 60],
        backgroundColor: "#ef4444"
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });

  // Gráfico Radar - Indicadores
  new Chart(document.getElementById("graf-radar"), {
    type: "radar",
    data: {
      labels: ["Consumo", "Custo", "Alertas", "Conformidade EPIs"],
      datasets: [
        { label: "Unidade 1", data: [80, 70, 40, 90], borderColor: "#3b82f6", backgroundColor: "rgba(59,130,246,.2)" },
        { label: "Unidade 2", data: [65, 60, 30, 85], borderColor: "#10b981", backgroundColor: "rgba(16,185,129,.2)" }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
});
