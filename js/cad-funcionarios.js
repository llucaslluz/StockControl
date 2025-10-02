document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-funcionarios");
  const tabelaHistorico = document.getElementById("tabela-historico");
  const form = document.getElementById("form-funcionario");
  const historico = document.getElementById("historico");
  const funcionarioSelecionado = document.getElementById("funcionario-selecionado");
  const btnNovo = document.getElementById("btn-novo");
  const btnCancelar = document.getElementById("btn-cancelar");

  // Mock inicial
  const funcionarios = [
    {id: 1, nome: "João Silva", matricula: "12345", unidade: "Pirituba", status: "Ativo"},
    {id: 2, nome: "Maria Souza", matricula: "54321", unidade: "Cubatão", status: "Ativo"},
    {id: 3, nome: "Pedro Santos", matricula: "67890", unidade: "Mauá", status: "Inativo"},
  ];

  const historicos = {
    1: [
      {id: 1, epi: "Capacete Seg.", entrega: "01/03/2023", validade: "01/03/2025", status: "Válido"},
      {id: 2, epi: "Luva Nitril.", entrega: "01/02/2025", validade: "01/03/2025", status: "Vencendo"},
      {id: 3, epi: "Óculos Prot.", entrega: "10/01/2025", validade: "10/07/2025", status: "Válido"},
    ],
    2: [
      {id: 1, epi: "Botina Seg.", entrega: "05/02/2024", validade: "05/02/2026", status: "Válido"},
    ],
    3: []
  };

  function renderTabela() {
    tabela.innerHTML = "";
    funcionarios.forEach(f => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${f.id}</td>
        <td>${f.nome}</td>
        <td>${f.matricula}</td>
        <td>${f.unidade}</td>
        <td>${f.status}</td>
        <td>
          <button class="btn-secondary btn-historico" data-id="${f.id}">Ver EPIs</button>
          <button class="btn-secondary">Editar</button>
          <button class="btn-secondary">Excluir</button>
        </td>
      `;
      tabela.appendChild(tr);
    });
  }

  function renderHistorico(id) {
    const h = historicos[id] || [];
    tabelaHistorico.innerHTML = "";
    funcionarioSelecionado.textContent = funcionarios.find(f => f.id === id).nome;
    if (h.length === 0) {
      tabelaHistorico.innerHTML = `<tr><td colspan="5">Nenhum histórico encontrado.</td></tr>`;
    } else {
      h.forEach(reg => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${reg.id}</td>
          <td>${reg.epi}</td>
          <td>${reg.entrega}</td>
          <td>${reg.validade}</td>
          <td>${reg.status}</td>
        `;
        tabelaHistorico.appendChild(tr);
      });
    }
    historico.classList.remove("hidden");
  }

  // Eventos
  btnNovo.addEventListener("click", () => form.classList.remove("hidden"));
  btnCancelar.addEventListener("click", () => form.classList.add("hidden"));
  tabela.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-historico")) {
      const id = parseInt(e.target.dataset.id);
      renderHistorico(id);
    }
  });

  renderTabela();
});
