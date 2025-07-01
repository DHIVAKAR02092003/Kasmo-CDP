// Charts for User Experience Insights
window.addEventListener('DOMContentLoaded', () => {
  renderSessionChart();
  renderPlatformChart();
});

function renderSessionChart() {
  new Chart(document.getElementById('sessionChart'), {
    type: 'bar',
    data: {
      labels: ['< 1 min', '1-5 min', '5-10 min', '10+ min'],
      datasets: [{
        label: 'Session Count',
        data: [120, 250, 180, 70],
        backgroundColor: '#0b5ed7',
        borderRadius: 6,
        barThickness: 40
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y}`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 50
          }
        }
      }
    }
  });
}

function renderPlatformChart() {
  new Chart(document.getElementById('platformChart'), {
    type: 'doughnut',
    data: {
      labels: ['Web', 'iOS', 'Android'],
      datasets: [{
        data: [45, 30, 25],
        backgroundColor: ['#0b5ed7', '#ffc107', '#28a745']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { boxWidth: 20, color: '#333' }
        },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.label}: ${ctx.parsed}%`
          }
        }
      }
    }
  });
}
