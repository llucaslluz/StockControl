document.addEventListener("DOMContentLoaded", () => {
  const lotes = [
    { sku: "001", material: "Capacete Seg.", lote: "LOTE-A01", validade: "2026-12-15", saldo: "80 un", loc: "A01" },
    { sku: "001", material: "Capacete Seg.", lote: "LOTE-A02", validade: "2027-01-20", saldo: "40 un", loc: "A02" },
    { sku: "002", material: "Luva Nitril.",  lote: "LOTE-B07", validade: "2025-11-05", saldo: "10 cx", loc: "B01" },
    { sku: "003", material: "Óculos Prot.",  lote: "Série-145", validade: "", saldo: "5 un", loc: "C03" },
    { sku: "004", material: "Botina Seg.",   lote: "LOTE-C99", validade: "2025-08-01", saldo: "50 par", loc: "D02" }
  ];

  const tbody = document.getElementById("tabela-lotes");
  const listaAlertas = document.getElementById("lista-alertas");

  function renderTabela(lista) {
    tbody.innerHTML = "";
    lista.forEach(item => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${item.sku}</td>
        <td>${item.material}</td>
        <td>${item.lote}</td>
        <td>${item.validade || "-"}</td>
        <td>${item.saldo}</td>
        <td>${item.loc}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  function renderAlertas(lista) {
    listaAlertas.innerHTML = "";
    const hoje = new Date();
    lista.forEach(item => {
      if (!item.validade) return;
      const validade = new Date(item.validade);
      const diff = (validade - hoje) / (1000 * 60 * 60 * 24); // dias
      if (diff < 0) {
        listaAlertas.innerHTML += `<li>[!] ${item.material} (${item.lote}) já está vencido!</li>`;
      } else if (diff <= 60) {
        listaAlertas.innerHTML += `<li>[!] ${item.material} (${item.lote}) vence em ${Math.ceil(diff)} dias.</li>`;
      }
    });
  }

  document.getElementById("btn-aplicar-filtros")?.addEventListener("click", () => {
    const mat = document.getElementById("filtro-material").value.toLowerCase();
    const status = document.getElementById("filtro-status").value;

    const filtrados = lotes.filter(item => {
      const byMat = mat === "" || item.material.toLowerCase().includes(mat);
      let byStatus = true;

      if (status) {
        const hoje = new Date();
        if (item.validade) {
          const validade = new Date(item.validade);
          const diff = (validade - hoje) / (1000 * 60 * 60 * 24);
          if (status === "Vencido") byStatus = diff < 0;
          if (status === "Vencendo") byStatus = diff >= 0 && diff <= 60;
          if (status === "OK") byStatus = diff > 60;
        } else {
          byStatus = status === "OK";
        }
      }
      return byMat && byStatus;
    });

    renderTabela(filtrados);
    renderAlertas(filtrados);
  });

  // Export mock
  document.getElementById("btn-exportar-csv")?.addEventListener("click", () => alert("Exportar CSV (mock)"));
  document.getElementById("btn-exportar-pdf")?.addEventListener("click", () => alert("Exportar PDF (mock)"));

  // Inicial
  renderTabela(lotes);
  renderAlertas(lotes);
});
