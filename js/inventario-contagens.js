document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-contagens");

  const itens = [
    { id: 1, material: "Capacete Seg.", esperado: 120, contado: 118, status: "Pendente" },
    { id: 2, material: "Luva Nitril.", esperado: 30, contado: 30, status: "OK" },
    { id: 3, material: "Óculos Prot.", esperado: 80, contado: 82, status: "Pendente" },
    { id: 4, material: "Botina Seg.", esperado: 210, contado: null, status: "NaoContado" }
  ];

  function renderTabela() {
    tabela.innerHTML = "";
    itens.forEach(item => {
      const diff = item.contado !== null ? item.contado - item.esperado : "-";
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.material}</td>
        <td>${item.esperado}</td>
        <td><input type="number" value="${item.contado ?? ""}" onchange="atualizarContagem(${item.id}, this.value)" /></td>
        <td>${diff}</td>
        <td><span class="status ${item.status}">${item.status.replace("NaoContado","Não contado")}</span></td>
      `;
      tabela.appendChild(tr);
    });
  }

  // Atualizar contagem
  window.atualizarContagem = (id, val) => {
    const item = itens.find(i => i.id === id);
    if (item) {
      item.contado = val ? parseInt(val) : null;
      if (item.contado === null) {
        item.status = "NaoContado";
      } else if (item.contado === item.esperado) {
        item.status = "OK";
      } else {
        item.status = "Pendente";
      }
      renderTabela();
    }
  };

  // Ações rápidas
  document.getElementById("btn-salvar").addEventListener("click", () => {
    alert("Contagens salvas parcialmente.");
  });

  document.getElementById("btn-enviar").addEventListener("click", () => {
    alert("Contagens enviadas para aprovação.");
  });

  renderTabela();
});
