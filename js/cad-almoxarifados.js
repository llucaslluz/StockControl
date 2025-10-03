document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-almox");
  const form = document.getElementById("form-almox");
  const btnNovo = document.getElementById("btn-novo");
  const btnCancelar = document.getElementById("btn-cancelar");

  // Mock inicial
  const almoxarifados = [
    {id: 1, nome: "Almox Central", codigo: "ALM01", unidade: "Pirituba", status: "Ativo"},
    {id: 2, nome: "Almox Obra X", codigo: "ALM02", unidade: "Cubatão", status: "Ativo"},
    {id: 3, nome: "Almox Temporário", codigo: "ALM03", unidade: "Mauá", status: "Inativo"},
  ];

  function renderTabela() {
    tabela.innerHTML = "";
    almoxarifados.forEach(a => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${a.id}</td>
        <td>${a.nome}</td>
        <td>${a.codigo}</td>
        <td>${a.unidade}</td>
        <td>${a.status}</td>
        <td>
          <button class="btn-secondary">Editar</button>
          <button class="btn-secondary">Excluir</button>
          <button class="btn-secondary">Ver Localizações</button>
        </td>
      `;
      tabela.appendChild(tr);
    });
  }

  // Eventos
  btnNovo.addEventListener("click", () => form.classList.remove("hidden"));
  btnCancelar.addEventListener("click", () => form.classList.add("hidden"));

  renderTabela();
});
