document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-uom");
  const form = document.getElementById("form-uom");
  const btnNovo = document.getElementById("btn-novo");
  const btnCancelar = document.getElementById("btn-cancelar");

  // Mock inicial
  const uoms = [
    {id: 1, codigo: "UN", descricao: "Unidade", status: "Ativo"},
    {id: 2, codigo: "PAR", descricao: "Par", status: "Ativo"},
    {id: 3, codigo: "CX", descricao: "Caixa (10 unidades)", status: "Ativo"},
    {id: 4, codigo: "KG", descricao: "Quilograma", status: "Ativo"},
    {id: 5, codigo: "LT", descricao: "Litro", status: "Inativo"},
  ];

  function renderTabela() {
    tabela.innerHTML = "";
    uoms.forEach(u => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${u.id}</td>
        <td>${u.codigo}</td>
        <td>${u.descricao}</td>
        <td>${u.status}</td>
        <td>
          <button class="btn-secondary">Editar</button>
          <button class="btn-secondary">Excluir</button>
          <button class="btn-secondary">Associar Materiais</button>
        </td>
      `;
      tabela.appendChild(tr);
    });
  }

  btnNovo.addEventListener("click", () => form.classList.remove("hidden"));
  btnCancelar.addEventListener("click", () => form.classList.add("hidden"));

  renderTabela();
});
