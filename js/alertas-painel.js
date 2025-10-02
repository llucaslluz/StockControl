document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-alertas");
  const detalhe = document.getElementById("detalhe-alerta");
  const detalheConteudo = document.getElementById("detalhe-conteudo");

  // Mock inicial
  const alertas = [
    { id: 101, tipo: "Estoque Mínimo", unidade: "Pirituba", data: "07/03 10h", status: "Aberto" },
    { id: 102, tipo: "NF Divergência", unidade: "Cubatão", data: "07/03 11h", status: "Reconhecido" },
    { id: 103, tipo: "EPI Vencido", unidade: "Mauá", data: "07/03 12h", status: "Aberto" },
    { id: 104, tipo: "Validade Lote", unidade: "Paulínia", data: "07/03 14h", status: "Resolvido" },
  ];

  function renderTabela() {
    tabela.innerHTML = "";
    alertas.forEach(a => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${a.id}</td>
        <td>${a.tipo}</td>
        <td>${a.unidade}</td>
        <td>${a.data}</td>
        <td>${a.status}</td>
      `;
      tr.addEventListener("click", () => mostrarDetalhe(a));
      tabela.appendChild(tr);
    });
  }

  function mostrarDetalhe(alerta) {
    detalhe.classList.remove("hidden");
    detalheConteudo.innerHTML = `
      <p><b>Tipo:</b> ${alerta.tipo}</p>
      <p><b>Unidade:</b> ${alerta.unidade}</p>
      <p><b>Material:</b> Capacete Seg.</p>
      <p><b>Status:</b> ${alerta.status}</p>
      <p><b>Usuário responsável:</b> João (Almoxarife)</p>
    `;
  }

  renderTabela();

  // Gráfico Pizza - Status
  new Chart(document.getElementById("graf-pizza"), {
    type: "pie",
    data: {
      labels: ["Aberto", "Reconhecido", "Resolvido"],
      datasets: [{ data: [2,1,1], backgroundColor: ["#ef4444","#f59e0b","#10b981"] }]
    }
  });

  // Gráfico Barras - Tipos
  new Chart(document.getElementById("graf-barra"), {
    type: "bar",
    data: {
      labels: ["Estoque Mínimo", "NF Divergência", "EPI Vencido", "Validade Lote"],
      datasets: [{ data: [1,1,1,1], backgroundColor: "#3b82f6" }]
    }
  });

  // Gráfico Linha - Evolução
  new Chart(document.getElementById("graf-linha"), {
    type: "line",
    data: {
      labels: ["01/03","02/03","03/03","04/03","05/03","06/03","07/03"],
      datasets: [{
        label: "Alertas",
        data: [1,2,3,2,4,3,4],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,.2)",
        fill: true,
        tension: 0.3
      }]
    }
  });
});
