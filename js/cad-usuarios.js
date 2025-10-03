document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-usuarios");
  const form = document.getElementById("form-usuario");
  const btnNovo = document.getElementById("btn-novo");
  const btnCancelar = document.getElementById("btn-cancelar");

  // Mock inicial
  const usuarios = [
    {id: 1, nome: "João Silva", registro: "CLT-998877", perfil: "FUNC", status: "Ativo"},
    {id: 2, nome: "Maria Souza", registro: "CLT-112233", perfil: "ALMOX", status: "Ativo"},
    {id: 3, nome: "Ana Santos", registro: "CLT-445566", perfil: "GESTOR_LOCAL", status: "Ativo"},
    {id: 4, nome: "Pedro Rocha", registro: "CLT-778899", perfil: "GESTOR_MASTER", status: "Inativo"},
  ];

  function renderTabela() {
    tabela.innerHTML = "";
    usuarios.forEach(u => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${u.id}</td>
        <td>${u.nome}</td>
        <td>${u.registro}</td>
        <td>${u.perfil}</td>
        <td>${u.status}</td>
        <td>
          <button class="btn-secondary">Editar</button>
          <button class="btn-secondary">Resetar Senha</button>
          <button class="btn-secondary">Desativar</button>
        </td>
      `;
      tabela.appendChild(tr);
    });
  }

  btnNovo.addEventListener("click", () => form.classList.remove("hidden"));
  btnCancelar.addEventListener("click", () => form.classList.add("hidden"));

  renderTabela();
});
