document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-log");

  // Mock inicial
  const logs = [
    {data: "20/09 14:21", usuario: "admin@stockcontrol", acao: "Alterou tema"},
    {data: "19/09 09:12", usuario: "gestor.master@empresa", acao: "Resetou senha"},
    {data: "18/09 16:45", usuario: "admin@stockcontrol", acao: "Ativou alerta"},
  ];

  function renderTabela() {
    tabela.innerHTML = "";
    logs.forEach(l => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${l.data}</td>
        <td>${l.usuario}</td>
        <td>${l.acao}</td>
      `;
      tabela.appendChild(tr);
    });
  }

  renderTabela();
});
