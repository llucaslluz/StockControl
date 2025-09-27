// Mock inicial de notas fiscais
const notas = [
  { nf: 123, fornecedor: "Braskem", emissao: "01/03/25", chegada: "05/03/25", status: "Aberta", valor: 12500 },
  { nf: 124, fornecedor: "Voith", emissao: "02/03/25", chegada: "06/03/25", status: "Parcial", valor: 8200 },
  { nf: 125, fornecedor: "Petrobras", emissao: "02/03/25", chegada: "-", status: "Aberta", valor: 15000 },
  { nf: 126, fornecedor: "Braskem", emissao: "03/03/25", chegada: "07/03/25", status: "Concluída", valor: 22700 },
  { nf: 127, fornecedor: "Voith", emissao: "04/03/25", chegada: "08/03/25", status: "Divergente", valor: 9850 }
];

function renderTabela(lista) {
  const tbody = document.getElementById("tabela-nfs");
  tbody.innerHTML = "";
  lista.forEach(nf => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${nf.nf}</td>
      <td>${nf.fornecedor}</td>
      <td>${nf.emissao}</td>
      <td>${nf.chegada}</td>
      <td><span class="status ${nf.status}">${nf.status}</span></td>
      <td>R$ ${nf.valor.toLocaleString("pt-BR")}</td>
      <td>
        <button onclick="verDetalhes(${nf.nf})">Ver</button>
        <button onclick="receber(${nf.nf})">Receber</button>
        <button onclick="cancelar(${nf.nf})">Cancelar</button>
        <button onclick="excluir(${nf.nf})">Excluir</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function verDetalhes(id) { alert(`Abrir detalhes da NF ${id}`); }
function receber(id) { alert(`Registrar recebimento da NF ${id}`); }
function cancelar(id) { alert(`Cancelar NF ${id}`); }
function excluir(id) { alert(`Excluir NF ${id}`); }

// Filtros
document.getElementById("btn-filtros").addEventListener("click", () => {
  document.getElementById("filtros").classList.toggle("hidden");
});

document.getElementById("btn-aplicar-filtros").addEventListener("click", () => {
  const fornecedor = document.getElementById("filtro-fornecedor").value.toLowerCase();
  const status = document.getElementById("filtro-status").value;

  const filtradas = notas.filter(nf => {
    const byFornecedor = fornecedor === "" || nf.fornecedor.toLowerCase().includes(fornecedor);
    const byStatus = status === "" || nf.status === status;
    return byFornecedor && byStatus;
  });

  renderTabela(filtradas);
});

// Botão Nova NF
document.getElementById("btn-nova").addEventListener("click", () => {
  window.location.href = "nova.html";
});

// Render inicial
renderTabela(notas);
