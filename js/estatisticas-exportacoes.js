document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-exportacoes");

  const exportacoes = [
    { id: 1, relatorio: "Consumo", periodo: "Fev/25", formato: "PDF", status: "Concluído" },
    { id: 2, relatorio: "Movimentações", periodo: "Jan-Mar/25", formato: "XLSX", status: "Concluído" },
    { id: 3, relatorio: "Estoque", periodo: "Mar/25", formato: "CSV", status: "Em Andamento" }
  ];

  function renderTabela() {
    tabela.innerHTML = "";
    exportacoes.forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${exp.id}</td>
        <td>${exp.relatorio}</td>
        <td>${exp.periodo}</td>
        <td>${exp.formato}</td>
        <td class="${exp.status === "Concluído" ? "status-concluido" : exp.status === "Em Andamento" ? "status-andamento" : "status-falhou"}">
          ${exp.status}
        </td>
        <td>
          <button class="btn-acao">Baixar</button>
          <button class="btn-acao">Reenviar</button>
        </td>
      `;
      tabela.appendChild(tr);
    });
  }

  renderTabela();
});
document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-exportacoes");

  const exportacoes = [
    { id: 1, relatorio: "Consumo", periodo: "Fev/25", formato: "PDF", status: "Concluído" },
    { id: 2, relatorio: "Movimentações", periodo: "Jan-Mar/25", formato: "XLSX", status: "Concluído" },
    { id: 3, relatorio: "Estoque", periodo: "Mar/25", formato: "CSV", status: "Em Andamento" }
  ];

  function renderTabela() {
    tabela.innerHTML = "";
    exportacoes.forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${exp.id}</td>
        <td>${exp.relatorio}</td>
        <td>${exp.periodo}</td>
        <td>${exp.formato}</td>
        <td class="${exp.status === "Concluído" ? "status-concluido" : exp.status === "Em Andamento" ? "status-andamento" : "status-falhou"}">
          ${exp.status}
        </td>
        <td>
          <button class="btn-acao">Baixar</button>
          <button class="btn-acao">Reenviar</button>
        </td>
      `;
      tabela.appendChild(tr);
    });
  }

  renderTabela();
});
