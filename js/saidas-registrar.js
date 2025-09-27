document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-itens");
  let contador = 1;

  function addItem(material="Capacete Seg.", qtd=1, lote="LOTE-A01", validade="2026-12-15") {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${contador++}</td>
      <td><input type="text" value="${material}"/></td>
      <td><input type="number" value="${qtd}" min="1"/></td>
      <td><input type="text" value="${lote}"/></td>
      <td><input type="date" value="${validade}"/></td>
      <td><button class="btn-secondary" onclick="this.closest('tr').remove()">X</button></td>
    `;
    tabela.appendChild(tr);
  }

  document.getElementById("btn-add-item")?.addEventListener("click", () => addItem());

  // Validação mock de EPI
  function validarEPI() {
    const alertas = document.getElementById("alertas-epi");
    const funcionario = document.getElementById("funcionario").value;
    if (funcionario === "João Silva") {
      alertas.innerHTML = `
        <h2>Validações de EPI</h2>
        <p>⚠️ João Silva já possui um Capacete vencido.</p>
      `;
    } else {
      alertas.innerHTML = `
        <h2>Validações de EPI</h2>
        <p>Nenhum alerta no momento.</p>
      `;
    }
  }
  document.getElementById("funcionario")?.addEventListener("change", validarEPI);

  // Registrar saída
  document.getElementById("btn-registrar")?.addEventListener("click", () => {
    const assinatura = document.getElementById("assinatura").value;
    if (!assinatura) {
      alert("Digite a senha do funcionário para confirmar a saída.");
      return;
    }
    alert("Saída registrada com sucesso!");
  });

  // Render inicial
  addItem("Capacete Seg.", 1, "LOTE-A01", "2026-12-15");
  addItem("Luva Nitril.", 2, "LOTE-B07", "2025-11-05");
});
