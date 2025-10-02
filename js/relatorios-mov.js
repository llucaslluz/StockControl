document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-mov");

  const movimentacoes = [
    { id: 101, data: "07/03/25 10h", tipo: "IN (NF#45)", material: "Capacete", qtd: "+50 UN", usuario: "Lucas" },
    { id: 102, data: "07/03/25 11h", tipo: "OUT (EPI)", material: "Luva", qtd: "-2 PAR", usuario: "João" },
    { id: 103, data: "07/03/25 11h", tipo: "AJUSTE", material: "Botina", qtd: "-10 PAR", usuario: "Ana" },
    { id: 104, data: "07/03/25 14h", tipo: "OUT (Proj)", material: "Óculos", qtd: "-5 UN", usuario: "Pedro" }
  ];

  function renderTabela() {
    tabela.innerHTML = "";
    movimentacoes.forEach(mov => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${mov.id}</td>
        <td>${mov.data}</td>
        <td>${mov.tipo}</td>
        <td>${mov.material}</td>
        <td>${mov.qtd}</td>
        <td>${mov.usuario}</td>
        <td>
          <button class="btn-primary" onclick="verDetalhes(${mov.id})">Detalhes</button>
        </td>
      `;
      tabela.appendChild(tr);
    });
  }

  window.verDetalhes = (id) => {
    alert("Ver detalhes da movimentação #" + id);
  };

  document.getElementById("btn-aplicar-filtros")?.addEventListener("click", () => {
    alert("Filtros aplicados (mock).");
  });

  renderTabela();
});
