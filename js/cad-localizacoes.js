document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-local");
  const arvore = document.getElementById("arvore-local");
  const form = document.getElementById("form-local");
  const btnNovo = document.getElementById("btn-novo");
  const btnCancelar = document.getElementById("btn-cancelar");

  // Mock inicial
  const locais = [
    {id: 1, codigo: "A1", desc: "Rua A, Prateleira 1", almox: "Almox Central", status: "Ativo"},
    {id: 2, codigo: "B2", desc: "Rua B, Prateleira 2", almox: "Almox Central", status: "Ativo"},
    {id: 3, codigo: "R1-P2-03", desc: "Rua 1, Prateleira 2, Box 3", almox: "Almox Obra X", status: "Ativo"},
    {id: 4, codigo: "C1", desc: "Rua C, Prateleira 1", almox: "Almox Central", status: "Inativo"},
  ];

  function renderTabela() {
    tabela.innerHTML = "";
    locais.forEach(l => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${l.id}</td>
        <td>${l.codigo}</td>
        <td>${l.desc}</td>
        <td>${l.almox}</td>
        <td>${l.status}</td>
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
    arvore.innerHTML = `
      <li>Almox Central
        <ul>
          <li>Rua A → Prateleira 1 → A1</li>
          <li>Rua B → Prateleira 2 → B2</li>
          <li>Rua C → Prateleira 1 → C1</li>
        </ul>
      </li>
      <li>Almox Obra X
        <ul>
          <li>Rua 1 → Prateleira 2 → Box 3 → R1-P2-03</li>
        </ul>
      </li>
    `;
  }

  // Eventos
  btnNovo.addEventListener("click", () => form.classList.remove("hidden"));
  btnCancelar.addEventListener("click", () => form.classList.add("hidden"));

  renderTabela();
  renderArvore();
});
