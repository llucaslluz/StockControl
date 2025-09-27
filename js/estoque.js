document.addEventListener("DOMContentLoaded", () => {
  // Mock inicial
  const saldos = [
    { sku: "001", material: "Capacete Seg.", saldo: "120 un", min: 50,  max: 200, status: "OK" },
    { sku: "002", material: "Luva Nitril.",  saldo: "30 cx",  min: 40,  max: 100, status: "↓ Min" },
    { sku: "003", material: "Óculos Prot.",  saldo: "80 un",  min: 20,  max: 150, status: "OK" },
    { sku: "004", material: "Botina Seg.",   saldo: "210 par",min: 50,  max: 180, status: "↑ Max" },
    { sku: "005", material: "Protetor Aud.", saldo: "5 cx",   min: 10,  max: 50,  status: "↓ Min" }
  ];

  const tbody = document.getElementById("tabela-saldos");
  const materialInp = document.getElementById("filtro-material");
  const statusSel   = document.getElementById("filtro-status");
  const btnFiltros  = document.getElementById("btn-aplicar-filtros");

  function statusClass(s) {
    if (s === "OK") return "ok";
    if (s === "↓ Min") return "min";
    return "max";
  }

  function render(lista) {
    if (!tbody) return;
    tbody.innerHTML = "";
    lista.forEach(i => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${i.sku}</td>
        <td>${i.material}</td>
        <td>${i.saldo}</td>
        <td>${i.min}</td>
        <td>${i.max}</td>
        <td class="status ${statusClass(i.status)}">${i.status}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  function filtrar() {
    const mat = (materialInp?.value || "").toLowerCase();
    const sts = statusSel?.value || "";

    const out = saldos.filter(i => {
      const byMat = mat === "" || i.material.toLowerCase().includes(mat);
      const bySts = sts === "" || i.status === sts;
      return byMat && bySts;
    });

    render(out);
  }

  btnFiltros?.addEventListener("click", filtrar);

  // Export (mock)
  document.getElementById("btn-exportar-csv")?.addEventListener("click", () => {
    alert("Exportar CSV (mock)");
  });
  document.getElementById("btn-exportar-pdf")?.addEventListener("click", () => {
    alert("Exportar PDF (mock)");
  });

  // Inicial
  render(saldos);
});
