document.addEventListener("DOMContentLoaded", () => {
  // Mock de dados (consumo por funcionário)
  const dadosConsumo = [
    { id: 1, funcionario: "João Silva", material: "Luva Nitrílica", qtd: 10, custo: 150, data: "05/03/25" },
    { id: 2, funcionario: "Pedro Santos", material: "Capacete Seg.", qtd: 3, custo: 105, data: "04/03/25" },
    { id: 3, funcionario: "Maria Souza", material: "Óculos Prot.", qtd: 5, custo: 250, data: "03/03/25" }
  ];

  const dadosEstoque = [
    { id: "01", material: "Capacete Seg.", saldo: "118 UN", min: 100, max: 200, unidade: "Pirituba", status: "OK" },
    { id: "02", material: "Luva Nitril.", saldo: "30 CX", min: 50, max: 100, unidade: "Cubatão", status: "↓ Min" },
    { id: "03", material: "Óculos Prot.", saldo: "82 UN", min: 80, max: 120, unidade: "Mauá", status: "OK" }
  ];

  // Elementos DOM
  const tabelaFunc = document.getElementById("tabela-func");
  const tabelaEstoque = document.querySelector("section.tabela-container:nth-of-type(2) tbody");

  // Render consumo
  function renderConsumo() {
    tabelaFunc.innerHTML = "";
    dadosConsumo.forEach(item => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.funcionario}</td>
        <td>${item.material}</td>
        <td>${item.qtd}</td>
        <td>R$ ${item.custo.toFixed(2).replace(".", ",")}</td>
        <td>${item.data}</td>
      `;
      tabelaFunc.appendChild(tr);
    });
  }

  // Render estoque
  function renderEstoque() {
    tabelaEstoque.innerHTML = "";
    dadosEstoque.forEach(item => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.material}</td>
        <td>${item.saldo}</td>
        <td>${item.min} / ${item.max}</td>
        <td>${item.unidade}</td>
        <td class="status ${item.status === 'OK' ? 'ok' : (item.status.includes('Min') ? 'min' : 'max')}">${item.status}</td>
      `;
      tabelaEstoque.appendChild(tr);
    });
  }

  // Botão aplicar filtros (simulado)
  document.querySelector(".btn-primary").addEventListener("click", () => {
    alert("Filtros aplicados (mock). Aqui você faria chamadas à API/BD.");
    renderConsumo();
    renderEstoque();
  });

  // Inicialização
  renderConsumo();
  renderEstoque();
});
