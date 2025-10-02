document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-categorias");
  const arvore = document.getElementById("arvore-categorias");
  const form = document.getElementById("form-categoria");
  const btnNova = document.getElementById("btn-nova");
  const btnCancelar = document.getElementById("btn-cancelar");

  // Mock inicial
  const categorias = [
    {id: 1, nome: "EPI", pai: "-", status: "Ativo"},
    {id: 2, nome: "Ferramentas", pai: "-", status: "Ativo"},
    {id: 3, nome: "Uniformes", pai: "-", status: "Ativo"},
    {id: 4, nome: "Luvas", pai: "EPI", status: "Ativo"},
    {id: 5, nome: "Capacetes", pai: "EPI", status: "Ativo"},
    {id: 6, nome: "Botinas", pai: "EPI", status: "Inativo"},
  ];

  function renderTabela() {
    tabela.innerHTML = "";
    categorias.forEach(c => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${c.id}</td>
        <td>${c.nome}</td>
        <td>${c.pai}</td>
        <td>${c.status}</td>
        <td>
          <button class="btn-secondary">Editar</button>
          <button class="btn-secondary">Excluir</button>
          <button class="btn-secondary">Ver Materiais</button>
        </td>
      `;
      tabela.appendChild(tr);
    });
  }

  function renderArvore() {
    arvore.innerHTML = "";
    const raiz = categorias.filter(c => c.pai === "-");
    raiz.forEach(r => {
      const li = document.createElement("li");
      li.textContent = r.nome;
      if (r.status === "Inativo") li.classList.add("inativo");

      const filhos = categorias.filter(c => c.pai === r.nome);
      if (filhos.length > 0) {
        const ul = document.createElement("ul");
        filhos.forEach(f => {
          const liFilho = document.createElement("li");
          liFilho.textContent = f.nome + (f.status === "Inativo" ? " (Inativo)" : "");
          if (f.status === "Inativo") liFilho.classList.add("inativo");
          ul.appendChild(liFilho);
        });
        li.appendChild(ul);
      }
      arvore.appendChild(li);
    });
  }

  btnNova.addEventListener("click", () => form.classList.remove("hidden"));
  btnCancelar.addEventListener("click", () => form.classList.add("hidden"));

  renderTabela();
  renderArvore();
});
