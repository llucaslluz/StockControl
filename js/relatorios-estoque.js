document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-estoque");

  const estoque = [
    { id: 1, material: "Capacete Seg.", saldo: "118 UN", min: 100, max: 200, local: "Almox 1 - A1", status: "verde" },
    { id: 2, material: "Luva Nitril.", saldo: "30 PAR", min: 50, max: 150, local: "Almox 1 - B2", status: "vermelho" },
    { id: 3, material: "Óculos Prot.", saldo: "82 UN", min: 80, max: 120, local: "Almox 2 - C3", status: "amarelo" },
    { id: 4, material: "Botina Seg.", saldo: "200 PAR", min: 100, max: 250, local: "Almox 1 - D4", status: "azul" }
  ];

  function renderTabela() {
    tabela.innerHTML = "";
    estoque.forEach(item => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.material}</td>
        <td>${item.saldo}</td>
        <td>${item.min} / ${item.max}</td>
        <td>${item.local}</td>
        <td>
          <button class="btn-primary" onclick="verDetalhes(${item.id})">Ver Detalhes</button>
          <button class="btn-secondary" onclick="verMov(${item.id})">Movimentações</button>
        </td>
      `;
      tabela.appendChild(tr);
    });
  }

  // Ações rápidas
  window.verDetalhes = (id) => {
    alert("Ver detalhes do material #" + id);
  };

  window.verMov = (id) => {
    alert("Ver movimentações do material #" + id);
  };

  document.getElementById("btn-aplicar-filtros")?.addEventListener("click", () => {
    alert("Filtros aplicados (mock).");
  });

  renderTabela();
});
