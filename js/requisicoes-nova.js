document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-itens");
  let contador = 1;

  function addItem(material="Capacete Seg.", qtd=1, obs="") {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${contador++}</td>
      <td><input type="text" value="${material}"/></td>
      <td><input type="number" value="${qtd}" min="1"/></td>
      <td><input type="text" value="${obs}" placeholder="Observação..."/></td>
      <td><button class="btn-secondary" onclick="this.closest('tr').remove()">Excluir</button></td>
    `;
    tabela.appendChild(tr);
  }

  // Adicionar item
  document.getElementById("btn-add-item").addEventListener("click", () => addItem());

  // Botão Enviar
  document.getElementById("btn-enviar").addEventListener("click", () => {
    const req = document.getElementById("requisitante").value;
    const unidade = document.getElementById("unidade").value;
    const justificativa = document.getElementById("justificativa").value;

    if (req === "Selecione" || unidade === "Selecione" || justificativa.trim() === "") {
      alert("Preencha todos os campos antes de enviar.");
      return;
    }

    alert("Requisição enviada para aprovação!");
  });

  // Botão Cancelar
  document.getElementById("btn-cancelar").addEventListener("click", () => {
    if (confirm("Deseja realmente cancelar esta requisição?")) {
      window.location.href = "lista.html"; // redireciona para lista
    }
  });

  // Mock inicial
  addItem("Capacete Seg.", 1, "Substituição");
  addItem("Luva Nitril.", 2, "Uso obra");
});
