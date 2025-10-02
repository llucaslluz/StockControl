document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-ajustes");

  const diferencas = [
    { id: 1, material: "Capacete Seg.", esperado: 120, contado: 118, diff: -2 },
    { id: 2, material: "Óculos Prot.", esperado: 80, contado: 82, diff: 2 },
    { id: 3, material: "Botina Seg.", esperado: 210, contado: 200, diff: -10 }
  ];

  function renderTabela() {
    tabela.innerHTML = "";
    diferencas.forEach(item => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.material}</td>
        <td>${item.esperado}</td>
        <td>${item.contado}</td>
        <td>${item.diff}</td>
        <td>
          <button class="btn-primary" onclick="aprovar(${item.id})">Aprovar</button>
          <button class="btn-secondary" onclick="rejeitar(${item.id})">Rejeitar</button>
        </td>
      `;
      tabela.appendChild(tr);
    });
  }

  // Ações por item
  window.aprovar = (id) => {
    alert("Ajuste aprovado para item #" + id);
  };

  window.rejeitar = (id) => {
    const motivo = document.getElementById("motivo-ajuste").value;
    if (!motivo) {
      alert("Informe o motivo da rejeição!");
      return;
    }
    alert("Ajuste rejeitado para item #" + id + ". Motivo: " + motivo);
  };

  // Ações globais
  document.getElementById("btn-aprovar-todos").addEventListener("click", () => {
    alert("Todos os ajustes foram aprovados.");
  });

  document.getElementById("btn-rejeitar-todos").addEventListener("click", () => {
    const motivo = document.getElementById("motivo-ajuste").value;
    if (!motivo) {
      alert("Informe o motivo da rejeição!");
      return;
    }
    alert("Todos os ajustes foram rejeitados. Motivo: " + motivo);
  });

  renderTabela();
});
