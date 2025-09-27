document.addEventListener("DOMContentLoaded", () => {
  const movimentos = [
    { id: 321, data: "2025-03-05 09:00", tipo: "IN-Receb", mat: "Capacete", qtd: "+50 un", usuario: "Lucas",
      detalhe: { origem: "Recebimento NF #123", lote: "A01", validade: "15/12/2026", local: "Almox 01 / R01", custoUnit: 35, ip: "192.168.1.15" } },
    { id: 322, data: "2025-03-05 11:00", tipo: "OUT-EPI", mat: "Luva Nitril.", qtd: "-10 cx", usuario: "João",
      detalhe: { origem: "Entrega EPI", lote: "B07", validade: "05/11/2025", local: "Almox 01 / B01", custoUnit: 12, ip: "192.168.1.20" } },
    { id: 323, data: "2025-03-06 14:00", tipo: "IN-Receb", mat: "Capacete", qtd: "+30 un", usuario: "João",
      detalhe: { origem: "Recebimento NF #124", lote: "A02", validade: "20/01/2027", local: "Almox 01 / A02", custoUnit: 35, ip: "192.168.1.20" } },
    { id: 324, data: "2025-03-07 08:00", tipo: "AJUSTE", mat: "Óculos Prot.", qtd: "-5 un", usuario: "Lucas",
      detalhe: { origem: "Ajuste Inventário", lote: "Série-145", validade: "-", local: "Almox 01 / C03", custoUnit: 20, ip: "192.168.1.15" } },
    { id: 325, data: "2025-03-07 10:00", tipo: "OUT-Proj", mat: "Botina Seg.", qtd: "-20 par", usuario: "Ana",
      detalhe: { origem: "Saída Projeto", lote: "C99", validade: "01/08/2025", local: "Almox 01 / D02", custoUnit: 50, ip: "192.168.1.30" } }
  ];

  const tbody = document.getElementById("tabela-movimentacoes");
  const detalheBox = document.getElementById("detalhe-mov");
  const detalheConteudo = document.getElementById("detalhe-conteudo");

  function renderTabela(lista) {
    tbody.innerHTML = "";
    lista.forEach(mov => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${mov.id}</td>
        <td>${mov.data}</td>
        <td>${mov.tipo}</td>
        <td>${mov.mat}</td>
        <td>${mov.qtd}</td>
        <td>${mov.usuario}</td>
      `;
      tr.addEventListener("click", () => mostrarDetalhe(mov));
      tbody.appendChild(tr);
    });
  }

  function mostrarDetalhe(mov) {
    detalheBox.classList.remove("hidden");
    detalheConteudo.innerHTML = `
      <p><strong>Tipo:</strong> ${mov.detalhe.origem}</p>
      <p><strong>Lote:</strong> ${mov.detalhe.lote} | <strong>Validade:</strong> ${mov.detalhe.validade}</p>
      <p><strong>Local:</strong> ${mov.detalhe.local}</p>
      <p><strong>Custo Unit.:</strong> R$ ${mov.detalhe.custoUnit.toFixed(2)} |
         <strong>Total:</strong> R$ ${(mov.detalhe.custoUnit * parseInt(mov.qtd)).toFixed(2)}</p>
      <p><strong>Usuário:</strong> ${mov.usuario} | <strong>IP:</strong> ${mov.detalhe.ip}</p>
    `;
  }

  // Botões mock de exportação
  document.getElementById("btn-exportar-csv")?.addEventListener("click", () => alert("Exportar CSV (mock)"));
  document.getElementById("btn-exportar-pdf")?.addEventListener("click", () => alert("Exportar PDF (mock)"));

  // Filtros (mock — só material e tipo funcionando)
  document.getElementById("btn-aplicar-filtros")?.addEventListener("click", () => {
    const mat = document.getElementById("filtro-material").value.toLowerCase();
    const tipo = document.getElementById("filtro-tipo").value;

    const filtrados = movimentos.filter(m => {
      const byMat = mat === "" || m.mat.toLowerCase().includes(mat);
      const byTipo = tipo === "" || m.tipo.startsWith(tipo);
      return byMat && byTipo;
    });

    renderTabela(filtrados);
  });

  // Inicial
  renderTabela(movimentos);
});
