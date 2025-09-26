// ===========================
// Dashboard Corporativo JS
// ===========================

// ------ Dados simulados ------
const dummyKpis = {
  custo_total: "R$ 780.000,00",
  consumo_medio: "2.500 un/mês",
  divergencias_nf: "8",
  unidades_ativas: "5",
};

const dummyAlerts = [
  { tipo: "estoque_min", unidade: "Pirituba", msg: "Estoque crítico de Luvas", nivel: "warning" },
  { tipo: "lote_vencer", unidade: "Jaraguá", msg: "Lote de Capacete vence em 10 dias", nivel: "warning" },
  { tipo: "nf_divergente", unidade: "Jundiaí", msg: "Divergência na NF #248", nivel: "danger" },
];

const dummyResumo = [
  { unidade: "Pirituba", estoque: 12450, custo: 450000, nfs: 3, alertas: 5 },
  { unidade: "Jaraguá", estoque: 8200,  custo: 320000, nfs: 2, alertas: 2 },
  { unidade: "Jundiaí", estoque: 6700,  custo: 280000, nfs: 1, alertas: 1 },
];

// consumo fake só para o gráfico de barras
const dummyConsumo = [
  { unidade: "Pirituba", valor: 3250 },
  { unidade: "Jaraguá", valor: 2100 },
  { unidade: "Jundiaí", valor: 1800 },
];

// ------ Utilitários ------
function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

function ensureCanvas(areaId) {
  const area = document.getElementById(areaId);
  if (!area) return null;
  area.innerHTML = '<canvas aria-hidden="true"></canvas>';
  return area.querySelector("canvas").getContext("2d");
}

// ------ Populadores ------
function carregarKpis() {
  Object.keys(dummyKpis).forEach((key) => {
    const el = document.querySelector(`[data-kpi="${key}"] .kpi-value`);
    if (el) el.textContent = dummyKpis[key];
  });
}

function carregarAlertas() {
  const container = document.getElementById("lista-alertas-corporativos");
  if (!container) return;
  container.innerHTML = "";
  dummyAlerts.forEach((a) => {
    const item = document.createElement("div");
    item.className = `alert-item alert-${a.nivel}`;
    item.innerHTML = `
      <span class="alert-icon">!</span>
      <div class="alert-content">
        <strong>${a.unidade}</strong> — ${a.msg}
        <small class="muted">agora mesmo</small>
      </div>
      <div class="alert-actions"><button class="btn btn-xs">Ver detalhes</button></div>
    `;
    container.appendChild(item);
  });
}

function carregarResumo() {
  const tbody = document.getElementById("tbl-resumo-body");
  if (!tbody) return;
  tbody.innerHTML = "";
  dummyResumo.forEach((it) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${it.unidade}</td>
      <td class="text-right">${it.estoque.toLocaleString("pt-BR")}</td>
      <td class="text-right">R$ ${it.custo.toLocaleString("pt-BR",{minimumFractionDigits:2})}</td>
      <td class="text-center">${it.nfs}</td>
      <td class="text-center"><span class="chip ${it.alertas>0?"chip-warning":""}">${it.alertas}</span></td>
      <td class="text-center"><a href="#" class="link ver-detalhes">Ver detalhes</a></td>
    `;
    tbody.appendChild(tr);
  });
}

// ------ Gráficos (Chart.js) ------
async function carregarGraficos() {
  // carrega Chart.js por CDN
  await loadScript("https://cdn.jsdelivr.net/npm/chart.js");

  // Consumo por Unidade (barras)
  const ctxConsumo = ensureCanvas("chart-consumo-unidade");
  if (ctxConsumo && window.Chart) {
    new Chart(ctxConsumo, {
      type: "bar",
      data: {
        labels: dummyConsumo.map(d => d.unidade),
        datasets: [{
          label: "Consumo (últ. 30 dias)",
          data: dummyConsumo.map(d => d.valor),
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } },
      },
    });
  }

  // Custo por Unidade (pizza)
  const ctxCusto = ensureCanvas("chart-custo-unidade");
  if (ctxCusto && window.Chart) {
    new Chart(ctxCusto, {
      type: "doughnut",
      data: {
        labels: dummyResumo.map(d => d.unidade),
        datasets: [{
          label: "Custo (R$)",
          data: dummyResumo.map(d => d.custo),
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: "bottom" } },
        cutout: "60%",
      },
    });
  }
}

// ------ Inicialização ------
document.addEventListener("DOMContentLoaded", () => {
  carregarKpis();
  carregarAlertas();
  carregarResumo();
  carregarGraficos(); // ativa os gráficos

  // placeholders de export
  document.querySelectorAll("[data-export]").forEach((btn) => {
    btn.addEventListener("click", () => alert("Exportar gráfico: " + btn.dataset.export));
  });
  document.getElementById("btn-export-resumo-xlsx")?.addEventListener("click", () =>
    alert("Exportar resumo em XLSX (futuro: Supabase + SheetJS)")
  );
  document.getElementById("btn-export-resumo-pdf")?.addEventListener("click", () =>
    alert("Exportar resumo em PDF (futuro: PDFMake)")
  );
});
