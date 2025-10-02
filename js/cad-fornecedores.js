document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-fornecedores");
  const tabelaHistorico = document.getElementById("tabela-historico");
  const form = document.getElementById("form-fornecedor");
  const historico = document.getElementById("historico");
  const fornecedorSelecionado = document.getElementById("fornecedor-selecionado");
  const btnNovo = document.getElementById("btn-novo");
  const btnCancelar = document.getElementById("btn-cancelar");

  // Mock inicial
  const fornecedores = [
    {id: 1, nome: "Fornec. A", cnpj: "12.345.678/0001-11", email: "contato@a.com", status: "Ativo"},
    {id: 2, nome: "Fornec. B", cnpj: "98.765.432/0001-99", email: "vendas@b.com", status: "Ativo"},
    {id: 3, nome: "Fornec. C", cnpj: "11.222.333/0001-44", email: "suporte@c.com", status: "Inativo"},
  ];

  const historicos = {
    1: [
      {id: 1, material: "Capacete Seg.", preco: "35,00 R$", data: "01/01/25", nf: "NF#450"},
      {id: 2, material: "Óculos Prot.", preco: "50,00 R$", data: "15/02/25", nf: "NF#452"},
      {id: 3, material: "Luva Nitril.", preco: "15,00 R$", data: "01/03/25", nf: "NF#460"},
    ],
    2: [
      {id: 1, material: "Botina Seg.", preco: "100,00 R$", data: "05/02/25", nf: "NF#470"},
    ],
    3: []
  };

  function renderTabela() {
    tabela.innerHTML = "";
    fornecedores.forEach(f => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${f.id}</td>
        <td>${f.nome}</td>
        <td>${f.cnpj}</td>
        <td>${f.email}</td>
        <td>${f.status}</td>
        <td>
          <button class="btn-secondary btn-historico" data-id="${f.id}">Ver Histórico</button>
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
    fornecedorSelecionado.textContent = fornecedores.find(f => f.id === id).nome;
    if (h.length === 0) {
      tabelaHistorico.innerHTML = `<tr><td colspan="5">Nenhum histórico encontrado.</td></tr>`;
    } else {
      h.forEach(reg => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${reg.id}</td>
          <td>${reg.material}</td>
          <td>${reg.preco}</td>
          <td>${reg.data}</td>
          <td>${reg.nf}</td>
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
