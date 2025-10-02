document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-itens");
  const itemSelecionado = document.getElementById("item-selecionado");

  // Mock inicial
  const itens = [
    { id: 1, material: "Capacete Seg.", qtdSolic: 1, qtdAprov: 1, qtdAtend: 1, sit: "OK" },
    { id: 2, material: "Luva Nitril.", qtdSolic: 2, qtdAprov: 2, qtdAtend: 1, sit: "Parcial" }
  ];

  // Renderiza tabela
  function renderTabela() {
    tabela.innerHTML = "";
    itens.forEach(item => {
      const tr = document.createElement("tr");
      const select = document.createElement("select");

      // opções do select
      for (let i = 0; i <= item.qtdSolic; i++) {
        const opt = document.createElement("option");
        opt.value = i;
        opt.textContent = i;
        if (i === item.qtdAprov) opt.selected = true;
        select.appendChild(opt);
      }

      // evento direto (sem precisar usar window.ajustarAprovado)
      select.addEventListener("change", e => {
        item.qtdAprov = parseInt(e.target.value);
      });

      tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.material}</td>
        <td>${item.qtdSolic}</td>
        <td></td>
        <td>${item.qtdAtend}</td>
        <td>${item.sit}</td>
      `;

      // insere o select dentro da célula correta
      tr.children[3].appendChild(select);

      // evento de clique para selecionar item
      tr.addEventListener("click", () => selecionarItem(item));

      tabela.appendChild(tr);
    });
  }

  // Seleção de item
  function selecionarItem(item) {
    if (itemSelecionado) {
      itemSelecionado.textContent =
        `${item.material} (Aprovado: ${item.qtdAprov}, Atendido: ${item.qtdAtend})`;
    }
  }

  // Ações Gestor
  document.getElementById("btn-aprovar-todos")?.addEventListener("click", () => {
    itens.forEach(i => i.qtdAprov = i.qtdSolic);
    alert("Todos os itens aprovados.");
    renderTabela();
  });

  document.getElementById("btn-reprovar-todos")?.addEventListener("click", () => {
    const motivo = document.getElementById("motivo-reprovacao")?.value;
    if (!motivo) {
      alert("Informe o motivo da reprovação.");
      return;
    }
    itens.forEach(i => i.qtdAprov = 0);
    alert("Todos os itens reprovados. Motivo: " + motivo);
    renderTabela();
  });

  // Ações Almox
  document.getElementById("btn-saida-parcial")?.addEventListener("click", () => {
    alert("Saída parcial registrada!");
  });

  document.getElementById("btn-saida-total")?.addEventListener("click", () => {
    alert("Saída total registrada!");
  });

  renderTabela();
});
