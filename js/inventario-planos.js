document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-planos");

  // Mock inicial
  const planos = [
    { id: 1, nome: "ABC Mensal", criterio: "Curva ABC", status: "Aberto", criado: "01/03/25" },
    { id: 2, nome: "Almox 01 Mar", criterio: "Almoxarifado", status: "Em Andamento", criado: "02/03/25" },
    { id: 3, nome: "EPIs Críticos", criterio: "Categoria=EPI", status: "Fechado", criado: "15/02/25" }
  ];

  function renderTabela(lista) {
    tabela.innerHTML = "";
    lista.forEach(plano => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${plano.id}</td>
        <td>${plano.nome}</td>
        <td>${plano.criterio}</td>
        <td><span class="status ${plano.status.replace(" ", "")}">${plano.status}</span></td>
        <td>${plano.criado}</td>
        <td>
          <button class="btn-secondary" onclick="verDetalhe(${plano.id})">Ver</button>
          <button class="btn-secondary" onclick="editarPlano(${plano.id})">Editar</button>
          <button class="btn-secondary" onclick="fecharPlano(${plano.id})">Fechar</button>
          <button class="btn-secondary" onclick="excluirPlano(${plano.id})">Excluir</button>
        </td>
      `;
      tabela.appendChild(tr);
    });
  }

  // Ações mock
  window.verDetalhe = (id) => {
    alert(`Abrindo detalhe do Plano ${id}`);
    window.location.href = "contagens.html"; // tela 17
  };
  window.editarPlano = (id) => alert(`Editar plano ${id}`);
  window.fecharPlano = (id) => alert(`Fechar plano ${id}`);
  window.excluirPlano = (id) => alert(`Excluir plano ${id}`);

  // Filtros mock
  document.getElementById("btn-aplicar-filtros").addEventListener("click", () => {
    const status = document.getElementById("filtro-status").value;
    const filtrados = status ? planos.filter(p => p.status === status) : planos;
    renderTabela(filtrados);
  });

  // Novo plano
  document.getElementById("btn-novo").addEventListener("click", () => {
    alert("Criar novo plano de inventário");
  });

  // Inicial
  renderTabela(planos);
});
