document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-requisicoes");
  const areaFiltros = document.getElementById("area-filtros");

  // Mock de requisições
  const requisicoes = [
    { id: 101, data: "06/03/25", funcionario: "João Silva", status: "Pendente", itens: 2 },
    { id: 102, data: "06/03/25", funcionario: "Ana Souza", status: "Aprovada", itens: 1 },
    { id: 103, data: "05/03/25", funcionario: "Pedro Lima", status: "Reprovada", itens: 3 },
    { id: 104, data: "04/03/25", funcionario: "Carla Dias", status: "Atendida", itens: 2 },
  ];

  function renderTabela(lista) {
    tabela.innerHTML = "";
    lista.forEach(req => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${req.id}</td>
        <td>${req.data}</td>
        <td>${req.funcionario}</td>
        <td><span class="status ${req.status}">${req.status}</span></td>
        <td>${req.itens}</td>
        <td><button class="btn-secondary" onclick="verDetalhe(${req.id})">Ver</button></td>
      `;
      tabela.appendChild(tr);
    });
  }

  // Mock função Ver Detalhe
  window.verDetalhe = (id) => {
    alert(`Abrindo detalhes da Requisição ${id}`);
    window.location.href = "detalhe.html";
  };

  // Filtros toggle
  document.getElementById("btn-filtros").addEventListener("click", () => {
    areaFiltros.classList.toggle("hidden");
  });

  // Aplicar filtros
  document.getElementById("btn-aplicar-filtros").addEventListener("click", () => {
    const func = document.getElementById("filtro-funcionario").value.toLowerCase();
    const status = document.getElementById("filtro-status").value;
    const filtradas = requisicoes.filter(r =>
      (func === "" || r.funcionario.toLowerCase().includes(func)) &&
      (status === "" || r.status === status)
    );
    renderTabela(filtradas);
  });

  // Botão Nova Requisição
  document.getElementById("btn-nova").addEventListener("click", () => {
    window.location.href = "nova.html";
  });

  // Render inicial
  renderTabela(requisicoes);
});
