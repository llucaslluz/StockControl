document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-consumo");

  const consumo = [
    { id: 1, funcionario: "João Silva", material: "Luva Nitrílica", qtd: "10 PAR", custo: 150 },
    { id: 2, funcionario: "Pedro Santos", material: "Capacete Seg.", qtd: "3 UN", custo: 105 },
    { id: 3, funcionario: "Maria Souza", material: "Óculos Prot.", qtd: "5 UN", custo: 250 },
    { id: 4, funcionario: "João Silva", material: "Botina Seg.", qtd: "2 PAR", custo: 400 }
  ];

  function renderTabela() {
    tabela.innerHTML = "";
    consumo.forEach(item => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.funcionario}</td>
        <td>${item.material}</td>
        <td>${item.qtd}</td>
        <td>R$ ${item.custo.toFixed(2)}</td>
      `;
      tabela.appendChild(tr);
    });
  }

  renderTabela();

  // ===== Gráficos com Chart.js =====
  // Consumo por Funcionário
  new Chart(document.getElementById("graf-funcionarios"), {
    type: "bar",
    data: {
      labels: consumo.map(c => c.funcionario),
      datasets: [{
        label: "Consumo (R$)",
        data: consumo.map(c => c.custo),
        backgroundColor: "#3b82f6"
      }]
    },
    options: { indexAxis: "y" }
  });

  // Consumo por Categoria (mock simplificado)
  new Chart(document.getElementById("graf-categorias"), {
    type: "pie",
    data: {
      labels: ["EPI", "Uniformes", "Ferramentas"],
      datasets: [{
        data: [500, 200, 150],
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"]
      }]
    }
  });

  // Evolução do Consumo (últimos 6 meses - mock)
  new Chart(document.getElementById("graf-evolucao"), {
    type: "line",
    data: {
      labels: ["Out", "Nov", "Dez", "Jan", "Fev", "Mar"],
      datasets: [{
        label: "Consumo (R$)",
        data: [400, 600, 350, 700, 500, 650],
        borderColor: "#ef4444",
        backgroundColor: "rgba(239,68,68,.2)",
        fill: true
      }]
    }
  });
});
