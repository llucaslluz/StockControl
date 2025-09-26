// Consumo por Categoria (barras)
const ctxConsumo = document.getElementById('consumoCategoria');
if (ctxConsumo) {
  new Chart(ctxConsumo, {
    type: 'bar',
    data: {
      labels: ['EPIs', 'Elétricos', 'Mecânicos', 'Hidráulicos'],
      datasets: [{
        label: 'Consumo (un)',
        data: [1200, 800, 600, 400],
        backgroundColor: '#3b82f6'
      }]
    }
  });
}

// Custo por Categoria (pizza)
const ctxCusto = document.getElementById('custoCategoria');
if (ctxCusto) {
  new Chart(ctxCusto, {
    type: 'doughnut',
    data: {
      labels: ['EPIs', 'Elétricos', 'Mecânicos', 'Hidráulicos'],
      datasets: [{
        label: 'Custo (R$)',
        data: [150000, 120000, 100000, 80000],
        backgroundColor: ['#3b82f6','#60a5fa','#93c5fd','#bfdbfe']
      }]
    }
  });
}

// Consumo (barra)
new Chart(document.getElementById('consumoChart'), {
  type: 'bar',
  data: {
    labels: ['EPIs', 'Elétricos', 'Mecânicos', 'Hidráulicos'],
    datasets: [{
      label: 'Consumo (un)',
      data: [1200, 800, 600, 400],
      backgroundColor: '#3b82f6'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

// Custo (pizza)
new Chart(document.getElementById('custoChart'), {
  type: 'doughnut',
  data: {
    labels: ['EPIs', 'Elétricos', 'Mecânicos', 'Hidráulicos'],
    datasets: [{
      data: [45, 25, 20, 10],
      backgroundColor: ['#3b82f6','#60a5fa','#93c5fd','#bfdbfe']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});
