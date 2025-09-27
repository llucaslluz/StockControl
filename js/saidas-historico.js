document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-saidas");
  const detalhe = document.getElementById("detalhe-saida");
  const detalheConteudo = document.getElementById("detalhe-conteudo");

  // Mock de saídas
  const saidas = [
    { id: 501, data: "07/03/25 10h", funcionario: "João Silva", material: "Capacete Seg.", qtd: "1 un", user: "Lucas" },
    { id: 502, data: "07/03/25 10h", funcionario: "João Silva", material: "Luva Nitril.", qtd: "2 cx", user: "Lucas" },
    { id: 503, data: "06/03/25 14h", funcionario: "Ana Souza", material: "Botina Seg.", qtd: "1 par", user: "João" },
    { id: 504, data: "06/03/25 09h", funcionario: "Pedro Lima", material: "Óculos Prot.", qtd: "1 un", user: "João" },
  ];

  function renderTabela(lista) {
    tabela.innerHTML = "";
    lista.forEach(saida => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${saida.id}</td>
        <td>${saida.data}</td>
        <td>${saida.funcionario}</td>
        <td>${saida.material}</td>
        <td>${saida.qtd}</td>
        <td>${saida.user}</td>
      `;
      tr.addEventListener("click", () => mostrarDetalhe(saida));
      tabela.appendChild(tr);
    });
  }

  function mostrarDetalhe(saida) {
    detalhe.classList.remove("hidden");
    detalheConteudo.innerHTML = `
      <p><strong>Funcionário:</strong> ${saida.funcionario} (Mat. 12345)</p>
      <p><strong>Materiais:</strong></p>
      <ul>
        <li>${saida.material} | Lote A01 | Validade 15/12/2026</li>
      </ul>
      <p><strong>Assinatura:</strong> Confirmada (login/senha)</p>
      <p><strong>Emitido por:</strong> ${saida.user} (ALMOX) às ${saida.data}</p>
    `;
  }

  // Mock filtro
  document.getElementById("btn-aplicar-filtros").addEventListener("click", () => {
    const func = document.getElementById("filtro-funcionario").value.toLowerCase();
    const mat = document.getElementById("filtro-material").value.toLowerCase();
    const filtradas = saidas.filter(s =>
      (func === "" || s.funcionario.toLowerCase().includes(func)) &&
      (mat === "" || s.material.toLowerCase().includes(mat))
    );
    renderTabela(filtradas);
  });

  renderTabela(saidas);
});
